import TypeShapeGenerator from '../TypeShapeGenerator.js'
import LightPointComponent from '../../../component/internal/LightPointComponent.js'
import Maths from '../../../utils/Maths.js'

/**
 * @abstract
 */
export default class LightPointShapeGenerator extends TypeShapeGenerator {

    /**
     * @override
     */
    draw(unit, dataContext) {
        const lightComponent = unit.getComponent(LightPointComponent)
        const outerAngle = Maths.fromDegree(lightComponent.getOuterAngle())
        const innerAngle = Maths.fromDegree(lightComponent.getInnerAngle())
        const outerRadius = lightComponent.getOuterRadius()
        const {center, context, scaleSize, camera} = dataContext
        const sw = scaleSize.width * outerRadius / 100
        const radiusScale = Math.abs(sw / 2 - 1)

        //arc light + light bounds
        context.beginPath()
        context.moveTo(center.x, center.y)
        context.lineTo(sw, radiusScale)
        context.moveTo(center.x, center.y)
        context.lineTo(center.x + Math.cos(outerAngle) * radiusScale, center.y + Math.cos(Math.PI / 2 - outerAngle) * radiusScale)
        context.moveTo(center.x, center.y)
        context.arc(center.x, center.y, radiusScale, 0, outerAngle)
        context.closePath()

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