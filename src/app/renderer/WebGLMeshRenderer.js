import {objectContext} from '../core/Context.js'
import MeshRenderer from './MeshRenderer.js'

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
        const {program, buffers, texture} = mesh
        const {attributeParams, bufferParams, shaderProgram, locations, mode} = program
        const {uniform, attribute} = locations
        const {position, scale, rotation} = data

        for (const iBuffer in buffers) {
            const buffer = buffers[iBuffer]
            if (buffer) {
                const attributeBuffer = attribute[iBuffer]
                objectContext.bindBuffer(objectContext.ARRAY_BUFFER, buffer)
                objectContext.vertexAttribPointer(
                    attributeBuffer, attributeParams.nbIterations, attributeParams.type,
                    attributeParams.normalize, attributeParams.stride, attributeParams.offset)
                objectContext.enableVertexAttribArray(attributeBuffer)
            }
        }

        objectContext.useProgram(shaderProgram)

        objectContext.uniform2f(uniform.uResolution, objectContext.canvas.width, objectContext.canvas.height)
        objectContext.uniform2f(uniform.uTranslation, position.x, position.y)
        objectContext.uniform2f(uniform.uScale, scale.x, scale.y)
        objectContext.uniform2f(uniform.uRotation, rotation.x, rotation.y)
        objectContext.uniform4f(uniform.uColor, 1.0, 1.0, 1.0, 1.0)
        if (texture) {
            objectContext.activeTexture(objectContext.TEXTURE0)
            objectContext.bindTexture(objectContext.TEXTURE_2D, texture)
            objectContext.uniform1i(uniform.uSampler, 0)
        } else {
            objectContext.bindTexture(objectContext.TEXTURE_2D, null)
        }

        objectContext.drawArrays(mode, bufferParams.offset, bufferParams.vertexCount)
    }
}