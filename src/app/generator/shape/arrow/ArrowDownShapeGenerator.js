import ArrowShapeGenerator from './ArrowShapeGenerator.js'
import TDArrowDownShapeGenerator from './TDArrowDownShapeGenerator.js'

export default class ArrowDownShapeGenerator extends ArrowShapeGenerator{
    get2DContext() {
        return TDArrowDownShapeGenerator
    }
}