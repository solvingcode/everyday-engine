import {CANVAS_CONTEXT_TYPE} from '../core/Constant.js'
import Vector from './Vector.js'
import Size from '../pobject/Size.js'

/**
 * @class {ImageHelper}
 */
class ImageHelper {

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
     * @return {OffscreenCanvas}
     */
    static resizeCanvasBySize(canvas, size, offscreen = true) {
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
        const contextEl = canvasEl.getContext(CANVAS_CONTEXT_TYPE)
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
     * @return {OffscreenCanvas}
     */
    static cropCanvas(canvas, pointA, pointB) {
        const width = pointB.getX() - pointA.getX()
        const height = pointB.getY() - pointA.getY()

        if(width > 0 && height > 0){
            const canvasEl = new OffscreenCanvas(width, height)
            const contextEl = canvasEl.getContext(CANVAS_CONTEXT_TYPE)
            contextEl.drawImage(canvas,
                pointA.getX(), pointA.getY(),
                width, height,
                0, 0,
                width, height
            )

            return canvasEl
        }

        return null
    }

    /**
     * @todo need refactoring
     * @param {OffscreenCanvas} canvas
     * @param {Size} size
     * @param {Vector} imageScale
     * @param {Vector} imagePosition
     * @param {Vector} imageRepeatAreaMin
     * @param {Vector} imageRepeatAreaMax
     * @return {OffscreenCanvas}
     */
    static generateImageRepeat(canvas, size, imageScale, imagePosition, imageRepeatAreaMin, imageRepeatAreaMax) {
        const {width: canvasWidth, height: canvasHeight} = canvas
        const {width, height} = size

        //left side image
        const leftSideCanvasCrop = this.cropCanvas(canvas,
            new Vector(),
            new Vector({x: imageRepeatAreaMin.getX(), y: canvasHeight}))
        const leftSideCanvas = leftSideCanvasCrop ? ImageHelper.scaleCanvas(leftSideCanvasCrop, imageScale) : null

        //middle side image
        const middleSideCanvasCrop = this.cropCanvas(canvas,
            new Vector({x: imageRepeatAreaMin.getX()}),
            new Vector({x: canvasWidth - imageRepeatAreaMax.getX(), y: canvasHeight}))
        const middleSideCanvas = ImageHelper.scaleCanvas(middleSideCanvasCrop, imageScale)
        const sizeMiddlePartRepeated = new Size({
            width: width - (imageRepeatAreaMin.getX() + imageRepeatAreaMax.getX()),
            height: height
        })
        const canvasMiddleRepeat = middleSideCanvas ? new OffscreenCanvas(
            sizeMiddlePartRepeated.getWidth(), sizeMiddlePartRepeated.getHeight()) : null
        if(canvasMiddleRepeat){
            const contextMiddleRepeat = canvasMiddleRepeat.getContext(CANVAS_CONTEXT_TYPE)
            contextMiddleRepeat.fillStyle = contextMiddleRepeat.createPattern(middleSideCanvas, 'repeat')
            contextMiddleRepeat.rect(0, 0, sizeMiddlePartRepeated.getWidth(), sizeMiddlePartRepeated.getHeight())
            contextMiddleRepeat.translate(imagePosition.getX(), imagePosition.getY())
            contextMiddleRepeat.fill()
            contextMiddleRepeat.translate(-imagePosition.getX(), -imagePosition.getY())
        }

        //right side image
        const rightSideCanvasCrop = this.cropCanvas(canvas,
            new Vector({x: canvasWidth - imageRepeatAreaMax.getX()}),
            new Vector({x: canvasWidth, y: canvasHeight}))
        const rightSideCanvas = rightSideCanvasCrop ? ImageHelper.scaleCanvas(rightSideCanvasCrop, imageScale): null

        //Combine left/middle/right sides
        const canvasEl = new OffscreenCanvas(width, height)
        const contextEl = canvasEl.getContext(CANVAS_CONTEXT_TYPE)
        if(leftSideCanvas){
            contextEl.drawImage(leftSideCanvas,
                0, 0, leftSideCanvas.width, leftSideCanvas.height)
        }
        if(canvasMiddleRepeat){
            contextEl.drawImage(canvasMiddleRepeat,
                imageRepeatAreaMin.getX() * imageScale.getX(), 0, canvasMiddleRepeat.width, canvasMiddleRepeat.height)
        }
        if(rightSideCanvas){
            contextEl.drawImage(rightSideCanvas,
                width - imageRepeatAreaMax.getX() * imageScale.getX(), 0, rightSideCanvas.width, rightSideCanvas.height)
        }

        return canvasEl
    }
}

export default ImageHelper