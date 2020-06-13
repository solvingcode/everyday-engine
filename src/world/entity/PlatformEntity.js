define(function (require) {

    const Entity = require('../../entity/Entity.js')

    class PlatformEntity extends Entity {

        constructor(props) {
            super(props)
            this.shape = 'Rect'
        }

        /**
         * @inheritdoc
         */
        build() {
            this.size = { width: WINDOW_WIDTH, height: 20 }
            this.clearBuffer()
            this.generateRect(this.size.width, this.size.height)
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

    return PlatformEntity
})