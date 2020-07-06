define(function (require) {

    const EntityMotion = require('../../entity/EntityMotion.js')

    class RectEntity extends EntityMotion {

        constructor(props) {
            super(props)
            this.shape = EntityMotion.shapes.RECT
        }

        /**
         * @inheritdoc
         */
        build() {
            const dragDistance = this.setMeshPositionByDragDistance()
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