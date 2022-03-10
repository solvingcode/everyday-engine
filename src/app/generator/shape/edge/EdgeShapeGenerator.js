import TypeShapeGenerator from '../TypeShapeGenerator.js'
import TDEdgeShapeGenerator from './TDEdgeShapeGenerator.js'
import WGEdgeShapeGenerator from './WGEdgeShapeGenerator.js'

export default class EdgeShapeGenerator extends TypeShapeGenerator{

    get2DContext() {
        return TDEdgeShapeGenerator
    }

    getWebGLContext() {
        return WGEdgeShapeGenerator
    }
}