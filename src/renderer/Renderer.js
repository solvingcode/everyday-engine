define(function (require) {

    const ObjectRenderer = require('./ObjectRenderer.js')
    const SetupRenderer = require('./SetupRenderer.js')

    /**
     * Renderer class
     * Render elements (entities, menus, ...) to the screen
     */
    class Renderer {
        constructor() {
            this.objectRenderer = new ObjectRenderer()
            this.setupRenderer = new SetupRenderer()
        }

        /**
         * Init the root context data
         */
        init() {
            this.imgData = rootContext.createImageData(WINDOW_WIDTH, WINDOW_HEIGHT)
            this.data = this.imgData.data
            this.data.fill(0)
        }

        /**
         * Draw and object
         * @param {Entity} object 
         */
        draw(object) {
            this.objectRenderer.add(object.mesh)
        }

        /**
         * Clear the context
         */
        clear() {
            rootContext.canvas.width = WINDOW_WIDTH
            objectContext.canvas.width = WINDOW_WIDTH
        }

        /**
         * Render the meshes to the screen (layout, entities, ...)
         * @param {Camera} camera 
         * @param {Menu} menu 
         */
        render(camera, menu) {
            this.objectRenderer.render(camera)
            this.setupRenderer.render(menu)
        }
    }

    return Renderer
})