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
            this.size = { width: dragDistance.x, height: dragDistance.y }
            if (this.size.width > 0 && this.size.height > 0) {
                this.clearBuffer()
                this.generateRect(this.size.width * this.size.height)
            }
        }

        /**
         * Generate pixels for the rect
         * @param {int} size 
         */
        generateRect(size) {
            this.pixels = new Array(size)
            this.pixels.fill([0, 0, 0, 255])
        }

    }

    return RectEntity
})