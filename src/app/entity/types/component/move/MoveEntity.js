import ComponentEntity from '../ComponentEntity.js'

export default class MoveEntity extends ComponentEntity{

    constructor(props) {
        super(props)
        this.selectable = false
        this.props.style.borderSize = 4
    }

    /**
     * @abstract
     */
    initMoveVertices(){
        throw new TypeError('MoveEntity.initMoveVertices must be implemented!')
    }

    /**
     * @override
     */
    init(world){
        this.initMoveVertices()
        return true
    }

    /**
     * @override
     */
    drawContext(dataContext) {
        const {context} = dataContext
        context.beginPath()
        this.drawLine(context)
        this.drawArrow(context)
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
     */
    drawLine(context){
        context.moveTo(this.vertices[0].x, this.vertices[0].y)
        context.lineTo(this.vertices[1].x, this.vertices[1].y)
    }

    /**
     * @param {OffscreenCanvasRenderingContext2D} context
     */
    drawArrow(context){
        const arrowProps = this.getArrowProps()
        const pointFrom = this.vertices[0]
        const pointTo = this.vertices[1]
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