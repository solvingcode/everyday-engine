export default class CanvasHelper {

    /**
     * @param {CanvasRenderingContext2D} context
     * @param {number} x
     * @param {number} y
     * @param {number} width
     * @param {number} height
     * @param {[number, number, number, number]} radiusCorners
     */
    static roundRect(context, x, y, width, height, radiusCorners) {
        context.beginPath()
        context.moveTo(x + radiusCorners[0], y)
        context.arcTo(x + width, y, x + width, y + height, radiusCorners[1])
        context.arcTo(x + width, y + height, x, y + height, radiusCorners[2])
        context.arcTo(x, y + height, x, y, radiusCorners[3])
        context.arcTo(x, y, x + width, y, radiusCorners[0])
        context.closePath()
    }

}