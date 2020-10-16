define(function (require) {

    const EntityManager = require('../world/manager/EntityManager.js')
    class Physics {

        constructor(physicsEngine) {
            this.entityManager = EntityManager.get()
            this.physicsEngine = physicsEngine
            this.physicsEngine.setPhysicsManager(this)
            this.isRunning = false
        }

        /**
         * Update physics, and train AI
         * @param {AIEngine} aiEngine
         */
        update(aiEngine) {
            this.updateEntities()
            this.updateEngine(aiEngine)
        }

        /**
         * Update entities props from Physics engine results
         */
        updateEntities() {
            const bodyEntities = this.entityManager.getBodyEntities()
            const jointEntites = this.entityManager.getAttachEntities()
            this.physicsEngine.getBodies().map((body, index) => {
                const entity = bodyEntities[index]
                const { x, y } = entity.fromCenterPosition(body.position)
                entity.setPosition({ x: parseInt(x), y: parseInt(y) })
                entity.setRotationAndGenerate(Math.round(body.angle * 100) / 100)
                entity.setVelocity(body.velocity)
                entity.setAngularVelocity(body.angularVelocity)
            })
            this.physicsEngine.getJoints().map((joint, index) => {
                const entity = jointEntites[index]
                const pointA = entity.entities.a.fromRelativeCenterPosition(joint.pointA)
                const pointB = entity.entities.b.fromRelativeCenterPosition(joint.pointB)
                entity.updatePoints(pointA, pointB)
            })
        }

        /**
         * Update the World using AI and physics Engine
         * @param {AiEngine} aiEngine 
         */
        updateEngine(aiEngine) {
            this.entityManager.getBodyEntities().forEach(entity => {
                this.physicsEngine.update(entity)
            })
            aiEngine.update()
        }

        /**
         * Get the body phyiscs from the given entity
         * @param {Entity} entity 
         */
        getBodyFromEntity(entity) {
            const bodyEntities = this.entityManager.getBodyEntities()
            return this.physicsEngine.getBodies().find((body, index) => {
                const bodyEntity = bodyEntities[index]
                return bodyEntity === entity
            })
        }

        /**
         * Stop the engine
         */
        stop() {
            this.physicsEngine.stop()
            this.isRunning = false
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
            const jointEntities = this.entityManager.getAttachEntities()
            jointEntities.map(entity => entity.updateJointPosition(this.physicsEngine))
            return true
        }

        /**
         * Setup the physics for entities
         */
        setup() {
            const bodyEntities = this.entityManager.getBodyEntities()
            const attachEntities = this.entityManager.getAttachEntities()
            bodyEntities.map(entity => entity.loadPhysics(this.physicsEngine))
            attachEntities.map(entity => entity.loadPhysics(this.physicsEngine))
            return true
        }

        /**
         * Complete the physics after setup
         */
        after() {
            const bodyEntities = this.entityManager.getBodyEntities()
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
            this.isRunning = true
        }

        /**
         * Restart the engine
         */
        restart() {
            this.isRunning && this.stop()
            this.run()
        }

    }

    return Physics
})