import ArrowRectShapeGenerator from './ArrowRectShapeGenerator.js'
import TDArrowRectDownShapeGenerator from './TDArrowRectDownShapeGenerator.js'
import WGArrowRectDownShapeGenerator from './WGArrowRectDownShapeGenerator.js'

export default class ArrowRectDownShapeGenerator extends ArrowRectShapeGenerator{
    get2DContext() {
        return TDArrowRectDownShapeGenerator
    }

    getWebGLContext() {
        return WGArrowRectDownShapeGenerator
    }
}