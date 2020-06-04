define(function (require) {

    const Entity = require('../../core/Entity.js')
    const Window = require('../../core/Window.js')

    class RectEntity extends Entity {

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
                this.generateRect(this.size.width, this.size.height)
            }
        }

        /**
         * Generate pixels for the rect
         * @param {int} sw 
         * @param {int} sh
         */
        generateRect(sw, sh) {
            const canvas = new OffscreenCanvas(sw, sh)
            const context = canvas.getContext('2d')
            context.beginPath()
            context.rect(0, 0, sw, sh)
            context.stroke()
            this.setPixelsByContext(context, sw, sh)
        }

    }

    return RectEntity
})