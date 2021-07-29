import Material from './Material.js'
import LightHelper from '../utils/LightHelper.js'
import LightPointComponent from '../component/internal/LightPointComponent.js'
import LightGlobalComponent from '../component/internal/LightGlobalComponent.js'
import {CANVAS_CONTEXT_TYPE} from '../core/Constant.js'
import MaterialType from './MaterialType.js'

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
        unitManager.findUnitsByComponentClasses([LightPointComponent]).forEach(unitLight => {
            const lightCanvas = LightHelper.getPoint(unitLight, camera, transformComponent.getPosition(), scaleSize, globalIntensity, globalColor)

            const lightCanvasSourceAtop = this.copyCanvas(context.canvas)
            const lightContextSourceAtop = lightCanvasSourceAtop.getContext(CANVAS_CONTEXT_TYPE)
            lightContextSourceAtop.globalCompositeOperation = 'source-atop'
            lightContextSourceAtop.drawImage(lightCanvas, 0, 0, scaleSize.width, scaleSize.height)

            const globalCompositeOperation = context.globalCompositeOperation
            context.globalCompositeOperation = 'multiply'
            context.drawImage(lightCanvasSourceAtop, 0, 0, scaleSize.width, scaleSize.height)
            context.globalCompositeOperation = globalCompositeOperation
        })
    }

    /**
     * @param {OffscreenCanvas} canvas
     * @return {OffscreenCanvas}
     */
    copyCanvas(canvas){
        const canvasCopy = new OffscreenCanvas(canvas.width, canvas.height)
        const contextCopy = canvasCopy.getContext(CANVAS_CONTEXT_TYPE)
        contextCopy.drawImage(canvas, 0, 0, canvas.width, canvas.height)
        return canvasCopy
    }
}