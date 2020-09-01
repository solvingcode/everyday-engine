define(function (require) {

    const EntityManager = require('../world/manager/EntityManager.js')
    const EntityMotion = require('../entity/EntityMotion.js')

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
            this.physicsEngine.getBodies().map((body, index) => {
                const entity = this.entityManager.entities[index]
                const { x, y } = entity.fromCenterPosition(body.position)
                entity.setPosition({ x: parseInt(x), y: parseInt(y) })
                entity.setRotation(Math.round(body.angle * 100) / 100)
                if (typeof entity.setPoints === 'function') {
                    entity.points = body.vertices.map(vertex => ({ x: vertex.x, y: vertex.y }))
                }
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