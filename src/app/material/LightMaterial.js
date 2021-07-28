import Material from './Material.js'
import LightHelper from '../utils/LightHelper.js'
import LightComponent from '../component/internal/LightComponent.js'

export default class LightMaterial extends Material {

    constructor() {
        super('light')
    }

    /**
     * @override
     */
    generate(canvas, dataContext, meshComponent, transformComponent) {
        const {context, scaleSize, world, camera} = dataContext
        world.getUnitManager().findUnitsByComponentClasses([LightComponent]).forEach(unitLight => {
            const lightCanvas = LightHelper.getPoint(unitLight, camera, transformComponent.getPosition(), scaleSize)
            const globalCompositeOperation = context.globalCompositeOperation
            context.globalCompositeOperation = 'source-atop'
            context.drawImage(lightCanvas, 0, 0, scaleSize.width, scaleSize.height)
            context.globalCompositeOperation = globalCompositeOperation
        })
    }
}