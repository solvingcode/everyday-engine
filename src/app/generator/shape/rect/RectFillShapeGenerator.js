import TypeShapeGenerator from '../TypeShapeGenerator.js'
import TDRectShapeGenerator from './TDRectShapeGenerator.js'
import WGRectFillShapeGenerator from './WGRectFillShapeGenerator.js'

export default class RectFillShapeGenerator extends TypeShapeGenerator{

    get2DContext() {
        return TDRectShapeGenerator
    }

    getWebGLContext() {
        return WGRectFillShapeGenerator
    }

}