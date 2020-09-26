define(function (require) {

    const EntityMotion = require('../../entity/EntityMotion.js')

    class PlatformEntity extends EntityMotion {

        constructor(props) {
            super(props)
            this.shape = EntityMotion.shapes.RECT
        }

        /**
         * @inheritdoc
         */
        build() {
            this.size = { width: WINDOW_WIDTH, height: 20 }
            this.clearBuffer()
            return this.generate()
        }

        /**
         * Generate mesh for the rect
         */
        generateMesh() {
            const sw = this.size.width, sh = this.size.height
            const canvas = new OffscreenCanvas(sw, sh)
            const context = canvas.getContext('2d')
            context.strokeStyle = this.style.color
            context.beginPath()
            context.rect(0, 0, sw, sh)
            context.stroke()
            return this.updateMeshFromContext(context)
        }

        /**
         * @inheritdoc
         */
        toCenterPosition() {
            return {
                x: this.position.x + this.size.width / 2,
                y: this.position.y + this.size.height / 2
            }
        }

        /**
         * @inheritdoc
         */
        fromCenterPosition(position) {
            return {
                x: position.x - this.size.width / 2,
                y: position.y - this.size.height / 2
            }
        }

    }

    return PlatformEntity
})