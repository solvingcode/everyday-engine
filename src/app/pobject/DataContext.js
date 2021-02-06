/**
 * @class {DataContext}
 */
export default class DataContext{

    /**
     * @param {Vector} center
     * @param {OffscreenCanvasRenderingContext2D} context
     * @param {Size} scaleSize
     * @param {Camera} camera
     */
    constructor(center, context, scaleSize, camera) {
        this.center = center
        this.context = context
        this.scaleSize = scaleSize
        this.camera = camera
    }

}