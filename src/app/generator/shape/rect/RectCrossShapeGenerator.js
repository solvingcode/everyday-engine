import TypeShapeGenerator from '../TypeShapeGenerator.js'
import TDRectCrossShapeGenerator from './TDRectCrossShapeGenerator.js'

export default class RectCrossShapeGenerator extends TypeShapeGenerator{

    get2DContext() {
        return TDRectCrossShapeGenerator
    }

    getWebGLContext() {
        return undefined
    }
}