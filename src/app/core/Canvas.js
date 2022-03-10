export default class Canvas {
    /**
     * @param {number} width
     * @param {number} height
     * @return {OffscreenCanvas|HTMLCanvasElement}
     */
    constructor(width, height) {
        if (typeof OffscreenCanvasRenderingContext2D !== 'undefined') {
            return new OffscreenCanvas(width, height)
        } else {
            const canvas = document.createElement('canvas')
            canvas.width = width
            canvas.height = height
            return canvas
        }
    }
}