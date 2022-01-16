/**
 * @class {DataContext}
 */
export default class DataContext{

    /**
     * @param {number} unitId
     * @param {Vector} center
     * @param {CanvasRenderingContext2D} context
     * @param {Size} scaleSize
     * @param {Camera} camera
     * @param {World} world
     */
    constructor(unitId, center, context, scaleSize, camera, world) {
        this.unitId = unitId
        this.center = center
        this.context = context
        this.scaleSize = scaleSize
        this.camera = camera
        this.world = world
    }

}