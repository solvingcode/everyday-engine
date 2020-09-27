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
            const bodyEntities = this.entityManager.getBodyEntities()
            const attachEntities = this.entityManager.getAttachEntities()
            bodyEntities.forEach((entity) => this.drawEntity(entity, renderer))
            attachEntities.forEach((entity) => this.drawEntity(entity, renderer))
        }

        /**
         * Set the given entity to the renderer for drawing
         * @param {Entity} entity 
         * @param {Renderer} renderer 
         */
        drawEntity(entity, renderer) {
            const minX = 0
            const maxX = WINDOW_WIDTH
            const minY = 0
            const maxY = WINDOW_HEIGHT
            if (minX <= entity.position.x && maxX >= entity.position.x &&
                minY <= entity.position.y && maxY >= entity.position.y) {
                entity.draw(renderer)
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