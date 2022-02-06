import TypeShapeGenerator from '../TypeShapeGenerator.js'
import TDCircleShapeGenerator from './TDCircleShapeGenerator.js'

export default class CircleShapeGenerator extends TypeShapeGenerator{

    get2DContext() {
        return TDCircleShapeGenerator
    }

}