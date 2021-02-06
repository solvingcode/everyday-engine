/**
 * @class {DataContext}
 */
export default class DataContext{

    /**
     * @param {Vector} center
     * @param {OffscreenCanvasRenderingContext2D} context
     * @param {Size} scaleSize
     */
    constructor(center, context, scaleSize) {
        this.center = center
        this.context = context
        this.scaleSize = scaleSize
    }

}