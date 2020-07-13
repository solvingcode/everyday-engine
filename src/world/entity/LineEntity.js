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
                    this.points = [{ x: this.size.width, y: 0 }, { x: 0, y: this.size.height }]
                } else {
                    this.points = [{ x: 0, y: 0 }, { x: this.size.width, y: this.size.height }]
                }
                this.generate()
            }
        }

        /**
         * Generate pixels for the line
         */
        generate() {
            const x0 = this.points[0].x, y0 = this.points[0].y
            const x1 = this.points[1].x, y1 = this.points[1].y
            const sizeX = Math.abs(x1 - x0)
            const sizeY = Math.abs(y1 - y0)
            this.pixels = new Array(sizeX * sizeY)
            const canvas = new OffscreenCanvas(this.size.width, this.size.height)
            const context = canvas.getContext('2d')
            context.beginPath()
            context.moveTo(x0, y0)
            context.lineTo(x1, y1)
            context.stroke()
            this.setPixelsByContext(context)
        }

    }

    return LineEntity
})