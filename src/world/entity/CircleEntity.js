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
            //Recalcul the new size of the Circle
            const window = Window.get()
            const currentPositionMouse = window.mouse.currentPosition
            this.size = currentPositionMouse.x - this.position.x
            if (this.size > 0) {
                //Clear the buffer to regenerate the Mesh using the new size
                this.clearBuffer()
                //Generate the circle
                const radius = this.size / 2
                var center = parseInt(this.size / 2)
                for (var x = -center; x < this.size - center; x++) {
                    for (var y = -center; y < this.size - center; y++) {
                        var index = (x + center) + (y + center) * this.size
                        if (x * x + y * y <= radius * radius) {
                            this.pixels[index] = [0, 0, 0, 255]
                        } else {
                            this.pixels[index] = [255, 255, 255, 255]
                        }
                    }
                }
            }
        }

    }

    return CircleEntity
})