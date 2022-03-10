import {objectContext} from '../core/Context.js'
import MeshRenderer from './MeshRenderer.js'
import Color from '../utils/Color.js'

export default class WebGLMeshRenderer extends MeshRenderer {

    initCanvas() {
    }

    /**
     * @override
     */
    clear() {
        objectContext.clearDepth(1.0)
        objectContext.enable(objectContext.DEPTH_TEST)
        objectContext.depthFunc(objectContext.LEQUAL)
        objectContext.viewport(0, 0, objectContext.canvas.width, objectContext.canvas.height)
        objectContext.enable(objectContext.BLEND)
        objectContext.blendFuncSeparate(objectContext.SRC_ALPHA, objectContext.ONE_MINUS_SRC_ALPHA, objectContext.ONE, objectContext.ONE_MINUS_SRC_ALPHA)
        objectContext.clear(objectContext.COLOR_BUFFER_BIT | objectContext.DEPTH_BUFFER_BIT)
    }

    /**
     * @override
     */
    drawMesh(mesh, data) {
        const {program, buffers, texture, style, params, center, centerContext} = mesh
        const {shaderProgram, locations, mode} = program
        const {uniform, attribute} = locations

        this.setupBuffer(buffers, attribute, params)
        objectContext.useProgram(shaderProgram)
        this.setupTransform(uniform, {...data, ...{center, centerContext}})
        this.setupStyle(uniform, style)

        this.setupTexture(uniform, texture)
        objectContext.bindBuffer(objectContext.ARRAY_BUFFER, buffers.position.buffer)
        objectContext.drawArrays(mode, params.position.buffer.offset, params.position.buffer.vertexCount)
    }

    /**
     * @param {Map<string, {buffer: WebGLBuffer, vertices: number[]}>} buffers
     * @param {*} attribute
     * @param {*} params
     */
    setupBuffer(buffers, attribute, params) {
        for (const iBuffer in buffers) {
            const bufferData = buffers[iBuffer]
            if (bufferData && bufferData.buffer) {
                const attributeBuffer = attribute[iBuffer]
                const attributeParam = params[iBuffer].attribute
                if (attributeBuffer >= 0) {
                    objectContext.bindBuffer(objectContext.ARRAY_BUFFER, bufferData.buffer)
                    objectContext.vertexAttribPointer(
                        attributeBuffer, attributeParam.nbIterations, attributeParam.type,
                        attributeParam.normalize, attributeParam.stride, attributeParam.offset)
                    objectContext.enableVertexAttribArray(attributeBuffer)
                }
            }
        }
    }

    /**
     * @param {*} uniform
     * @param {{position: Vector, scale: Vector, rotation: Vector, center: Vector, centerContext: Vector}} data
     */
    setupTransform(uniform, {position, scale, rotation, center, centerContext}) {
        objectContext.uniform2f(uniform.uResolution, objectContext.canvas.width, objectContext.canvas.height)
        objectContext.uniform2f(uniform.uTranslation, position.x, position.y)
        objectContext.uniform2f(uniform.uCenter, center.x, center.y)
        objectContext.uniform2f(uniform.uCenterContext, centerContext.x, centerContext.y)
        objectContext.uniform2f(uniform.uScale, scale.x, scale.y)
        objectContext.uniform2f(uniform.uRotation, rotation.x, rotation.y)
    }

    /**
     * @param {*} uniform
     * @param {WebGLTexture} texture
     */
    setupTexture(uniform, texture) {
        if (texture) {
            objectContext.activeTexture(objectContext.TEXTURE0)
            objectContext.bindTexture(objectContext.TEXTURE_2D, texture)
            objectContext.uniform1i(uniform.uSampler, 0)
        } else {
            objectContext.bindTexture(objectContext.TEXTURE_2D, null)
        }
    }

    /**
     * @param {*} uniform
     * @param {{lineWidth: number}} style
     */
    setupStyle(uniform, style) {
        const {lineWidth, borderColor} = style
        let colors = {x: 1.0, y: 1.0, z: 1.0, w: 1.0}
        if (borderColor) {
            colors = Color.rgbaToCoords(borderColor)
        }
        objectContext.lineWidth(lineWidth)
        objectContext.uniform4f(uniform.uColor, colors.x, colors.y, colors.z, colors.w)
    }
}