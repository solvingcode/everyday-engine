import TypeShapeGenerator from '../TypeShapeGenerator.js'
import TDLightPointShapeGenerator from './TDLightPointShapeGenerator.js'

export default class LightPointShapeGenerator extends TypeShapeGenerator {

    get2DContext() {
        return TDLightPointShapeGenerator
    }

}