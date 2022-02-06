import TypeShapeGenerator from '../TypeShapeGenerator.js'
import TDNodeShapeGenerator from './TDNodeShapeGenerator.js'

export default class NodeShapeGenerator extends TypeShapeGenerator {

    get2DContext() {
        return TDNodeShapeGenerator
    }

}