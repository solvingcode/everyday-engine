define(function (require) {

    import EntityMotion from '../../EntityMotion.js'

    class CircleEntity extends EntityMotion {

        constructor(props) {
            super(props)
            this.shape = EntityMotion.shapes.CIRCLE
            this.radius = 0
        }

        /**
         * @override
         */
        init() {
            const dragDistance = this.setMeshPositionByDragDistance()
            this.size = { width: Math.abs(dragDistance.x), height: Math.abs(dragDistance.x) }
            return true
        }

        /**
         * Draw the context
         * @param {{center: {x: number, y: number}, context: OffscreenCanvasRenderingContext2D}} dataContext
         */
        drawContext(dataContext) {
            const {center, context} = dataContext
            const sw = this.size.width
            this.radius = Math.abs(sw / 2 - 1)
            context.ellipse(center.x, center.y, this.radius, this.radius, 0, 0, 2 * Math.PI)
        }

        /**
         * Calculate the largest rectangle for given rotation and size
         * @param {number} angleRadian
         * @param {Object} size 
         */
        getLargestRectangle(angleRadian, size) {
            return size
        }

        /**
         * @override
         */
        includes(point){
            const {x, y} = this.fromAbsolutePosition(point)
            const center = this.getCenter()
            return Math.pow(x - center.x, 2) + Math.pow(y - center.y, 2) < Math.pow(this.radius, 2)
        }

    }

    export default CircleEntity
})