import TypeShapeGenerator from '../TypeShapeGenerator.js'
import TDEdgeShapeGenerator from './TDEdgeShapeGenerator.js'

export default class EdgeShapeGenerator extends TypeShapeGenerator{

    get2DContext() {
        return TDEdgeShapeGenerator
    }

}