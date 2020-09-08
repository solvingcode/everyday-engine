define(function (require) {

    const EntityManager = require('../world/manager/EntityManager.js')
    const AttachEntity = require('../world/entity/AttachEntity.js')

    class Physics {

        constructor(physicsEngine) {
            this.entityManager = EntityManager.get()
            this.physicsEngine = physicsEngine
            this.physicsEngine.setPhysicsManager(this)
        }

        /**
         * Update all entities.
         */
        update() {
            const bodyEntities = this.entityManager.getEntitiesNotAs(AttachEntity)
            const jointEntites = this.entityManager.getEntitiesAs(AttachEntity)
            this.physicsEngine.getBodies().map((body, index) => {
                const entity = bodyEntities[index]
                const { x, y } = entity.fromCenterPosition(body.position)
                entity.setPosition({ x: parseInt(x), y: parseInt(y) })
                entity.setRotation(Math.round(body.angle * 100) / 100)
            })
            this.physicsEngine.getJoints().map((joint, index) => {
                const entity = jointEntites[index]
                const pointA = entity.entities.a.fromRelativeCenterPosition(joint.pointA)
                const pointB = entity.entities.b.fromRelativeCenterPosition(joint.pointB)
                entity.updatePoints(pointA, pointB)
            })
        }

        /**
         * Get the body phyiscs from the given entity
         * @param {Entity} entity 
         */
        getBodyFromEntity(entity) {
            const bodyEntities = this.entityManager.getEntitiesNotAs(AttachEntity)
            return this.physicsEngine.getBodies().find((body, index) => {
                const attachedEntity = bodyEntities[index]
                return attachedEntity.position.x === entity.position.x &&
                    attachedEntity.position.y === entity.position.y &&
                    attachedEntity.constructor === entity.constructor
            })
        }

        /**
         * Stop the engine
         */
        stop() {
            this.physicsEngine.stop()
        }

        /**
         * Unload the physics for entities
         */
        unload() {
            this.entityManager.entities.map(entity => entity.unloadPhysics())
        }

        /**
         * Load the physics for entites
         */
        load() {
            return this.before() && this.setup() && this.after()
        }

        /**
         * Init the phyiscs for entities before loading
         */
        before() {
            const jointEntities = this.entityManager.getEntitiesAs(AttachEntity)
            jointEntities.map(entity => entity.updateJointPosition(this.physicsEngine))
            return true
        }

        /**
         * Setup the physics for entities
         */
        setup() {
            this.entityManager.entities.map(entity => entity.loadPhysics(this.physicsEngine))
            return true
        }

        /**
         * Complete the physics after setup
         */
        after() {
            const bodyEntities = this.entityManager.getEntitiesNotAs(AttachEntity)
            bodyEntities.map(entity => entity.updateCollisionFilters(this.physicsEngine))
            return true
        }

        /**
         * Run the physics
         */
        run() {
            this.unload()
            this.physicsEngine.init()
            this.load()
            this.physicsEngine.run()
        }

    }

    return Physics
})