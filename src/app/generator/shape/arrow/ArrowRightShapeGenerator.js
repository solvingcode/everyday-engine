import ArrowShapeGenerator from './ArrowShapeGenerator.js'
import TDArrowRightShapeGenerator from './TDArrowRightShapeGenerator.js'

export default class ArrowRightShapeGenerator extends ArrowShapeGenerator{
    get2DContext() {
        return TDArrowRightShapeGenerator
    }
}