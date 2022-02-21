import TypeShapeGenerator from '../TypeShapeGenerator.js'
import TDLightPointShapeGenerator from './TDLightPointShapeGenerator.js'
import WGLightPointShapeGenerator from './WGLightPointShapeGenerator.js'

export default class LightPointShapeGenerator extends TypeShapeGenerator {

    get2DContext() {
        return TDLightPointShapeGenerator
    }

    getWebGLContext() {
        return WGLightPointShapeGenerator
    }
}