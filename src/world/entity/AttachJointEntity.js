define(function (require) {

    const JointEntity = require('./JointEntity.js')

    class AttachJointEntity extends JointEntity {

        constructor(props) {
            super(props)
            this.attached = true
            this.style.color = '00FF00'
        }

        /**
         * @inheritdoc
         */
        drawLine(context, pointFrom, pointTo) {
            super.drawLine(context, pointFrom, pointTo)
            this.drawArrow(context, pointFrom, pointTo)
        }

        /**
         * Get the arrow properties (used to draw the head of the arrow)
         */
        getArrowProps() {
            return {
                headLength: 20,
                angle: Math.PI / 12
            }
        }

        /**
         * @inheritdoc
         */
        calculateSize(dragDistance) {
            return {
                width: Math.abs(dragDistance.x),
                height: Math.abs(dragDistance.y) + 20
            }
        }

        /**
         * @inheritdoc
         */
        setMeshPosition(position) {
            super.setMeshPosition({ x: position.x, y: position.y - 10 })
        }

        /**
         * @inheritdoc
         */
        generate(){
            this.points.a.y += 10
            this.points.b.y += 10
            return super.generate()
        }

        /**
         * Draw arrow
         * @param {CanvasRenderingContext2D} context 
         * @param {Object} pointFrom 
         * @param {Object} pointTo 
         */
        drawArrow(context, pointFrom, pointTo) {
            const arrowProps = this.getArrowProps()
            const dx = pointTo.x - pointFrom.x
            const dy = pointTo.y - pointFrom.y
            const angle = Math.atan2(dy, dx)
            context.beginPath()
            context.moveTo(pointTo.x, pointTo.y)
            context.lineTo(
                pointTo.x - arrowProps.headLength * Math.cos(angle - arrowProps.angle),
                pointTo.y - arrowProps.headLength * Math.sin(angle - arrowProps.angle)
            )
            context.moveTo(pointTo.x, pointTo.y)
            context.lineTo(
                pointTo.x - arrowProps.headLength * Math.cos(angle + arrowProps.angle),
                pointTo.y - arrowProps.headLength * Math.sin(angle + arrowProps.angle)
            )
            context.stroke()
        }

    }

    return AttachJointEntity
})