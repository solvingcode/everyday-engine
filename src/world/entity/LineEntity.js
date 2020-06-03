define(function (require) {

    const Entity = require('../../core/Entity.js')
    const Window = require('../../core/Window.js')

    class LineEntity extends Entity {

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
                this.generateLine(this.size.width, this.size.height)
            }
        }

        /**
         * Generate pixels for the rect
         * @param {int} size 
         */
        generateLine(sizeX, sizeY) {
            this.pixels = new Array(sizeX * sizeY)
            for (var index = 0; index < this.pixels.length; index++) {
                const y = index / sizeX
                const x = index % sizeX
                const equation = parseInt((sizeY / sizeX) * x - y)
                if (equation === 0) {
                    this.pixels[index] = [0, 0, 0, 255]
                } else {
                    this.pixels[index] = [0, 0, 0, 0]
                }
            }
        }

    }

    return LineEntity
})