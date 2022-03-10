import TypeShapeGenerator from '../TypeShapeGenerator.js'
import TDRectStrokeShapeGenerator from './TDRectStrokeShapeGenerator.js'
import WGRectStrokeShapeGenerator from './WGRectStrokeShapeGenerator.js'

export default class RectStrokeShapeGenerator extends TypeShapeGenerator{

    get2DContext() {
        return TDRectStrokeShapeGenerator
    }

    getWebGLContext() {
        return WGRectStrokeShapeGenerator
    }

}