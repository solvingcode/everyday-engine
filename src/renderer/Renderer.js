define(function (require) {

    const ObjectRenderer = require('./ObjectRenderer.js')
    const SetupRenderer = require('./SetupRenderer.js')

    class Renderer {
        constructor() {
            this.objectRenderer = new ObjectRenderer()
            this.setupRenderer = new SetupRenderer()
        }

        init() {
            this.imgData = rootContext.createImageData(WINDOW_WIDTH, WINDOW_HEIGHT)
            this.data = this.imgData.data
            this.data.fill(0)
        }

        draw(object) {
            this.objectRenderer.add(object.mesh)
        }

        clear() {
            rootContext.globalAlpha = 0
            rootContext.putImageData(this.imgData, 0, 0)
            rootContext.globalAlpha = 1
        }

        render(camera, menu) {
            this.setupRenderer.render(menu)
            this.objectRenderer.render(camera)
        }
    }

    return Renderer
})