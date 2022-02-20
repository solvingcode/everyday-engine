import TypeShapeGenerator from '../TypeShapeGenerator.js'
import TDCurveShapeGenerator from './TDCurveShapeGenerator.js'
import WGCurveShapeGenerator from './WGCurveShapeGenerator.js'

export default class CurveShapeGenerator extends TypeShapeGenerator {
    get2DContext() {
        return TDCurveShapeGenerator
    }

    getWebGLContext() {
        return WGCurveShapeGenerator
    }
}