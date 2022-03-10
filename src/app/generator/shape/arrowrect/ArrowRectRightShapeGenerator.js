import ArrowRectShapeGenerator from './ArrowRectShapeGenerator.js'
import TDArrowRectRightShapeGenerator from './TDArrowRectRightShapeGenerator.js'
import WGArrowRectRightShapeGenerator from './WGArrowRectRightShapeGenerator.js'

export default class ArrowRectRightShapeGenerator extends ArrowRectShapeGenerator{
    get2DContext() {
        return TDArrowRectRightShapeGenerator
    }

    getWebGLContext() {
        return WGArrowRectRightShapeGenerator
    }
}