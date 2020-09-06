define(function (require) {

    const JointEntity = require('./JointEntity.js')

    class AttachJointEntity extends JointEntity {

        constructor(props) {
            super({
                ...props,
                style: {
                    color: '00FF00'
                }
            })
            this.attached = true
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
                angle: Math.PI / 12,
                height: 20
            }
        }

        /**
         * @inheritdoc
         */
        calculateSize(dragDistance) {
            return {
                width: Math.abs(dragDistance.x),
                height: Math.abs(dragDistance.y) + this.getArrowProps().height
            }
        }

        /**
         * @inheritdoc
         */
        setMeshPosition(position) {
            super.setMeshPosition({ x: position.x, y: position.y - this.getArrowProps().height / 2 })
        }

        /**
         * @inheritdoc
         */
        generate() {
            this.points.a.y += this.getArrowProps().height / 2
            this.points.b.y += this.getArrowProps().height / 2
            this.entities.a.attachedTo = this.entities.b
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