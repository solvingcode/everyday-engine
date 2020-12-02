define(function (require) {

    const EntityMotion = require('../EntityMotion.js')

    class PlatformEntity extends EntityMotion {

        constructor(props) {
            super({...props, name: 'Platform'})
            this.shape = EntityMotion.shapes.RECT
            this.isDrawRuler = true
        }

        /**
         * @override
         */
        build() {
            this.size = { width: 20000, height: 50 }
            if (this.clearBuffer()) {
                return this.generate()
            }
            return false
        }

        /**
         * @override
         */
        drawContext(dataContext) {
            const {context} = dataContext
            context.rect(0, 0, this.size.width, this.size.height)
            this.isDrawRuler && this.drawRuler(context, this.size.width)
        }

        /**
         * Draw a ruler
         * @param {OffscreenCanvasRenderingContext2D} context
         * @param {Number} sw 
         */
        drawRuler(context, sw) {
            const stepRule = 40
            for (let xRule = stepRule; xRule < sw; xRule += stepRule) {
                context.fillText(
                    xRule.toString(),
                    xRule,
                    20
                )
            }
        }

        /**
         * @override
         */
        toCenterPosition() {
            return {
                x: this.position.x + this.size.width / 2,
                y: this.position.y + this.size.height / 2
            }
        }

        /**
         * @override
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