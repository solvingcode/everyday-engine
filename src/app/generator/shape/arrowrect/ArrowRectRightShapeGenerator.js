import ArrowRectShapeGenerator from './ArrowRectShapeGenerator.js'
import TDArrowRectRightShapeGenerator from './TDArrowRectRightShapeGenerator.js'

export default class ArrowRectRightShapeGenerator extends ArrowRectShapeGenerator{
    get2DContext() {
        return TDArrowRectRightShapeGenerator
    }
}