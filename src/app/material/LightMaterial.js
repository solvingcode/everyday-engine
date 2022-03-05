import Material from './Material.js'
import LightHelper from '../utils/LightHelper.js'
import LightGlobalComponent from '../component/internal/LightGlobalComponent.js'
import MaterialType from './MaterialType.js'
import Color from '../utils/Color.js'

export default class LightMaterial extends Material {

    constructor() {
        super(MaterialType.LIGHT)
    }

    /**
     * @override
     */
    generate(context, size, world, camera, meshComponent, transformComponent) {
        const materialCanvas = new OffscreenCanvas(size.width, size.height)
        const materialContext = materialCanvas.getContext('2d')
        materialContext.drawImage(context.canvas, 0, 0, size.width, size.height)

        const unitManager = world.getUnitManager()
        const lightGlobalUnits = unitManager.findUnitsByComponents([LightGlobalComponent])
        let globalIntensity = 1
        let globalColor = '#000000'
        if (lightGlobalUnits.length) {
            const lightGlobalComponent = lightGlobalUnits[0].getComponent(LightGlobalComponent)
            globalIntensity = lightGlobalComponent.getIntensity()
            globalColor = lightGlobalComponent.getColor()
        }
        const globalColorRgba = Color.hexToRgb(globalColor, globalIntensity)

        //get light context fitted to the object
        const lightContextSourceAtop = LightHelper.getLightContext(materialContext, world, globalColorRgba,
            globalIntensity, globalColor, transformComponent, meshComponent, camera, size)

        //multiply the light context with object's texture
        const globalCompositeOperation = materialContext.globalCompositeOperation
        materialContext.globalCompositeOperation = 'multiply'
        materialContext.drawImage(lightContextSourceAtop.canvas, 0, 0, size.width, size.height)
        materialContext.globalCompositeOperation = globalCompositeOperation

        return materialContext
    }
}