import {CANVAS_CONTEXT_TYPE} from '../core/Constant.js'
import Vector from './Vector.js'
import Size from '../pobject/Size.js'
import {MODE} from '../constant/FilterMode.js'

export default class ImageHelper {

    /**
     * @param {OffscreenCanvas} canvas
     * @param {Size} size
     * @return {string}
     */
    static getDataURL(canvas, size) {
        const canvasEl = this.resizeCanvasBySize(canvas, size, false)
        return canvasEl.toDataURL('image/png')
    }

    /**
     * @param {OffscreenCanvas} canvas
     * @param {Size} size
     * @param {boolean} offscreen
     * @param {string|null} filter
     * @return {OffscreenCanvas}
     */
    static resizeCanvasBySize(canvas, size, offscreen = true, filter = null) {
        const {width: sizeWidth, height: sizeHeight} = size
        const isWidthGtHeight = canvas.width > canvas.height
        const coefResize = isWidthGtHeight ? sizeWidth / canvas.width : sizeHeight / canvas.height
        const width = isWidthGtHeight ? sizeWidth : canvas.width * coefResize
        const height = isWidthGtHeight ? canvas.height * coefResize : sizeHeight

        let canvasEl
        if (offscreen) {
            canvasEl = new OffscreenCanvas(width, height)
        } else {
            canvasEl = document.createElement('canvas')
            canvasEl.width = width
            canvasEl.height = height
        }
        const contextEl = canvasEl.getContext('2d')
        if (filter === MODE.NO_SMOOTHING) {
            contextEl.imageSmoothingEnabled = false
        }
        contextEl.drawImage(canvas, 0, 0, width, height)

        return canvasEl
    }

    /**
     * @param {OffscreenCanvas} canvas
     * @param {Vector} scale
     * @return {OffscreenCanvas}
     */
    static scaleCanvas(canvas, scale) {
        const {width, height} = canvas
        const canvasWidth = width * Math.abs(scale.getX())
        const canvasHeight = height * Math.abs(scale.getY())
        const canvasEl = new OffscreenCanvas(canvasWidth, canvasHeight)

        const contextEl = canvasEl.getContext(CANVAS_CONTEXT_TYPE)
        contextEl.translate(canvasWidth / 2, canvasHeight / 2)
        contextEl.scale(scale.getX(), scale.getY())
        contextEl.translate(-width / 2, -height / 2)
        contextEl.drawImage(canvas, 0, 0, width, height)

        return canvasEl
    }

    /**
     * @param {OffscreenCanvas} canvas
     * @param {Vector} pointA
     * @param {Vector} pointB
     * @param {Vector} scale
     * @return {OffscreenCanvas}
     */
    static cropCanvas(canvas, pointA, pointB, scale = null) {
        const width = pointB.getX() - pointA.getX()
        const height = pointB.getY() - pointA.getY()

        if (width > 0 && height > 0) {
            const canvasEl = new OffscreenCanvas(width, height)
            const contextEl = canvasEl.getContext(CANVAS_CONTEXT_TYPE)
            contextEl.drawImage(canvas,
                pointA.getX(), pointA.getY(),
                width, height,
                0, 0,
                width, height
            )
            if (scale) {
                return this.scaleCanvas(canvasEl, scale)
            } else {
                return canvasEl
            }
        }

        return null
    }

    /**
     * @param {OffscreenCanvas} canvas
     * @param {Size} size
     * @param {Vector} imageScale
     * @param {Vector} imagePosition
     * @param {Vector} minPosition
     * @param {Vector} maxPosition
     * @param {{pointA: {area: AREA, position: Vector}, pointB: {area: AREA, position: Vector}}} part
     * @return {OffscreenCanvas}
     */
    static generateImagePartRepeat(canvas, size, imageScale, imagePosition, minPosition, maxPosition, part) {
        const {pointA, pointB} = part

        const canvasCrop = this.cropCanvas(canvas, minPosition, maxPosition, imageScale)

        const repeatPointA = this.getImagePositionFromPoint(pointA, size, imageScale)
        const repeatPointB = this.getImagePositionFromPoint(pointB, size, imageScale)
        const sizePartRepeated = new Size({
            width: repeatPointB.getX() - repeatPointA.getX(),
            height: repeatPointB.getY() - repeatPointA.getY()
        })
        const canvasRepeat = canvasCrop ? new OffscreenCanvas(
            sizePartRepeated.getWidth(), sizePartRepeated.getHeight()) : null

        if (canvasRepeat) {
            const contextRepeat = canvasRepeat.getContext(CANVAS_CONTEXT_TYPE)
            contextRepeat.fillStyle = contextRepeat.createPattern(canvasCrop, 'repeat')
            contextRepeat.rect(0, 0, sizePartRepeated.getWidth(), sizePartRepeated.getHeight())
            contextRepeat.translate(imagePosition.getX(), imagePosition.getY())
            contextRepeat.fill()
            contextRepeat.translate(-imagePosition.getX(), -imagePosition.getY())
        }

        return canvasRepeat
    }

    /**
     * @param {{area: AREA, position: Vector}} point
     * @param {Size} size
     * @param {Vector} scale
     * @return {Vector}
     */
    static getImagePositionFromPoint(point, size, scale = new Vector({x: 1, y: 1})){
        const {area, position} = point
        let imagePosition = Vector.linearMultiply(position, scale)
        const isBottom = area & AREA.BOTTOM
        const isRight = area & AREA.RIGHT
        if(isBottom){
            imagePosition.setY(size.height - imagePosition.getY())
        }
        if(isRight){
            imagePosition.setX(size.width - imagePosition.getX())
        }
        return imagePosition
    }

    /**
     * @todo need refactoring
     * @param {OffscreenCanvas} canvas
     * @param {Size} size
     * @param {Vector} imageScale
     * @param {Vector} imagePosition
     * @param {Vector} imageRepeatAreaMin
     * @param {Vector} imageRepeatAreaMax
     * @param {string} filter
     * @return {OffscreenCanvas}
     */
    static generateImageRepeat(canvas, size, imageScale, imagePosition, imageRepeatAreaMin, imageRepeatAreaMax, filter) {
        const {width: canvasWidth, height: canvasHeight} = canvas
        const {width, height} = size

        const points = {
            A: {area: AREA.LEFT | AREA.TOP, position: new Vector()},
            B: {area: AREA.LEFT | AREA.TOP, position: new Vector({x: imageRepeatAreaMin.getX()})},
            C: {area: AREA.LEFT | AREA.TOP, position: new Vector({y: imageRepeatAreaMin.getY()})},
            D: {area: AREA.LEFT | AREA.TOP, position: imageRepeatAreaMin},
            E: {area: AREA.LEFT | AREA.BOTTOM, position: new Vector({y: imageRepeatAreaMax.getY()})},
            F: {area: AREA.LEFT | AREA.BOTTOM, position: new Vector({x: imageRepeatAreaMin.getX(), y: imageRepeatAreaMax.getY()})},
            G: {area: AREA.LEFT | AREA.BOTTOM, position: new Vector()},
            H: {area: AREA.LEFT | AREA.BOTTOM, position: new Vector({x: imageRepeatAreaMin.getX()})},
            I: {area: AREA.RIGHT | AREA.TOP, position: new Vector({x: imageRepeatAreaMax.getX()})},
            J: {area: AREA.RIGHT | AREA.TOP, position: new Vector({x: imageRepeatAreaMax.getX(), y: imageRepeatAreaMin.getY()})},
            K: {area: AREA.RIGHT | AREA.TOP, position: new Vector({y: imageRepeatAreaMin.getY()})},
            L: {area: AREA.RIGHT | AREA.BOTTOM, position: new Vector({x: imageRepeatAreaMax.getX(), y: imageRepeatAreaMax.getY()})},
            M: {area: AREA.RIGHT | AREA.BOTTOM, position: new Vector({y: imageRepeatAreaMax.getY()})},
            N: {area: AREA.RIGHT | AREA.BOTTOM, position: new Vector({x: imageRepeatAreaMax.getX()})},
            O: {area: AREA.RIGHT | AREA.BOTTOM, position: new Vector()}
        }

        const imageCanvasParts = {
            left: {
                repeat: true,
                pointA: points.C,
                pointB: points.F
            },
            right: {
                repeat: true,
                pointA: points.J,
                pointB: points.M
            },
            middle: {
                repeat: true,
                pointA: points.D,
                pointB: points.L
            },
            top: {
                repeat: true,
                pointA: points.B,
                pointB: points.J
            },
            bottom: {
                repeat: true,
                pointA: points.F,
                pointB: points.N
            },
            leftTop: {
                pointA: points.A,
                pointB: points.D
            },
            leftBottom: {
                pointA: points.E,
                pointB: points.H
            },
            rightTop: {
                pointA: points.I,
                pointB: points.K
            },
            rightBottom: {
                pointA: points.L,
                pointB: points.O
            }
        }

        const canvasEl = new OffscreenCanvas(width, height)
        const contextEl = canvasEl.getContext(CANVAS_CONTEXT_TYPE)
        if (filter === MODE.NO_SMOOTHING) {
            contextEl.imageSmoothingEnabled = false
        }
        for (const kPart in imageCanvasParts) {
            const part = imageCanvasParts[kPart]
            let partCanvas
            const createPointA = this.getImagePositionFromPoint(part.pointA,
                new Size({width: canvasWidth, height: canvasHeight}))
            const createPointB = this.getImagePositionFromPoint(part.pointB,
                new Size({width: canvasWidth, height: canvasHeight}))
            if (!part.repeat) {
                partCanvas = this.cropCanvas(canvas, createPointA, createPointB, imageScale)
            } else {
                partCanvas = this.generateImagePartRepeat(canvas, size, imageScale, imagePosition, createPointA, createPointB, part)
            }

            if (partCanvas) {
                const drawPointA = this.getImagePositionFromPoint(part.pointA, size, imageScale)
                contextEl.drawImage(partCanvas, drawPointA.getX(), drawPointA.getY(), partCanvas.width, partCanvas.height)
            }
        }

        return canvasEl
    }

    /**
     * @param {OffscreenCanvas} canvas
     * @param {string} filter
     * @return {OffscreenCanvas}
     */
    static copyCanvas(canvas, filter){
        const canvasCopy = new OffscreenCanvas(canvas.width, canvas.height)
        const contextCopy = canvasCopy.getContext(CANVAS_CONTEXT_TYPE)
        if (filter === MODE.NO_SMOOTHING) {
            contextCopy.imageSmoothingEnabled = false
        }
        contextCopy.drawImage(canvas, 0, 0, canvas.width, canvas.height)
        return canvasCopy
    }
}

export const AREA = {
    LEFT: 0b0001,
    RIGHT: 0b0010,
    TOP: 0b0100,
    BOTTOM: 0b1000
}