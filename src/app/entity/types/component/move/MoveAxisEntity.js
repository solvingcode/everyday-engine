import ComponentEntity from '../ComponentEntity.js'

export default class MoveAxisEntity extends ComponentEntity{

    constructor(props) {
        super(props)
        this.selectable = false
        this.props.style.borderSize = 4
    }

    /**
     * @override
     */
    drawContext(dataContext) {
        const {context, camera} = dataContext
        context.beginPath()
        this.drawLine(context, camera)
        this.drawArrow(context, camera)
    }

    /**
     * @return {{headLength: number, headAngle: number}}
     */
    getArrowProps(){
        return {
            headLength: 20,
            headAngle: Math.PI / 12
        }
    }

    /**
     * @param {OffscreenCanvasRenderingContext2D} context
     * @param {Camera} camera
     */
    drawLine(context, camera){
        const scaleVertices = this.getScaleVertices(camera)
        context.moveTo(scaleVertices[0].x, scaleVertices[0].y)
        context.lineTo(scaleVertices[1].x, scaleVertices[1].y)
    }

    /**
     * @param {OffscreenCanvasRenderingContext2D} context
     * @param {Camera} camera
     */
    drawArrow(context, camera){
        const scaleVertices = this.getScaleVertices(camera)
        const arrowProps = this.getArrowProps()
        const pointFrom = scaleVertices[0]
        const pointTo = scaleVertices[1]
        const dx = pointTo.x - pointFrom.x
        const dy = pointTo.y - pointFrom.y
        const angle = Math.atan2(dy, dx)
        context.moveTo(pointTo.x, pointTo.y)
        context.lineTo(
            pointTo.x - arrowProps.headLength * Math.cos(angle - arrowProps.headAngle),
            pointTo.y - arrowProps.headLength * Math.sin(angle - arrowProps.headAngle)
        )
        context.moveTo(pointTo.x, pointTo.y)
        context.lineTo(
            pointTo.x - arrowProps.headLength * Math.cos(angle + arrowProps.headAngle),
            pointTo.y - arrowProps.headLength * Math.sin(angle + arrowProps.headAngle)
        )
    }

}