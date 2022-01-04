import Material from './Material.js'
import LightHelper from '../utils/LightHelper.js'
import LightPointComponent from '../component/internal/LightPointComponent.js'
import LightGlobalComponent from '../component/internal/LightGlobalComponent.js'
import {CANVAS_CONTEXT_TYPE} from '../core/Constant.js'
import MaterialType from './MaterialType.js'
import Color from '../utils/Color.js'
import ImageHelper from '../utils/ImageHelper.js'
import Size from '../pobject/Size.js'

export default class LightMaterial extends Material {

    constructor() {
        super(MaterialType.LIGHT)
    }

    /**
     * @override
     */
    generate(dataContext, meshComponent, transformComponent) {
        const {context, world, camera} = dataContext
        const size = new Size({width: context.canvas.width, height: context.canvas.height})

        const materialCanvas = new OffscreenCanvas(size.width, size.height)
        const materialContext = materialCanvas.getContext(CANVAS_CONTEXT_TYPE)
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

        const canvasLightContainer = new OffscreenCanvas(size.width, size.height)
        const contextLightContainer = canvasLightContainer.getContext(CANVAS_CONTEXT_TYPE)
        contextLightContainer.fillStyle = globalColorRgba
        contextLightContainer.fillRect(0, 0, size.width, size.height)

        const canvasLights = new OffscreenCanvas(size.width, size.height)
        const contextLights = canvasLights.getContext(CANVAS_CONTEXT_TYPE)
        contextLights.globalCompositeOperation = 'lighter'
        unitManager.findUnitsByComponentClasses([LightPointComponent]).forEach(unitLight => {
            const lightCanvas = LightHelper.getPoint(unitLight, camera, transformComponent.getPosition(), size, globalIntensity, globalColor)
            contextLights.drawImage(lightCanvas, 0, 0, size.width, size.height)
        })

        contextLightContainer.drawImage(canvasLights, 0, 0, size.width, size.height)

        const lightCanvasSourceAtop = ImageHelper.copyCanvas(materialContext.canvas, meshComponent.getFilter())
        const lightContextSourceAtop = lightCanvasSourceAtop.getContext(CANVAS_CONTEXT_TYPE)
        lightContextSourceAtop.globalCompositeOperation = 'source-atop'
        lightContextSourceAtop.drawImage(canvasLightContainer, 0, 0, size.width, size.height)

        const globalCompositeOperation = materialContext.globalCompositeOperation
        materialContext.globalCompositeOperation = 'multiply'
        materialContext.drawImage(lightCanvasSourceAtop, 0, 0, size.width, size.height)
        materialContext.globalCompositeOperation = globalCompositeOperation

        return materialContext
    }
}