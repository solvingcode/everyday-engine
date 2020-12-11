define(function (require) {

    const EntityMotion = require('../../EntityMotion.js')

    class PlatformEntity extends EntityMotion {

        constructor(props) {
            super({...props, name: 'Plain Terrain'})
            this.shape = EntityMotion.shapes.RECT
            this.isDrawRuler = true
        }

        /**
         * @override
         */
        init() {
            this.size = { width: 20000, height: 50 }
            this.setStatic(true)
            return true
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

    }

    return PlatformEntity
})