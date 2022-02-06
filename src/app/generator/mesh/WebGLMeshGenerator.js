import MeshGenerator from './MeshGenerator.js'
import ShaderHelper from '../../utils/ShaderHelper.js'
import {objectContext} from '../../core/Context.js'
import DataContextWebGL from '../../pobject/DataContextWebGL.js'

export default class WebGLMeshGenerator extends MeshGenerator {

    startContext(unitId, meshComponent, transformComponent, world, camera) {
        const scale = transformComponent.getScale()
        const buffer = objectContext.createBuffer()
        const program = this.initProgram(objectContext)
        objectContext.bindBuffer(objectContext.ARRAY_BUFFER, buffer)
        return new DataContextWebGL(unitId, objectContext, scale, camera, world, buffer, program)
    }

    closeContext(meshComponent, transformComponent, dataContext) {
        const {unitId, world, program, buffer} = dataContext
        world.getMeshManager().set(unitId, {program, buffer})
        return true
    }

    /**
     * @param {WebGLRenderingContext} context
     * @return {{shaderProgram: WebGLProgram, locations: {uniform: {projectionMatrix: WebGLUniformLocation,
     * modelViewMatrix: WebGLUniformLocation}, attribute: {vertexPosition: GLint}},
     * bufferParams: {offset: number, vertexCount: number}, attributeParams: {offset: number, nbIterations: number,
     * normalize: boolean, type: GLenum, stride: number}}}
     */
    initProgram(context) {
        const vsSource = `
            attribute vec4 aVertexPosition;

            uniform mat4 uModelViewMatrix;
            uniform mat4 uProjectionMatrix;
        
            void main() {
              gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
            }
        `
        const fsSource = `
            void main() {
              gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
            }
        `
        const shaderProgram = ShaderHelper.initShaderProgram(context, vsSource, fsSource)
        return {
            shaderProgram,
            locations: {
                attribute: {
                    vertexPosition: context.getAttribLocation(shaderProgram, 'aVertexPosition')
                },
                uniform: {
                    projectionMatrix: context.getUniformLocation(shaderProgram, 'uProjectionMatrix'),
                    modelViewMatrix: context.getUniformLocation(shaderProgram, 'uModelViewMatrix')
                }
            },
            attributeParams: {
                nbIterations: 2,
                type: context.FLOAT,
                normalize: false,
                stride: 0,
                offset: 0
            },
            bufferParams: {
                offset: 0,
                vertexCount: 4
            }
        }
    }

}