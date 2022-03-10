import TypeShapeGenerator from '../TypeShapeGenerator.js'
import TDRectStrokeShapeGenerator from './TDRectStrokeShapeGenerator.js'
import WGRectFillShapeGenerator from './WGRectFillShapeGenerator.js'

export default class RectFillShapeGenerator extends TypeShapeGenerator{

    get2DContext() {
        return TDRectStrokeShapeGenerator
    }

    getWebGLContext() {
        return WGRectFillShapeGenerator
    }

}