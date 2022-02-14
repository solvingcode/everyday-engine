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
        objectContext.clear(objectContext.COLOR_BUFFER_BIT | objectContext.DEPTH_BUFFER_BIT)
    }

    /**
     * @override
     */
    drawMesh(mesh, data) {
        const {program, buffers, texture, style} = mesh
        const {attributeParams, bufferParams, shaderProgram, locations, mode} = program
        const {uniform, attribute} = locations

        this.setupBuffer(buffers, attribute, attributeParams)
        objectContext.useProgram(shaderProgram)
        this.setupTransform(uniform, data)
        this.setupTexture(uniform, texture)
        this.setupStyle(uniform, style)

        objectContext.drawArrays(mode, bufferParams.offset, bufferParams.vertexCount)
    }

    /**
     * @param {WebGLBuffer[]} buffers
     * @param {*} attribute
     * @param {*} params
     */
    setupBuffer(buffers, attribute, params) {
        for (const iBuffer in buffers) {
            const buffer = buffers[iBuffer]
            if (buffer) {
                const attributeBuffer = attribute[iBuffer]
                objectContext.bindBuffer(objectContext.ARRAY_BUFFER, buffer)
                objectContext.vertexAttribPointer(
                    attributeBuffer, params.nbIterations, params.type,
                    params.normalize, params.stride, params.offset)
                objectContext.enableVertexAttribArray(attributeBuffer)
            }
        }
    }

    /**
     * @param {*} uniform
     * @param {{position: Vector, scale: Vector, rotation: Vector}} data
     */
    setupTransform(uniform, {position, scale, rotation}) {
        objectContext.uniform2f(uniform.uResolution, objectContext.canvas.width, objectContext.canvas.height)
        objectContext.uniform2f(uniform.uTranslation, position.x, position.y)
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