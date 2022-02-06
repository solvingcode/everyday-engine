import ArrowRectShapeGenerator from './ArrowRectShapeGenerator.js'
import TDArrowRectDownShapeGenerator from './TDArrowRectDownShapeGenerator.js'

export default class ArrowRectDownShapeGenerator extends ArrowRectShapeGenerator{
    get2DContext() {
        return TDArrowRectDownShapeGenerator
    }
}