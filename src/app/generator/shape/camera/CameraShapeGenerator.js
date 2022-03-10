import TypeShapeGenerator from '../TypeShapeGenerator.js'
import TDCameraShapeGenerator from './TDCameraShapeGenerator.js'
import WGCameraShapeGenerator from './WGCameraShapeGenerator.js'

export default class CameraShapeGenerator extends TypeShapeGenerator {
    get2DContext() {
        return TDCameraShapeGenerator
    }

    getWebGLContext() {
        return WGCameraShapeGenerator
    }
}