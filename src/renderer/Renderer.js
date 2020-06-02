define(function (require) {

    const ObjectRenderer = require('./ObjectRenderer.js')
    const SetupRenderer = require('./SetupRenderer.js')

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
            rootContext.globalAlpha = 0
            rootContext.putImageData(this.imgData, 0, 0)
            rootContext.globalAlpha = 1
            objectContext.globalAlpha = 0
            objectContext.putImageData(this.imgData, 0, 0)
            objectContext.globalAlpha = 1
        }

        /**
         * Render the meshes to the screen (layout, entities, ...)
         * @param {Camera} camera 
         * @param {Menu} menu 
         */
        render(camera, menu) {
            this.setupRenderer.render(menu)
            this.objectRenderer.render(camera)
        }
    }

    return Renderer
})