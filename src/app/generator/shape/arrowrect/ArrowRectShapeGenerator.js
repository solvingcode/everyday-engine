import TypeShapeGenerator from '../TypeShapeGenerator.js'
import UnitHelper from '../../../utils/UnitHelper.js'

/**
 * @abstract
 */
export default class ArrowRectShapeGenerator extends TypeShapeGenerator{

    /**
     * @override
     */
    draw(meshComponent, transformComponent, dataContext) {
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
     * @param {DataContext} dataContext
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
     * @param {DataContext} dataContext
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