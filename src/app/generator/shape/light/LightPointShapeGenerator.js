import TypeShapeGenerator from '../TypeShapeGenerator.js'
import LightPointComponent from '../../../component/internal/LightPointComponent.js'
import Maths from '../../../utils/Maths.js'
import LightHelper from '../../../utils/LightHelper.js'

/**
 * @abstract
 */
export default class LightPointShapeGenerator extends TypeShapeGenerator {

    /**
     * @override
     */
    draw(unit, dataContext) {
        const lightComponent = unit.getComponent(LightPointComponent)
        const outerAngle = Math.PI * 2 - Maths.fromDegree(lightComponent.getOuterAngle())
        const innerAngle = Math.PI * 2 - Maths.fromDegree(lightComponent.getInnerAngle())
        const outerRadius = lightComponent.getOuterRadius()
        const {center, context, scaleSize, camera} = dataContext
        const sw = scaleSize.width * outerRadius / 100
        const radiusScale = Math.abs(sw / 2 - 1)

        //calculate light boundaries
        const outerLightBounds = LightHelper.getLightBounds(center, outerAngle, radiusScale)
        const innerLightBounds = LightHelper.getLightBounds(center, innerAngle, radiusScale)

        LightHelper.drawOuterLightBounds(context, outerLightBounds, radiusScale, outerAngle)
        context.stroke()
        LightHelper.drawInnerLightBounds(context, outerLightBounds.first, innerLightBounds.first, radiusScale, innerAngle)
        context.stroke()
        LightHelper.drawInnerLightBounds(context, outerLightBounds.second, innerLightBounds.second, radiusScale, innerAngle)
        context.stroke()

        //circle bulb
        const sizeBulb = camera.toScaleNumber(10)
        context.beginPath()
        context.arc(center.x, center.y, sizeBulb, 0, Math.PI * 2)
        context.closePath()
        context.fillStyle = 'rgba(255,255,247,0.71)'
        context.fill()
    }

}