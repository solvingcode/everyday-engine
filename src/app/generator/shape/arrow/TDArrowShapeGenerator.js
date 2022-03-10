import UnitHelper from '../../../utils/UnitHelper.js'
import MeshComponent from '../../../component/internal/MeshComponent.js'
import ContextTypeShapeGenerator from '../ContextTypeShapeGenerator.js'

/**
 * @abstract
 */
export default class TDArrowShapeGenerator extends ContextTypeShapeGenerator{

    /**
     * @override
     */
    draw(unit, dataContext) {
        const meshComponent = unit.getComponent(MeshComponent)
        const {context} = dataContext
        const vertices = this.convertVertices(meshComponent.getVertices(), meshComponent.getSize())
        context.beginPath()
        this.drawLine(dataContext, vertices)
        this.drawArrow(dataContext, vertices)
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
     * @abstract
     * @param {Vector[]} vertices
     * @param {Size} size
     * @return {Vector[]}
     */
    convertVertices(vertices, size){
        throw new TypeError(`${this.constructor.name}.convertVertices must be implemented`)
    }

    /**
     * @param {DataContext2D} dataContext
     * @param {Vector[]} vertices
     */
    drawLine(dataContext, vertices){
        const {context, camera} = dataContext
        const scaleVertices = UnitHelper.scaleVertices(camera, vertices)
        context.moveTo(scaleVertices[0].x, scaleVertices[0].y)
        context.lineTo(scaleVertices[1].x, scaleVertices[1].y)
    }

    /**
     * @param {DataContext2D} dataContext
     * @param {Vector[]} vertices
     */
    drawArrow(dataContext, vertices){
        const {context, camera} = dataContext
        const scaleVertices = UnitHelper.scaleVertices(camera, vertices)
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