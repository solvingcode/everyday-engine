define(function(){

    /**
     * @class {ImageHelper}
     */
    class ImageHelper{

        /**
         * @param {OffscreenCanvas} canvas
         * @param {Size} size
         * @return {string}
         */
        static getDataURL(canvas, size){
            const {width: sizeWidth, height: sizeHeight} = size
            const isWidthGtHeight = canvas.width > canvas.height
            const coefResize = isWidthGtHeight ? sizeWidth / canvas.width : sizeHeight / canvas.height
            const width = isWidthGtHeight ? sizeWidth : canvas.width * coefResize
            const height = isWidthGtHeight ? canvas.height * coefResize : sizeHeight

            const canvasEl = document.createElement('canvas')
            canvasEl.width = width
            canvasEl.height = height

            const contextEl = canvasEl.getContext(CANVAS_CONTEXT_TYPE)
            contextEl.drawImage(canvas, 0, 0, width, height)

            const dataUrl = canvasEl.toDataURL('image/png')
            canvasEl.remove()

            return dataUrl
        }

    }

    export default ImageHelper

})