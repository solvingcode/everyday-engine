define(function (require) {

    const EntityManager = require('./manager/EntityManager.js')
    const PlatformEntity = require('./entity/PlatformEntity.js')
    const Camera = require('../core/Camera.js')

    class World {

        constructor() {
            this.entityManager = EntityManager.get()
            this.camera = new Camera({ x: WINDOW_WIDTH / 2, y: WINDOW_HEIGHT / 2 })
        }

        /**
         * Draw the entities.
         * @TODO: To optimize (rerender just entities updated)
         * @param {Renderer} renderer 
         */
        draw(renderer, camera) {
            const bodyEntities = this.entityManager.getBodyEntities()
            const attachEntities = this.entityManager.getAttachEntities()
            bodyEntities.forEach((entity) => this.drawEntity(entity, renderer, camera))
            attachEntities.forEach((entity) => this.drawEntity(entity, renderer, camera))
        }

        /**
         * Set the given entity to the renderer for drawing
         * @param {Entity} entity 
         * @param {Renderer} renderer 
         */
        drawEntity(entity, renderer) {
            const { x: cameraX, y: cameraY } = this.getCamera().position
            const minX = cameraX - WINDOW_WIDTH / 2 - entity.size.width
            const maxX = cameraX + WINDOW_WIDTH / 2
            const minY = cameraY - WINDOW_HEIGHT / 2 - entity.size.height
            const maxY = cameraY + WINDOW_HEIGHT / 2
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

        /**
         * Update the camera position
         */
        updateCamera() {
            const entity = this.camera.getEntity(this.entityManager)
            entity && this.camera.update(entity.position)
        }

        /**
         * Reset the camera position
         */
        resetCamera() {
            this.camera.reset()
        }

        /**
         * Get the principal camera (active)
         */
        getCamera() {
            return this.camera
        }

        static get() {
            if (!World.instance) {
                World.instance = new World()
            }
            return World.instance
        }

    }

    World.instance = null

    return World
})