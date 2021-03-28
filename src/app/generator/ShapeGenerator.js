import {PrimitiveShape} from '../unit/Unit.js'
import RectShapeGenerator from './shape/rect/RectShapeGenerator.js'
import ArrowRightShapeGenerator from './shape/arrow/ArrowRightShapeGenerator.js'
import ArrowDownShapeGenerator from './shape/arrow/ArrowDownShapeGenerator.js'
import CircleShapeGenerator from './shape/circle/CircleShapeGenerator.js'
import ArrowRectRightShapeGenerator from './shape/arrowrect/ArrowRectRightShapeGenerator.js'
import ArrowRectDownShapeGenerator from './shape/arrowrect/ArrowRectDownShapeGenerator.js'
import GridShapeGenerator from './shape/grid/GridShapeGenerator.js'
import LineShapeGenerator from './shape/line/LineShapeGenerator.js'
import RectCrossShapeGenerator from './shape/rect/RectCrossShapeGenerator.js'

/**
 * @abstract
 */
export default class ShapeGenerator {

    static instance

    /**
     * @abstract
     * @param {MeshComponent} meshComponent
     * @param {TransformComponent} transformComponent
     * @param {DataContext} dataContext
     */
    draw(meshComponent, transformComponent, dataContext){
        const type = this.getShapeTypeGenerator(meshComponent.getShape())
        new type().draw(meshComponent, transformComponent, dataContext)
    }

    /**
     * @param {string} shape
     * @return {Class<TypeShapeGenerator>}
     */
    getShapeTypeGenerator(shape){
        switch (shape) {
            case PrimitiveShape.RECT:
                return RectShapeGenerator
            case PrimitiveShape.RECT_CROSS:
                return RectCrossShapeGenerator
            case PrimitiveShape.ARROW_RIGHT:
                return ArrowRightShapeGenerator
            case PrimitiveShape.ARROW_DOWN:
                return ArrowDownShapeGenerator
            case PrimitiveShape.ARROW_RECT_RIGHT:
                return ArrowRectRightShapeGenerator
            case PrimitiveShape.ARROW_RECT_DOWN:
                return ArrowRectDownShapeGenerator
            case PrimitiveShape.CIRCLE:
                return CircleShapeGenerator
            case PrimitiveShape.GRID:
                return GridShapeGenerator
            case PrimitiveShape.LINE:
                return LineShapeGenerator
            default:
                throw new TypeError(`${shape} not supported by ShapeGenerator`)
        }
    }

    /**
     * @return {ShapeGenerator}
     */
    static get() {
        if (!this.instance) {
            this.instance = new this()
        }
        return this.instance
    }

}