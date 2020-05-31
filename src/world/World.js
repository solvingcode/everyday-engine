define(function (require) {

    const EntityManager = require('./manager/EntityManager.js')

    class World {

        constructor() {
            this.entityManager = EntityManager.get()
        }

        /**
         * Draw the entities.
         * @param {Renderer} renderer 
         */
        draw(renderer) {
            const entities = this.entityManager.entities
            for (var iEntity in entities) {
                const entity = entities[iEntity]
                entity.draw(renderer)
            }
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