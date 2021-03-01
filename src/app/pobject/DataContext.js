/**
 * @class {DataContext}
 */
export default class DataContext{

    /**
     * @param {Vector} center
     * @param {OffscreenCanvasRenderingContext2D} context
     * @param {Size} scaleSize
     * @param {Camera} camera
     * @param {World} world
     */
    constructor(center, context, scaleSize, camera, world) {
        this.center = center
        this.context = context
        this.scaleSize = scaleSize
        this.camera = camera
        this.world = world
    }

}