define(function (require) {

    const Entity = require('../../core/Entity.js')
    const Window = require('../../core/Window.js')

    class EllipseEntity extends Entity {

        constructor(props) {
            super(props)
        }

        /**
         * @inheritdoc
         */
        build() {
            const window = Window.get()
            const dragDistance = window.mouse.getDragDistance()
            var newX = this.position.x
            var newY = this.position.y
            if (dragDistance.x < 0) {
                newX = window.mouse.currentPosition.x
            }
            if (dragDistance.y < 0) {
                newY = window.mouse.currentPosition.y
            }
            this.setMeshPosition({ x: newX, y: newY })
            this.size = { width: Math.abs(dragDistance.x), height: Math.abs(dragDistance.y) }
            if (this.size.width > 0 && this.size.height > 0) {
                this.clearBuffer()
                this.generateEllipse(this.size.width, this.size.height)
            }
        }

        /**
         * Generate pixels for a ellipse
         * @param {int} sw 
         * @param {int} sh 
         */
        generateEllipse(sw, sh) {
            const canvas = new OffscreenCanvas(sw, sh)
            const context = canvas.getContext('2d')
            const centerX = sw / 2
            const centerY = sh / 2
            const radiusX = sw / 2 > 2 ? sw / 2 - 2 : 0
            const radiusY = sh / 2 > 2 ? sh / 2 - 2 : 0
            context.beginPath()
            context.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, 2 * Math.PI)
            context.stroke()
            this.setPixelsByContext(context, sw, sh)
        }

    }

    return EllipseEntity
})