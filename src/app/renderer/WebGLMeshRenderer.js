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
    drawMesh(mesh, position) {
        const {program, buffer} = mesh
        const {attributeParams, bufferParams, shaderProgram, locations} = program

        const fieldOfView = 45 * Math.PI / 180
        const aspect = objectContext.canvas.clientWidth / objectContext.canvas.clientHeight
        const zNear = 0.1
        const zFar = 100.0
        const projectionMatrix = mat4.create()

        mat4.perspective(projectionMatrix, fieldOfView, aspect, zNear, zFar)
        const modelViewMatrix = mat4.create()
        mat4.translate(modelViewMatrix, modelViewMatrix, [0.0, 0.0, -2.0])

        objectContext.bindBuffer(objectContext.ARRAY_BUFFER, buffer)
        objectContext.vertexAttribPointer(
            locations.attribute.vertexPosition, attributeParams.nbIterations, attributeParams.type,
            attributeParams.normalize, attributeParams.stride, attributeParams.offset)
        objectContext.enableVertexAttribArray(locations.attribute.vertexPosition)
        objectContext.useProgram(shaderProgram)

        objectContext.uniformMatrix4fv(
            locations.uniform.projectionMatrix,
            false,
            projectionMatrix)
        objectContext.uniformMatrix4fv(
            locations.uniform.modelViewMatrix,
            false,
            modelViewMatrix)

        objectContext.drawArrays(objectContext.TRIANGLE_STRIP, bufferParams.offset, bufferParams.vertexCount)
    }
}