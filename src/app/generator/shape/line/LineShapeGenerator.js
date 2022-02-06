import TypeShapeGenerator from '../TypeShapeGenerator.js'
import TDLineShapeGenerator from './TDLineShapeGenerator.js'

export default class LineShapeGenerator extends TypeShapeGenerator{

    get2DContext() {
        return TDLineShapeGenerator
    }

}