define(function (require) {

    const Entity = require('../../entity/Entity.js')

    class PlatformEntity extends Entity {

        constructor(props) {
            super(props)
            this.shape = Entity.shapes.RECT
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
        generate() {
            const sw = this.size.width, sh = this.size.height
            const canvas = new OffscreenCanvas(sw, sh)
            const context = canvas.getContext('2d')
            context.beginPath()
            context.rect(0, 0, sw, sh)
            context.stroke()
            return this.updateMeshFromContext(context)
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

    return PlatformEntity
})