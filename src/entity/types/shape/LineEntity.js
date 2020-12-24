define(function (require) {

    const EntityMotion = require('../../EntityMotion.js')

    class LineEntity extends EntityMotion {

        constructor(props) {
            super(props)
            this.shape = EntityMotion.shapes.LINE
            this.points = []
        }

        /**
         * @override
         */
        init() {
            const dragDistance = this.setMeshPositionByDragDistance()
            this.size = {width: Math.abs(dragDistance.x), height: Math.abs(dragDistance.y)}
            if (dragDistance.x * dragDistance.y < 0) {
                this.points = [{x: this.size.width, y: 0}, {x: 0, y: this.size.height}]
            } else {
                this.points = [{x: 0, y: 0}, {x: this.size.width, y: this.size.height}]
            }
            return true
        }

        /**
         * @override
         */
        drawContext(dataContext) {
            const {context} = dataContext
            const x0 = this.points[0].x, y0 = this.points[0].y
            const x1 = this.points[1].x, y1 = this.points[1].y
            context.beginPath()
            context.moveTo(x0, y0)
            context.lineTo(x1, y1)
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

    return LineEntity
})