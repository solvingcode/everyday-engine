define(function (require) {

    const EntityManager = require('./manager/EntityManager.js')
    const PlatformEntity = require('./entity/PlatformEntity.js')

    class World {

        constructor() {
            this.entityManager = EntityManager.get()
        }

        /**
         * Draw the entities.
         * @TODO: To optimize (rerender just entities updated)
         * @param {Renderer} renderer 
         */
        draw(renderer) {
            const entities = this.entityManager.entities
            for (var iEntity in entities) {
                const entity = entities[iEntity]
                const minX = 0
                const maxX = WINDOW_WIDTH
                const minY = 0
                const maxY = WINDOW_HEIGHT
                if (minX <= entity.position.x && maxX >= entity.position.x &&
                    minY <= entity.position.y && maxY >= entity.position.y) {
                    entity.draw(renderer)
                }
            }
        }

        /**
         * Load the world
         */
        load() {
            this.entityManager.load(0, 700, PlatformEntity)
        }

        /**
         * Update all entities.
         */
        update() {
            this.entityManager.update()
        }

    }

    return World
})