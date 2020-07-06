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
                const { x, y } = body.position
                this.entityManager.entities[index].setPosition({ x, y })
            })
        }

        /**
         * Run the physics
         */
        run() {
            this.platform = this.entityManager.entities[0]
            this.entityManager.entities.map(entity => entity.addToPhyiscs(this.physicsEngine))
            this.physicsEngine.run()
        }

        /**
         * Apply physics to the entity
         */
        add(entity) {
            if (entity instanceof EntityMotion) {
                entity.move(DIRECTION.BOTTOM)
            }
            if (entity != this.platform &&
                entity.isCollide(this.platform)) {
                console.log('Collision with the Platform')
            }
        }

    }

    return Physics
})