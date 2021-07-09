import {CANVAS_CONTEXT_TYPE} from '../core/Constant.js'

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
    static resizeCanvasBySize(canvas, size, offscreen = true){
        const {width: sizeWidth, height: sizeHeight} = size
        const isWidthGtHeight = canvas.width > canvas.height
        const coefResize = isWidthGtHeight ? sizeWidth / canvas.width : sizeHeight / canvas.height
        const width = isWidthGtHeight ? sizeWidth : canvas.width * coefResize
        const height = isWidthGtHeight ? canvas.height * coefResize : sizeHeight

        let canvasEl
        if(offscreen){
            canvasEl = new OffscreenCanvas(width, height)
        }else{
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
    static scaleCanvas(canvas, scale){
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

}

export default ImageHelper