import TypeShapeGenerator from '../TypeShapeGenerator.js'
import TDGridShapeGenerator from './TDGridShapeGenerator.js'

export default class GridShapeGenerator extends TypeShapeGenerator {

    get2DContext() {
        return TDGridShapeGenerator
    }

}