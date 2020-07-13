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
            if (this.clearBuffer()) {
                this.generate()
            }
        }

        /**
         * Generate pixels for the rect
         */
        generate() {
            const sw = this.size.width, sh = this.size.height
            const canvas = new OffscreenCanvas(sw, sh)
            const context = canvas.getContext('2d')
            context.beginPath()
            context.rect(0, 0, sw, sh)
            context.stroke()
            this.setPixelsByContext(context)
        }

        /**
         * @inherit
         */
        toCenterPosition() {
            return {
                x: this.position.x + this.size.width / 2,
                y: this.position.y + this.size.height / 2
            }
        }

        /**
         * @inherit
         */
        fromCenterPosition(position) {
            return {
                x: position.x - this.size.width / 2,
                y: position.y - this.size.height / 2
            }
        }

    }

    return RectEntity
})