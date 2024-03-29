import LightPointComponent from '../component/internal/LightPointComponent.js'
import Maths from './Maths.js'
import MeshComponent from '../component/internal/MeshComponent.js'
import Vector from './Vector.js'
import TransformComponent from '../component/internal/TransformComponent.js'
import Color from './Color.js'
import GeometryHelper from './GeometryHelper.js'
import ImageHelper from './ImageHelper.js'
import Size from '../pobject/Size.js'
import Canvas from '../core/Canvas.js'

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
     * @return {Canvas}
     */
    static getPoint(unit, camera, positionToLight, sizeToLight, globalIntensity, globalColor) {
        //init properties
        const meshComponent = unit.getComponent(MeshComponent)
        const transformComponent = unit.getComponent(TransformComponent)
        const lightComponent = unit.getComponent(LightPointComponent)
        const outerAngle = Math.PI * 2 - Maths.fromDegree(lightComponent.getOuterAngle())
        const innerAngle = Math.PI * 2 - Maths.fromDegree(lightComponent.getInnerAngle())
        const outerRadius = lightComponent.getOuterRadius()
        const innerRadius = lightComponent.getInnerRadius()
        const lightColor = lightComponent.getColor()
        const lightIntensity = Math.max(lightComponent.getIntensity(), 0.01)
        const scaleSize = camera.toScaleSize(meshComponent.getSize())
        const center = new Vector({x: scaleSize.width / 2, y: scaleSize.height / 2})
        const sw = scaleSize.width * outerRadius / 100
        const radiusScale = Math.abs(sw / 2 - 1)
        const lightPosition = transformComponent.getPosition()
        const lightRotation = transformComponent.getRotation()
        const globalColorRgba = Color.hexToRgb(globalColor, globalIntensity)
        const lightColorRgba = Color.hexToRgb(lightColor, 1)

        //calculate position to put the light
        const positionStartLight = camera.toCameraScale(Vector.subtract(lightPosition, positionToLight))

        const canvas = new Canvas(sizeToLight.width, sizeToLight.height)
        const context = canvas.getContext('2d')

        const {width: largeWidth, height: largeHeight} = GeometryHelper.getLargestRectangle(lightRotation, scaleSize)
        const lightCanvas = new Canvas(largeWidth, largeHeight)
        const lightContext = lightCanvas.getContext('2d')
        lightContext.translate(largeWidth / 2, largeHeight / 2)
        lightContext.rotate(lightRotation)
        lightContext.translate(-center.x, -center.y)

        //calculate light boundaries
        const outerLightBounds = this.getLightBounds(center, outerAngle, radiusScale)
        const innerLightBounds = this.getLightBounds(center, innerAngle, radiusScale)

        //outer angle light
        this.drawOuterLightBounds(lightContext, outerLightBounds, radiusScale, outerAngle)
        this.drawOuterLight(lightContext, center, radiusScale, innerRadius, lightColorRgba, lightIntensity, globalColorRgba)

        //inner angle light
        this.drawInnerLight(lightContext, outerLightBounds, innerLightBounds, radiusScale)

        //put the light to start position of the light
        context.drawImage(lightCanvas, positionStartLight.x, positionStartLight.y, lightCanvas.width, lightCanvas.height)

        return canvas
    }

    /**
     * @param {Vector} center
     * @param {number} angle
     * @param {number} radius
     * @return {{first: [Vector, Vector], second: [Vector, Vector]}}
     */
    static getLightBounds(center, angle, radius) {
        const boundFirst = [center, new Vector({
            x: center.x + Math.cos(angle / 2) * radius,
            y: center.y - Math.cos(Math.PI / 2 - angle / 2) * radius
        })]
        const boundSecond = [center, new Vector({
            x: center.x + Math.cos(angle / 2) * radius,
            y: center.y + Math.cos(Math.PI / 2 - angle / 2) * radius
        })]
        return {first: boundFirst, second: boundSecond}
    }

    /**
     * @param {OffscreenCanvasRenderingContext2D} context
     * @param {{first: [Vector, Vector], second: [Vector, Vector]}} lightBounds
     * @param {number} radius
     * @param {number} angle
     */
    static drawOuterLightBounds(context, lightBounds, radius, angle) {
        context.beginPath()
        context.moveTo(lightBounds.first[0].x, lightBounds.first[0].y)
        context.lineTo(lightBounds.first[1].x, lightBounds.first[1].y)
        context.moveTo(lightBounds.second[0].x, lightBounds.second[0].y)
        context.lineTo(lightBounds.second[1].x, lightBounds.second[1].y)
        context.moveTo(lightBounds.first[0].x, lightBounds.first[0].y)
        context.arc(lightBounds.first[0].x, lightBounds.first[0].y, radius, angle / 2, Math.PI * 2 - angle / 2)
        context.closePath()
    }

    /**
     * @param {OffscreenCanvasRenderingContext2D|Path2D} context
     * @param {[Vector, Vector]} outerLightBound
     * @param {[Vector, Vector]} innerLightBound
     * @param {number} radius
     * @param {boolean} drawArc
     */
    static drawInnerLightBounds(context, outerLightBound, innerLightBound, radius, drawArc = true) {
        if (typeof OffscreenCanvasRenderingContext2D !== 'undefined' && context instanceof OffscreenCanvasRenderingContext2D) {
            context.beginPath()
        }
        if (!drawArc) {
            context.moveTo(outerLightBound[0].x, outerLightBound[0].y)
            context.lineTo(outerLightBound[1].x, outerLightBound[1].y)
            context.moveTo(innerLightBound[0].x, innerLightBound[0].y)
            context.lineTo(innerLightBound[1].x, innerLightBound[1].y)
        } else {
            const normalOuterLightBound = Vector.subtract(outerLightBound[1], outerLightBound[0])
            const normalInnerLightBound = Vector.subtract(innerLightBound[1], innerLightBound[0])
            const angleBounds = Vector.angle(normalOuterLightBound, normalInnerLightBound)
            const angle = Vector.angle(new Vector(), normalInnerLightBound)
            const angleA = Math.PI * 2 + angle
            const angleB = angleA - angleBounds
            const startAngle = Math.sign(angleBounds) > 0 ? angleB : angleA
            const endAngle = Math.sign(angleBounds) > 0 ? angleA : angleB
            context.moveTo(outerLightBound[0].x, outerLightBound[0].y)
            context.arc(outerLightBound[0].x, outerLightBound[0].y, radius, startAngle, endAngle)
        }
        if (typeof OffscreenCanvasRenderingContext2D !== 'undefined' && context instanceof OffscreenCanvasRenderingContext2D) {
            context.closePath()
        }
    }

    /**
     * @param {[Vector, Vector]} line1
     * @param {[Vector, Vector]} line2
     * @param {boolean} reverse
     * @return {[Vector, Vector]}
     */
    static getNormalLightLine(line1, line2, reverse = false) {
        const middleLine1 = Vector.divide(Vector.add(line1[0], line1[1]), 2)
        const middleLine2 = Vector.divide(Vector.add(line2[0], line2[1]), 2)
        const distance = Math.sqrt(Math.pow(middleLine2.x - middleLine1.x, 2) + Math.pow(middleLine2.y - middleLine1.y, 2))
        const angle = Math.atan2(line1[1].y - line1[0].y, line1[1].x - line1[0].x)
        return [
            middleLine1,
            new Vector({
                x: middleLine1.x + Math.sin(angle) * distance * (reverse ? -1 : 1),
                y: middleLine1.y - Math.cos(angle) * distance * (reverse ? -1 : 1)
            })
        ]
    }

    /**
     * @param {OffscreenCanvasRenderingContext2D} context
     * @param {Vector} center
     * @param {number} radius
     * @param {number} innerRadius
     * @param {string} lightColor
     * @param {number} lightIntensity
     * @param {string} darkColor
     * @return {undefined}
     */
    static drawOuterLight(context, center, radius, innerRadius, lightColor, lightIntensity, darkColor) {
        const intensityLight = Maths.getIntensity(lightIntensity)
        const distanceLight = Maths.fromInterval([0, 1000], [0, 1], intensityLight)
        const gradientOuterLight = context.createRadialGradient(
            center.x, center.y, 0, center.x, center.y, radius)
        gradientOuterLight.addColorStop(0, lightColor)
        gradientOuterLight.addColorStop(innerRadius / 100, lightColor)
        gradientOuterLight.addColorStop(1, darkColor)
        context.fillStyle = gradientOuterLight
        context.fill()
    }

    /**
     * @param {OffscreenCanvasRenderingContext2D} context
     * @param {{first: [Vector, Vector], second: [Vector, Vector]}} outerLightBounds
     * @param {{first: [Vector, Vector], second: [Vector, Vector]}} innerLightBounds
     * @param {number} radius
     * @param {boolean} debug
     */
    static drawInnerLight(context, outerLightBounds, innerLightBounds, radius, debug = false) {
        this.drawInnerLightSide(context, outerLightBounds.first, innerLightBounds.first, radius, false, debug)
        this.drawInnerLightSide(context, outerLightBounds.second, innerLightBounds.second, radius, true, debug)
    }

    /**
     * @param {OffscreenCanvasRenderingContext2D} context
     * @param {[Vector, Vector]} outerLightBound
     * @param {[Vector, Vector]} innerLightBound
     * @param {number} radius
     * @param {boolean} reverse
     * @param {boolean} debug
     */
    static drawInnerLightSide(context, outerLightBound, innerLightBound, radius, reverse, debug = false) {
        const normalLightLine = this.getNormalLightLine(outerLightBound, innerLightBound, reverse)
        const gradientInnerLightOne = context.createLinearGradient(
            normalLightLine[0].x, normalLightLine[0].y, normalLightLine[1].x, normalLightLine[1].y)
        gradientInnerLightOne.addColorStop(0, '#FFFFFF')
        gradientInnerLightOne.addColorStop(1, 'rgba(0, 0, 0, 0)')

        const pathLight = new Path2D()
        this.drawInnerLightBounds(pathLight, outerLightBound, innerLightBound, radius)

        context.fillStyle = gradientInnerLightOne
        const globalCompositeOperation = context.globalCompositeOperation
        context.globalCompositeOperation = 'destination-out'
        context.fill(pathLight)
        context.globalCompositeOperation = globalCompositeOperation
        if (debug) {
            const debugPath = new Path2D()
            debugPath.moveTo(normalLightLine[0].x, normalLightLine[0].y)
            debugPath.lineTo(normalLightLine[1].x, normalLightLine[1].y)
            context.strokeStyle = '#ff0000'
            context.stroke(debugPath)
        }
    }

    /**
     * @param {World} world
     * @param {Camera} camera
     * @param {number} globalIntensity
     * @param {string} globalColorRgba
     * @param {string} globalColor
     * @return {CanvasRenderingContext2D}
     */
    static generateLightContext(world, camera, globalIntensity, globalColorRgba, globalColor) {
        const lightUnits = world.getUnitManager().findUnitsByComponentClasses([LightPointComponent])

        //get the start/end position to combine lights
        const startContainerLight = lightUnits.reduce((minPosition, unitLight) => {
            const lightPosition = unitLight.getComponent(TransformComponent).getPosition()
            if (!minPosition) {
                return lightPosition
            }
            return new Vector({
                x: lightPosition.getX() < minPosition.getX() ? lightPosition.getX() : minPosition.getX(),
                y: lightPosition.getY() < minPosition.getY() ? lightPosition.getY() : minPosition.getY()
            })
        }, null)
        const endContainerLight = lightUnits.reduce((maxPosition, unitLight) => {
            const lightPosition = unitLight.getComponent(TransformComponent).getPosition()
            const lightSize = Vector.fromSize(unitLight.getComponent(MeshComponent).getSize())
            if (!maxPosition) {
                return Vector.add(lightSize, lightPosition)
            }
            return new Vector({
                x: lightPosition.getX() + lightSize.getX() > maxPosition.getX() ? lightPosition.getX() + lightSize.getX() : maxPosition.getX(),
                y: lightPosition.getY() + lightSize.getY() > maxPosition.getY() ? lightPosition.getY() + lightSize.getY() : maxPosition.getY()
            })
        }, null)
        const size = new Size({
            width: endContainerLight.getX() - startContainerLight.getX(),
            height: endContainerLight.getY() - startContainerLight.getY()
        })

        const canvasLightContainer = new Canvas(size.width, size.height)
        const contextLightContainer = canvasLightContainer.getContext('2d')
        contextLightContainer.fillStyle = globalColorRgba
        contextLightContainer.fillRect(0, 0, size.width, size.height)

        const canvasLights = new Canvas(size.width, size.height)
        const contextLights = canvasLights.getContext('2d')
        contextLights.globalCompositeOperation = 'lighter'
        lightUnits.forEach(unitLight => {
            const lightCanvas = LightHelper.getPoint(unitLight, camera, startContainerLight, size, globalIntensity, globalColor)
            contextLights.drawImage(lightCanvas, 0, 0, size.width, size.height)
        })

        contextLightContainer.drawImage(canvasLights, 0, 0, size.width, size.height)
        return contextLightContainer
    }

    /**
     * @param {CanvasRenderingContext2D} context
     * @param {World} world
     * @param {string} globalColorRgba
     * @param {number} globalIntensity
     * @param {string} globalColor
     * @param {TransformComponent} transformComponent
     * @param {MeshComponent} meshComponent
     * @param {Camera} camera
     * @param {Size} size
     * @return {CanvasRenderingContext2D}
     */
    static getLightContext(context, world, globalColorRgba, globalIntensity,
                           globalColor, transformComponent, meshComponent,
                           camera, size) {
        //create global light
        const canvasLightContainer = new Canvas(size.width, size.height)
        const contextLightContainer = canvasLightContainer.getContext('2d')
        contextLightContainer.fillStyle = globalColorRgba
        contextLightContainer.fillRect(0, 0, size.width, size.height)

        //create and merge lights
        const canvasLights = new Canvas(size.width, size.height)
        const contextLights = canvasLights.getContext('2d')
        contextLights.globalCompositeOperation = 'lighter'
        world.getUnitManager().findUnitsByComponentClasses([LightPointComponent]).forEach(unitLight => {
            const lightCanvas = LightHelper.getPoint(unitLight, camera, transformComponent.getPosition(), size, globalIntensity, globalColor)
            contextLights.drawImage(lightCanvas, 0, 0, size.width, size.height)
        })

        //add lights to the global light
        contextLightContainer.drawImage(canvasLights, 0, 0, size.width, size.height)

        //cut the generated lights to fit the object
        const lightCanvasSourceAtop = ImageHelper.copyCanvas(context.canvas, meshComponent.getFilter())
        const lightContextSourceAtop = lightCanvasSourceAtop.getContext('2d')
        lightContextSourceAtop.globalCompositeOperation = 'source-atop'
        lightContextSourceAtop.drawImage(canvasLightContainer, 0, 0, size.width, size.height)

        return lightContextSourceAtop
    }
}