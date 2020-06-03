define(function (require) {

    const Entity = require('../../core/Entity.js')
    const Window = require('../../core/Window.js')

    class CircleEntity extends Entity {

        constructor(props) {
            super(props)
        }

        /**
         * @inheritdoc
         */
        build() {
            const window = Window.get()
            const dragDistance = window.mouse.getDragDistance()
            this.size = dragDistance.x
            if (this.size > 0) {
                this.clearBuffer()
                const radius = this.size / 2
                const center = parseInt(this.size / 2)
                this.generateCircle(center, radius)
            }
        }

        /**
         * Generate pixels for a circle
         * @param {int} center 
         * @param {int} radius 
         */
        generateCircle(center, radius){
            for (var x = -center; x < this.size - center; x++) {
                for (var y = -center; y < this.size - center; y++) {
                    var index = (x + center) + (y + center) * this.size
                    if (x * x + y * y <= radius * radius) {
                        this.pixels[index] = [0, 0, 0, 255]
                    } else {
                        this.pixels[index] = [255, 255, 255, 0]
                    }
                }
            }
        }

    }

    return CircleEntity
})