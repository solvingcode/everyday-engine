import ArrowShapeGenerator from './ArrowShapeGenerator.js'
import TDArrowDownShapeGenerator from './TDArrowDownShapeGenerator.js'
import WGArrowDownShapeGenerator from './WGArrowDownShapeGenerator.js'

export default class ArrowDownShapeGenerator extends ArrowShapeGenerator{
    get2DContext() {
        return TDArrowDownShapeGenerator
    }

    getWebGLContext() {
        return WGArrowDownShapeGenerator
    }
}