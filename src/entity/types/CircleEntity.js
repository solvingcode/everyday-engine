define(function (require) {

    const EntityMotion = require('../EntityMotion.js')

    class CircleEntity extends EntityMotion {

        constructor(props) {
            super(props)
            this.shape = EntityMotion.shapes.CIRCLE
            this.center = null
            this.radius = 0
        }

        /**
         * @override
         */
        build() {
            const dragDistance = this.setMeshPositionByDragDistance()
            this.size = { width: Math.abs(dragDistance.x), height: Math.abs(dragDistance.x) }
            if (this.clearBuffer()) {
                return this.generate()
            }
            return false
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
        toCenterPosition() {
            return {
                x: this.position.x + this.mesh.size.width / 2,
                y: this.position.y + this.mesh.size.height / 2
            }
        }

        /**
         * @override
         */
        fromCenterPosition(position) {
            return {
                x: position.x - this.mesh.size.width / 2,
                y: position.y - this.mesh.size.height / 2
            }
        }

    }

    return CircleEntity
})