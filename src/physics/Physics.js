define(function (require) {

    const EntityManager = require('../world/manager/EntityManager.js')
    const EntityMotion = require('../entity/EntityMotion.js')

    class Physics {

        constructor(physicsEngine) {
            this.entityManager = EntityManager.get()
            this.physicsEngine = physicsEngine
        }

        /**
         * Update all entities.
         */
        update() {
            this.physicsEngine.getBodies().map((body, index) => {
                const entity = this.entityManager.entities[index]
                const { x, y } = entity.fromCenterPosition(body.position)
                entity.setPosition({ x, y })
                entity.setRotation(body.angle)
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