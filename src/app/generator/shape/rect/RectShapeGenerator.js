import TypeShapeGenerator from '../TypeShapeGenerator.js'
import TDRectShapeGenerator from './TDRectShapeGenerator.js'
import WGRectShapeGenerator from './WGRectShapeGenerator.js'

export default class RectShapeGenerator extends TypeShapeGenerator{

    get2DContext() {
        return TDRectShapeGenerator
    }

    getWebGLContext() {
        return WGRectShapeGenerator
    }

}