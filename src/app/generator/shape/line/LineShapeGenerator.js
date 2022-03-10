import TypeShapeGenerator from '../TypeShapeGenerator.js'
import TDLineShapeGenerator from './TDLineShapeGenerator.js'
import WGLineShapeGenerator from './WGLineShapeGenerator.js'

export default class LineShapeGenerator extends TypeShapeGenerator{

    get2DContext() {
        return TDLineShapeGenerator
    }

    getWebGLContext() {
        return WGLineShapeGenerator
    }
}