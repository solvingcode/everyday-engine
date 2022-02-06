import TypeShapeGenerator from '../TypeShapeGenerator.js'
import TDCameraShapeGenerator from './TDCameraShapeGenerator.js'

export default class CameraShapeGenerator extends TypeShapeGenerator {
    get2DContext() {
        return TDCameraShapeGenerator
    }
}