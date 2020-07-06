define(function (require) {

    const EntityMotion = require('../../entity/EntityMotion.js')

    class LineEntity extends EntityMotion {

        constructor(props) {
            super(props)
            this.shape = EntityMotion.shapes.LINE
            this.points = []
        }

        /**
         * @inheritdoc
         */
        build() {
            const dragDistance = this.setMeshPositionByDragDistance()
            this.size = { width: Math.abs(dragDistance.x), height: Math.abs(dragDistance.y) }
            if (this.size.width > 0 && this.size.height > 0) {
                this.clearBuffer()
                if (dragDistance.x * dragDistance.y < 0) {
                    this.generateLine(this.size.width, 0, 0, this.size.height)
                } else {
                    this.generateLine(0, 0, this.size.width, this.size.height)
                }
            }
        }

        /**
         * Generate pixels for the line
         * @param {int} x0 
         * @param {int} y0 
         * @param {int} x1 
         * @param {int} y1 
         */
        generateLine(x0, y0, x1, y1) {
            const sizeX = Math.abs(x1 - x0)
            const sizeY = Math.abs(y1 - y0)
            this.points = [{ x: x0, y: y0 }, { x: x1, y: y1 }]
            this.pixels = new Array(sizeX * sizeY)
            const canvas = new OffscreenCanvas(this.size.width, this.size.height)
            const context = canvas.getContext('2d')
            context.beginPath()
            context.moveTo(x0, y0)
            context.lineTo(x1, y1)
            context.stroke()
            this.setPixelsByContext(context, sizeX, sizeY)
        }

    }

    return LineEntity
})