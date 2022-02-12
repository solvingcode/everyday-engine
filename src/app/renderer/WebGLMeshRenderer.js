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
        const {program, buffer} = mesh
        const {attributeParams, bufferParams, shaderProgram, locations} = program
        const {uniform, attribute} = locations
        const {position, scale, rotation} = data

        objectContext.bindBuffer(objectContext.ARRAY_BUFFER, buffer)
        objectContext.useProgram(shaderProgram)
        objectContext.enableVertexAttribArray(attribute.vertexPosition)

        objectContext.vertexAttribPointer(
            attribute.position, attributeParams.nbIterations, attributeParams.type,
            attributeParams.normalize, attributeParams.stride, attributeParams.offset)
        objectContext.uniform2f(uniform.uResolution, objectContext.canvas.width, objectContext.canvas.height)
        objectContext.uniform2f(uniform.uTranslation, position.x, position.y)
        objectContext.uniform2f(uniform.uScale, scale.x, scale.y)
        objectContext.uniform2f(uniform.uRotation, rotation.x, rotation.y)

        objectContext.drawArrays(objectContext.LINE_LOOP, bufferParams.offset, bufferParams.vertexCount)
        objectContext.lineWidth(1);
    }
}