import Material from './Material.js'
import LightHelper from '../utils/LightHelper.js'
import LightPointComponent from '../component/internal/LightPointComponent.js'
import LightGlobalComponent from '../component/internal/LightGlobalComponent.js'
import {CANVAS_CONTEXT_TYPE} from '../core/Constant.js'
import MaterialType from './MaterialType.js'
import Color from '../utils/Color.js'
import ImageHelper from '../utils/ImageHelper.js'

export default class LightMaterial extends Material {

    constructor() {
        super(MaterialType.LIGHT)
    }

    /**
     * @override
     */
    generate(canvas, dataContext, meshComponent, transformComponent) {
        const {context, scaleSize, world, camera} = dataContext
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

        const canvasLightContainer = new OffscreenCanvas(scaleSize.width, scaleSize.height)
        const contextLightContainer = canvasLightContainer.getContext(CANVAS_CONTEXT_TYPE)
        contextLightContainer.fillStyle = globalColorRgba
        contextLightContainer.fillRect(0, 0, scaleSize.width, scaleSize.height)

        const canvasLights = new OffscreenCanvas(scaleSize.width, scaleSize.height)
        const contextLights = canvasLights.getContext(CANVAS_CONTEXT_TYPE)
        contextLights.globalCompositeOperation = 'lighter'
        unitManager.findUnitsByComponentClasses([LightPointComponent]).forEach(unitLight => {
            const lightCanvas = LightHelper.getPoint(unitLight, camera, transformComponent.getPosition(), scaleSize, globalIntensity, globalColor)
            contextLights.drawImage(lightCanvas, 0, 0, scaleSize.width, scaleSize.height)
        })

        contextLightContainer.drawImage(canvasLights, 0, 0, scaleSize.width, scaleSize.height)

        const lightCanvasSourceAtop = ImageHelper.copyCanvas(context.canvas, meshComponent.getFilter())
        const lightContextSourceAtop = lightCanvasSourceAtop.getContext(CANVAS_CONTEXT_TYPE)
        lightContextSourceAtop.globalCompositeOperation = 'source-atop'
        lightContextSourceAtop.drawImage(canvasLightContainer, 0, 0, scaleSize.width, scaleSize.height)

        const globalCompositeOperation = context.globalCompositeOperation
        context.globalCompositeOperation = 'multiply'
        context.drawImage(lightCanvasSourceAtop, 0, 0, scaleSize.width, scaleSize.height)
        context.globalCompositeOperation = globalCompositeOperation
    }
}