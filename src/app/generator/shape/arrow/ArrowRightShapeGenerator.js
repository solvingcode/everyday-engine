import ArrowShapeGenerator from './ArrowShapeGenerator.js'
import TDArrowRightShapeGenerator from './TDArrowRightShapeGenerator.js'
import WGArrowRightShapeGenerator from './WGArrowRightShapeGenerator.js'

export default class ArrowRightShapeGenerator extends ArrowShapeGenerator{
    get2DContext() {
        return TDArrowRightShapeGenerator
    }

    getWebGLContext() {
        return WGArrowRightShapeGenerator
    }
}