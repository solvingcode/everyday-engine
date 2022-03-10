import TypeShapeGenerator from '../TypeShapeGenerator.js'
import TDGridShapeGenerator from './TDGridShapeGenerator.js'
import WGGridShapeGenerator from './WGGridShapeGenerator.js'

export default class GridShapeGenerator extends TypeShapeGenerator {

    get2DContext() {
        return TDGridShapeGenerator
    }

    getWebGLContext() {
        return WGGridShapeGenerator
    }
}