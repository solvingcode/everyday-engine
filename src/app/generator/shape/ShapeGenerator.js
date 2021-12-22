import {PrimitiveShape} from '../../unit/Unit.js'
import RectShapeGenerator from './rect/RectShapeGenerator.js'
import ArrowRightShapeGenerator from './arrow/ArrowRightShapeGenerator.js'
import ArrowDownShapeGenerator from './arrow/ArrowDownShapeGenerator.js'
import CircleShapeGenerator from './circle/CircleShapeGenerator.js'
import ArrowRectRightShapeGenerator from './arrowrect/ArrowRectRightShapeGenerator.js'
import ArrowRectDownShapeGenerator from './arrowrect/ArrowRectDownShapeGenerator.js'
import GridShapeGenerator from './grid/GridShapeGenerator.js'
import LineShapeGenerator from './line/LineShapeGenerator.js'
import RectCrossShapeGenerator from './rect/RectCrossShapeGenerator.js'
import MeshComponent from '../../component/internal/MeshComponent.js'
import NodeShapeGenerator from './node/NodeShapeGenerator.js'
import CameraShapeGenerator from './camera/CameraShapeGenerator.js'
import LightPointShapeGenerator from './light/LightPointShapeGenerator.js'
import TextShapeGenerator from './text/TextShapeGenerator.js'
import CurveShapeGenerator from './curve/CurveShapeGenerator.js'
import EdgeShapeGenerator from './edge/EdgeShapeGenerator.js'

/**
 * @abstract
 */
export default class ShapeGenerator {

    static instance

    /**
     * @abstract
     * @param {Unit} unit
     * @param {DataContext} dataContext
     */
    draw(unit, dataContext){
        const meshComponent = unit.getComponent(MeshComponent)
        const type = this.getShapeTypeGenerator(meshComponent.getShape())
        new type().draw(unit, dataContext)
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
            case PrimitiveShape.CAMERA:
                return CameraShapeGenerator
            case PrimitiveShape.LIGHT_POINT:
                return LightPointShapeGenerator
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
            case PrimitiveShape.CURVE:
                return CurveShapeGenerator
            case PrimitiveShape.EDGE:
                return EdgeShapeGenerator
            case PrimitiveShape.NODE:
                return NodeShapeGenerator
            case PrimitiveShape.TEXT:
                return TextShapeGenerator
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