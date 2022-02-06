/**
 * @class {DataContext2D}
 */
export default class DataContextWebGL {

    /**
     * @param {number} unitId
     * @param {WebGLRenderingContext} context
     * @param {Vector} scale
     * @param {Camera} camera
     * @param {World} world
     * @param {WebGLBuffer} buffer
     * @param {{shaderProgram: WebGLProgram, locations: {uniform: {modelViewMatrix: WebGLUniformLocation,
     * projectionMatrix: WebGLUniformLocation}, attribute: {vertexPosition: GLint}}}} program
     */
    constructor(unitId, context, scale, camera, world, buffer,
                program) {
        this.unitId = unitId
        this.context = context
        this.scale = scale
        this.camera = camera
        this.world = world
        this.buffer = buffer
        this.program = program
    }

}