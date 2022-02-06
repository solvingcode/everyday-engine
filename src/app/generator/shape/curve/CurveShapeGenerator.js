import TypeShapeGenerator from '../TypeShapeGenerator.js'
import TDCurveShapeGenerator from './TDCurveShapeGenerator.js'

export default class CurveShapeGenerator extends TypeShapeGenerator {
    get2DContext() {
        return TDCurveShapeGenerator
    }
}