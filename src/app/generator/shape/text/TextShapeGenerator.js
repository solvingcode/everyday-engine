import TypeShapeGenerator from '../TypeShapeGenerator.js'
import TDTextShapeGenerator from './TDTextShapeGenerator.js'

export default class TextShapeGenerator extends TypeShapeGenerator {
    get2DContext() {
        return TDTextShapeGenerator
    }
}