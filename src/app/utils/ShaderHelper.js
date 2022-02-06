import SystemError from '../exception/type/SystemError.js'

export default class ShaderHelper {

    /**
     * @param {WebGLRenderingContext} context
     * @param {string} vsSource
     * @param {string} fsSource
     */
    static initShaderProgram(context, vsSource, fsSource) {
        const vertexShader = this.loadShader(context, context.VERTEX_SHADER, vsSource)
        const fragmentShader = this.loadShader(context, context.FRAGMENT_SHADER, fsSource)

        const shaderProgram = context.createProgram()
        context.attachShader(shaderProgram, vertexShader)
        context.attachShader(shaderProgram, fragmentShader)
        context.linkProgram(shaderProgram)

        if (!context.getProgramParameter(shaderProgram, context.LINK_STATUS)) {
            throw new SystemError(`Error when initializing the shader program ${context.getProgramInfoLog(shaderProgram)}`)
        }

        return shaderProgram
    }

    /**
     * @param {WebGLRenderingContext} context
     * @param {GLenum} type
     * @param {string} source
     * @return {WebGLShader}
     */
    static loadShader(context, type, source) {
        const shader = context.createShader(type)
        context.shaderSource(shader, source)
        context.compileShader(shader)
        if (!context.getShaderParameter(shader, context.COMPILE_STATUS)) {
            context.deleteShader(shader)
            throw new SystemError(`Error when initializing the shader program ${context.getShaderInfoLog(shader)}`)
        }
        return shader
    }
}