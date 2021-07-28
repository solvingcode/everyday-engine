import Material from './Material.js'
import LightHelper from '../utils/LightHelper.js'
import LightPointComponent from '../component/internal/LightPointComponent.js'
import LightGlobalComponent from '../component/internal/LightGlobalComponent.js'

export default class LightMaterial extends Material {

    constructor() {
        super('light')
    }

    /**
     * @override
     */
    generate(canvas, dataContext, meshComponent, transformComponent) {
        const {context, scaleSize, world, camera} = dataContext
        const unitManager = world.getUnitManager()
        const lightGlobalUnits = unitManager.findUnitsByComponents([LightGlobalComponent])
        let globalIntensity = 3
        let globalColor = '#000000'
        if (lightGlobalUnits.length) {
            const lightGlobalComponent = lightGlobalUnits[0].getComponent(LightGlobalComponent)
            globalIntensity = lightGlobalComponent.getIntensity()
            globalColor = lightGlobalComponent.getColor()
        }
        unitManager.findUnitsByComponentClasses([LightPointComponent]).forEach(unitLight => {
            const lightCanvas = LightHelper.getPoint(unitLight, camera, transformComponent.getPosition(), scaleSize, globalIntensity, globalColor)
            const globalCompositeOperation = context.globalCompositeOperation
            context.globalCompositeOperation = 'source-atop'
            context.drawImage(lightCanvas, 0, 0, scaleSize.width, scaleSize.height)
            context.globalCompositeOperation = globalCompositeOperation
        })
    }
}