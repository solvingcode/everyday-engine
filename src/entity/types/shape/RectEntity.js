define(function (require) {

    const EntityMotion = require('../../EntityMotion.js')

    class RectEntity extends EntityMotion {

        constructor(props) {
            super(props)
            this.shape = EntityMotion.shapes.RECT
        }

        /**
         * @override
         */
        init() {
            const dragDistance = this.setMeshPositionByDragDistance()
            this.size = {width: Math.abs(dragDistance.x), height: Math.abs(dragDistance.y)}
            return true
        }

        /**
         * Draw the context
         * @param {DataContext} dataContext
         */
        drawContext(dataContext) {
            const {context} = dataContext
            context.rect(0, 0, this.size.width, this.size.height)
        }

    }

    return RectEntity
})