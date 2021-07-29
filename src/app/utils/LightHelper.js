import LightPointComponent from '../component/internal/LightPointComponent.js'
import Maths from './Maths.js'
import MeshComponent from '../component/internal/MeshComponent.js'
import {CANVAS_CONTEXT_TYPE} from '../core/Constant.js'
import Vector from './Vector.js'
import TransformComponent from '../component/internal/TransformComponent.js'
import Color from './Color.js'
import GeometryHelper from './GeometryHelper.js'

export default class LightHelper {

    /**
     * @param {Unit} unit
     * @param {Camera} camera
     * @param {Vector} positionToLight absolute position
     * @param {Size} sizeToLight
     * @param {number} globalIntensity
     * @param {string} globalColor
     *
     * @return {OffscreenCanvas}
     */
    static getPoint(unit, camera, positionToLight, sizeToLight, globalIntensity, globalColor){
        //init properties
        const meshComponent = unit.getComponent(MeshComponent)
        const transformComponent = unit.getComponent(TransformComponent)
        const lightComponent = unit.getComponent(LightPointComponent)
        const outerAngle = Maths.fromDegree(lightComponent.getOuterAngle())
        const outerRadius = lightComponent.getOuterRadius()
        const innerRadius = lightComponent.getInnerRadius()
        const lightColor = lightComponent.getColor()
        const lightIntensity = lightComponent.getIntensity()
        const scaleSize = camera.toScaleSize(meshComponent.getSize())
        const center = new Vector({x: scaleSize.width / 2, y: scaleSize.height / 2})
        const sw = scaleSize.width * outerRadius / 100
        const radiusScale = Math.abs(sw / 2 - 1)
        const lightPosition = transformComponent.getPosition()
        const lightRotation = transformComponent.getRotation()
        const globalColorRgba = Color.hexToRgb(globalColor, globalIntensity)
        const lightColorRgba = Color.hexToRgb(lightColor, lightIntensity)

        //calculate position to put the light
        const positionStartLight = camera.toCameraScale(Vector.subtract(lightPosition, positionToLight))

        //create canvas
        const canvas = new OffscreenCanvas(sizeToLight.width, sizeToLight.height)
        const context = canvas.getContext(CANVAS_CONTEXT_TYPE)

        context.fillStyle = globalColorRgba
        context.fillRect(0, 0, sizeToLight.width, sizeToLight.height)

        //arc light + light bounds
        const {width: largeWidth, height: largeHeight} = GeometryHelper.getLargestRectangle(lightRotation, scaleSize)
        const lightCanvas = new OffscreenCanvas(largeWidth, largeHeight)
        const lightContext = lightCanvas.getContext(CANVAS_CONTEXT_TYPE)
        lightContext.translate(largeWidth / 2, largeHeight / 2)
        lightContext.rotate(lightRotation)
        lightContext.translate(-center.x, -center.y)
        lightContext.beginPath()
        lightContext.moveTo(center.x, center.y)
        lightContext.lineTo(sw, radiusScale)
        lightContext.moveTo(center.x, center.y)
        lightContext.lineTo(center.x + Math.cos(outerAngle) * radiusScale, center.y + Math.cos(Math.PI / 2 - outerAngle) * radiusScale)
        lightContext.moveTo(center.x, center.y)
        lightContext.arc(center.x, center.y, radiusScale, 0, outerAngle)
        lightContext.closePath()

        //gradient lighting
        const gradientLight = lightContext.createRadialGradient(
            center.x, center.y, 0, center.x, center.y, radiusScale)
        gradientLight.addColorStop(0, lightColorRgba)
        gradientLight.addColorStop(innerRadius / 100, lightColorRgba)
        gradientLight.addColorStop(1, globalColorRgba)
        lightContext.fillStyle = gradientLight
        lightContext.fill()

        //fill gradient light
        context.drawImage(lightCanvas, positionStartLight.x, positionStartLight.y, lightCanvas.width, lightCanvas.height)

        return canvas
    }

}