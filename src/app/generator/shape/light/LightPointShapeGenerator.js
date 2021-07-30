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
        const outerAngle = Math.PI * 2 - Maths.fromDegree(lightComponent.getOuterAngle())
        const innerAngle = Math.PI * 2 - Maths.fromDegree(lightComponent.getInnerAngle())
        const outerRadius = lightComponent.getOuterRadius()
        const {center, context, scaleSize, camera} = dataContext
        const sw = scaleSize.width * outerRadius / 100
        const radiusScale = Math.abs(sw / 2 - 1)

        //outer light bounds
        context.beginPath()
        context.moveTo(center.x, center.y)
        context.lineTo(center.x + Math.cos(outerAngle / 2) * radiusScale, center.y - Math.cos(Math.PI / 2 - outerAngle / 2) * radiusScale)
        context.moveTo(center.x, center.y)
        context.lineTo(center.x + Math.cos(outerAngle / 2) * radiusScale, center.y + Math.cos(Math.PI / 2 - outerAngle / 2) * radiusScale)
        context.moveTo(center.x, center.y)
        context.arc(center.x, center.y, radiusScale, outerAngle / 2, Math.PI * 2 - outerAngle / 2)
        //inner light bound
        context.moveTo(center.x, center.y)
        context.lineTo(center.x + Math.cos(innerAngle / 2) * radiusScale, center.y - Math.cos(Math.PI / 2 - innerAngle / 2) * radiusScale)
        context.moveTo(center.x, center.y)
        context.lineTo(center.x + Math.cos(innerAngle / 2) * radiusScale, center.y + Math.cos(Math.PI / 2 - innerAngle / 2) * radiusScale)
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