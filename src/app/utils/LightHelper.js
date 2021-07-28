import LightPointComponent from '../component/internal/LightPointComponent.js'
import Maths from './Maths.js'
import MeshComponent from '../component/internal/MeshComponent.js'
import {CANVAS_CONTEXT_TYPE} from '../core/Constant.js'
import Vector from './Vector.js'
import TransformComponent from '../component/internal/TransformComponent.js'

export default class LightHelper {

    /**
     * @param {Unit} unit
     * @param {Camera} camera
     * @param {Vector} positionToLight absolute position
     * @param {Size} sizeToLight
     *
     * @return {OffscreenCanvas}
     */
    static getPoint(unit, camera, positionToLight, sizeToLight){
        //init properties
        const meshComponent = unit.getComponent(MeshComponent)
        const transformComponent = unit.getComponent(TransformComponent)
        const lightComponent = unit.getComponent(LightPointComponent)
        const outerAngle = Maths.fromDegree(lightComponent.getOuterAngle())
        const innerAngle = Maths.fromDegree(lightComponent.getInnerAngle())
        const outerRadius = lightComponent.getOuterRadius()
        const scaleSize = camera.toScaleSize(meshComponent.getSize())
        const center = new Vector({x: scaleSize.width / 2, y: scaleSize.height / 2})
        const sw = scaleSize.width * outerRadius / 100
        const radiusScale = Math.abs(sw / 2 - 1)
        const lightPosition = transformComponent.getPosition()

        //calculate position to put the light
        const positionStartLight = camera.toCameraScale(Vector.subtract(lightPosition, positionToLight))
        const centerLight = Vector.add(positionStartLight, center)

        //create canvas
        const canvas = new OffscreenCanvas(sizeToLight.width, sizeToLight.height)
        const context = canvas.getContext(CANVAS_CONTEXT_TYPE)

        //gradient lighting
        const gradientLight = context.createRadialGradient(
            centerLight.x, centerLight.y, 0, centerLight.x, centerLight.y, radiusScale)
        gradientLight.addColorStop(0, 'rgba(255, 255, 255, 1)')
        gradientLight.addColorStop(1, 'rgba(0, 0, 0, 0)')

        context.fillStyle = '#000000'
        context.fillRect(0, 0, sizeToLight.width, sizeToLight.height)

        //arc light + light bounds
        context.beginPath()
        context.moveTo(centerLight.x, centerLight.y)
        context.lineTo(sw, radiusScale)
        context.moveTo(centerLight.x, centerLight.y)
        context.lineTo(centerLight.x + Math.cos(outerAngle) * radiusScale, centerLight.y + Math.cos(Math.PI / 2 - outerAngle) * radiusScale)
        context.moveTo(centerLight.x, centerLight.y)
        context.arc(centerLight.x, centerLight.y, radiusScale, 0, outerAngle)
        context.closePath()

        //fill gradient light
        context.globalCompositeOperation = 'destination-out'
        context.fillStyle = gradientLight
        context.fill()

        return canvas
    }

}