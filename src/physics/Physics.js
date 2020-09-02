define(function (require) {

    const EntityManager = require('../world/manager/EntityManager.js')
    const JointEntity = require('../world/entity/JointEntity.js')

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
            const allEntities = this.entityManager.entities
            const jointEntites = this.entityManager.entities.filter(entity => entity.constructor === JointEntity)
            this.physicsEngine.getBodies().map((body, index) => {
                const entity = allEntities[index]
                const { x, y } = entity.fromCenterPosition(body.position)
                entity.setPosition({ x: parseInt(x), y: parseInt(y) })
                entity.setRotation(Math.round(body.angle * 100) / 100)
            })
            this.physicsEngine.getJoints().map((joint, index) => {
                const entity = jointEntites[index]
                const pointA = entity.entities.a.fromRelativeCenterPosition(joint.pointA)
                const pointB = entity.entities.b.fromRelativeCenterPosition(joint.pointB)
                entity.setPosition({ x: parseInt(pointA.x), y: parseInt(pointA.y) })
                entity.updatePoints(pointA, pointB)
            })
        }

        /**
         * Get the body phyiscs from the given entity
         * @param {Entity} entity 
         */
        getBodyFromEntity(entity) {
            return this.physicsEngine.getBodies().find((body, index) => {
                const attachedEntity = this.entityManager.entities[index]
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
            this.entityManager.entities.map(entity => entity.loadPhysics(this.physicsEngine))
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