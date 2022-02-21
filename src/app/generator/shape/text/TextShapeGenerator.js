import TypeShapeGenerator from '../TypeShapeGenerator.js'
import TDTextShapeGenerator from './TDTextShapeGenerator.js'
import WGTextShapeGenerator from './WGTextShapeGenerator.js'

export default class TextShapeGenerator extends TypeShapeGenerator {
    get2DContext() {
        return TDTextShapeGenerator
    }

    getWebGLContext() {
        return WGTextShapeGenerator
    }
}