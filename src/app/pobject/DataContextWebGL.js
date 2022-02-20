/**
 * @class {DataContext2D}
 */
export default class DataContextWebGL {

    /**
     * @param {number} unitId
     * @param {WebGLRenderingContext} context
     * @param {Vector} scale
     * @param {Size} scaleSize
     * @param {Camera} camera
     * @param {World} world
     * @param {Map<string, {buffer: WebGLBuffer, vertices: number[]}>} buffers
     * @param {WebGLTexture} texture
     * @param {{shaderProgram: WebGLProgram, locations: {uniform: {modelViewMatrix: WebGLUniformLocation,
     * projectionMatrix: WebGLUniformLocation}, attribute: {vertexPosition: GLint}}}} program
     */
    constructor(unitId, context, scale, scaleSize, camera, world, buffers,
                texture,
                program) {
        this.unitId = unitId
        this.context = context
        this.scale = scale
        this.scaleSize = scaleSize
        this.camera = camera
        this.world = world
        this.buffers = buffers
        this.texture = texture
        this.program = program
    }

}