import UnitHelper from '../../../utils/UnitHelper.js'
import MeshComponent from '../../../component/internal/MeshComponent.js'
import ContextTypeShapeGenerator from '../ContextTypeShapeGenerator.js'

/**
 * @abstract
 */
export default class TDArrowRectShapeGenerator extends ContextTypeShapeGenerator{

    /**
     * @override
     */
    draw(unit, dataContext) {
        const meshComponent = unit.getComponent(MeshComponent)
        const {context} = dataContext
        const vertices = this.convertVertices(meshComponent.getVertices(), meshComponent.getSize())
        context.beginPath()
        this.drawLine(dataContext, vertices)
        this.drawScaleRect(dataContext, vertices)
    }

    /**
     * @return {{headSize: number}}
     */
    getArrowProps(){
        return {
            headSize: 10
        }
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
     * @abstract
     * @param {DataContext2D} dataContext
     * @param {Vector[]} vertices
     */
    drawScaleRect(dataContext, vertices){
        throw new TypeError(`${this.constructor.name}.drawRect must be implemented`)
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
}