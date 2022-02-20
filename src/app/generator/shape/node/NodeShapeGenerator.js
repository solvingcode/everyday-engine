import TypeShapeGenerator from '../TypeShapeGenerator.js'
import TDNodeShapeGenerator from './TDNodeShapeGenerator.js'
import WGNodeShapeGenerator from './WGNodeShapeGenerator.js'

export default class NodeShapeGenerator extends TypeShapeGenerator {

    get2DContext() {
        return TDNodeShapeGenerator
    }

    getWebGLContext() {
        return WGNodeShapeGenerator
    }
}