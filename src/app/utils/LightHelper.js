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
     * @todo Must be refactored
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
        const outerAngle = Math.PI * 2 - Maths.fromDegree(lightComponent.getOuterAngle())
        const innerAngle = Math.PI * 2 - Maths.fromDegree(lightComponent.getInnerAngle())
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

        //arc light + light bounds
        const {width: largeWidth, height: largeHeight} = GeometryHelper.getLargestRectangle(lightRotation, scaleSize)
        const lightCanvas = new OffscreenCanvas(largeWidth, largeHeight)
        const lightContext = lightCanvas.getContext(CANVAS_CONTEXT_TYPE)
        lightContext.translate(largeWidth / 2, largeHeight / 2)
        lightContext.rotate(lightRotation)
        lightContext.translate(-center.x, -center.y)

        //outer angle light
        const outerBoundOne = [center, new Vector({x: center.x + Math.cos(outerAngle / 2) * radiusScale, y: center.y - Math.cos(Math.PI / 2 - outerAngle / 2) * radiusScale})]
        const outerBoundTwo = [center, new Vector({x: center.x + Math.cos(outerAngle / 2) * radiusScale, y: center.y + Math.cos(Math.PI / 2 - outerAngle / 2) * radiusScale})]
        lightContext.beginPath()
        lightContext.moveTo(outerBoundOne[0].x, outerBoundOne[0].y)
        lightContext.lineTo(outerBoundOne[1].x, outerBoundOne[1].y)
        lightContext.moveTo(outerBoundTwo[0].x, outerBoundTwo[0].y)
        lightContext.lineTo(outerBoundTwo[1].x, outerBoundTwo[1].y)
        lightContext.moveTo(center.x, center.y)
        lightContext.arc(center.x, center.y, radiusScale, outerAngle / 2, Math.PI * 2 - outerAngle / 2)
        lightContext.closePath()

        //gradient lighting outer
        const gradientOuterLight = lightContext.createRadialGradient(
            center.x, center.y, 0, center.x, center.y, radiusScale)
        gradientOuterLight.addColorStop(0, lightColorRgba)
        gradientOuterLight.addColorStop(innerRadius / 100, lightColorRgba)
        gradientOuterLight.addColorStop(1, globalColorRgba)
        lightContext.fillStyle = gradientOuterLight
        lightContext.fill()

        //inner angle light
        const innerBoundOne = [center, new Vector({x: center.x + Math.cos(innerAngle / 2) * radiusScale, y: center.y - Math.cos(Math.PI / 2 - innerAngle / 2) * radiusScale})]
        const innerBoundTwo = [center, new Vector({x: center.x + Math.cos(innerAngle / 2) * radiusScale, y: center.y + Math.cos(Math.PI / 2 - innerAngle / 2) * radiusScale})]

        const globalCompositeOperation = lightContext.globalCompositeOperation
        lightContext.globalCompositeOperation = 'destination-out'
        //gradient lighting inner
        const middleOuterBoundOne = Vector.divide(Vector.add(outerBoundOne[0], outerBoundOne[1]), 2)
        const middleInnerBoundOne = Vector.divide(Vector.add(innerBoundOne[0], innerBoundOne[1]), 2)
        const distanceOne = Math.sqrt(Math.pow(middleInnerBoundOne.x - middleOuterBoundOne.x, 2) + Math.pow(middleInnerBoundOne.y - middleOuterBoundOne.y, 2))
        const angleOne = Math.atan2(outerBoundOne[1].y - outerBoundOne[0].y, outerBoundOne[1].x - outerBoundOne[0].x)
        const normalPointOne = new Vector({
            x: middleOuterBoundOne.x + Math.sin(angleOne) * distanceOne,
            y: middleOuterBoundOne.y - Math.cos(angleOne) * distanceOne
        })

        /*const debugPath = new Path2D()
        debugPath.moveTo(middleOuterBoundOne.x, middleOuterBoundOne.y)
        debugPath.lineTo(normalPoint.x, normalPoint.y)
        lightContext.strokeStyle = '#ffffff'
        lightContext.stroke(debugPath)*/

        const gradientInnerLightOne = lightContext.createLinearGradient(
            middleOuterBoundOne.x, middleOuterBoundOne.y, normalPointOne.x, normalPointOne.y)
        gradientInnerLightOne.addColorStop(0, '#FFFFFF')
        gradientInnerLightOne.addColorStop(1, 'rgba(0, 0, 0, 0)')
        lightContext.fillStyle = gradientInnerLightOne

        const innerPathOne = new Path2D()
        innerPathOne.moveTo(outerBoundOne[0].x, outerBoundOne[0].y)
        innerPathOne.lineTo(outerBoundOne[1].x, outerBoundOne[1].y)
        innerPathOne.moveTo(innerBoundOne[0].x, innerBoundOne[0].y)
        innerPathOne.lineTo(innerBoundOne[1].x, innerBoundOne[1].y)
        innerPathOne.moveTo(outerBoundOne[0].x, outerBoundOne[0].y)
        innerPathOne.arc(outerBoundOne[0].x, outerBoundOne[0].y, radiusScale, Math.PI * 2 - innerAngle / 2, 0)
        //lightContext.stroke(innerPathOne)
        lightContext.fill()

        const middleOuterBoundTwo = Vector.divide(Vector.add(outerBoundTwo[0], outerBoundTwo[1]), 2)
        const middleInnerBoundTwo = Vector.divide(Vector.add(innerBoundTwo[0], innerBoundTwo[1]), 2)

        const distanceTwo = Math.sqrt(Math.pow(middleInnerBoundTwo.x - middleOuterBoundTwo.x, 2) + Math.pow(middleInnerBoundTwo.y - middleOuterBoundTwo.y, 2))
        const angleTwo = Math.atan2(outerBoundTwo[1].y - outerBoundTwo[0].y, outerBoundTwo[1].x - outerBoundTwo[0].x)
        const normalPointTwo = new Vector({
            x: middleOuterBoundTwo.x - Math.sin(angleTwo) * distanceTwo,
            y: middleOuterBoundTwo.y + Math.cos(angleTwo) * distanceTwo
        })

        /*const debugPath = new Path2D()
        debugPath.moveTo(middleOuterBoundTwo.x, middleOuterBoundTwo.y)
        debugPath.lineTo(normalPointTwo.x, normalPointTwo.y)
        lightContext.strokeStyle = '#ffffff'
        lightContext.stroke(debugPath)*/

        const gradientInnerLightTwo = lightContext.createLinearGradient(
            middleOuterBoundTwo.x, middleOuterBoundTwo.y, normalPointTwo.x, normalPointTwo.y)
        gradientInnerLightTwo.addColorStop(0, '#FFFFFF')
        gradientInnerLightTwo.addColorStop(1, 'rgba(0, 0, 0, 0)')
        lightContext.fillStyle = gradientInnerLightTwo
        const innerPathTwo = new Path2D()
        innerPathTwo.moveTo(outerBoundTwo[0].x, outerBoundTwo[0].y)
        innerPathTwo.lineTo(outerBoundTwo[1].x, outerBoundTwo[1].y)
        innerPathTwo.moveTo(innerBoundTwo[0].x, innerBoundTwo[0].y)
        innerPathTwo.lineTo(innerBoundTwo[1].x, innerBoundTwo[1].y)
        innerPathTwo.moveTo(outerBoundTwo[0].x, outerBoundTwo[0].y)
        innerPathTwo.arc(outerBoundTwo[0].x, outerBoundTwo[0].y, radiusScale, 0, innerAngle / 2)
        //lightContext.stroke(innerPathTwo)
        lightContext.fill()

        lightContext.globalCompositeOperation = globalCompositeOperation

        //fill gradient light
        context.drawImage(lightCanvas, positionStartLight.x, positionStartLight.y, lightCanvas.width, lightCanvas.height)

        return canvas
    }

}