import TypeShapeGenerator from '../TypeShapeGenerator.js'
import TDCircleShapeGenerator from './TDCircleShapeGenerator.js'
import WGCircleShapeGenerator from './WGCircleShapeGenerator.js'

export default class CircleShapeGenerator extends TypeShapeGenerator{

    get2DContext() {
        return TDCircleShapeGenerator
    }

    getWebGLContext() {
        return WGCircleShapeGenerator
    }
}