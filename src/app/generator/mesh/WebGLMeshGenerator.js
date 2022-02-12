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
     * @return {{shaderProgram: WebGLProgram, locations: {uniform: {uScale: WebGLUniformLocation,
     * uResolution: WebGLUniformLocation, uTranslation: WebGLUniformLocation, uRotation: WebGLUniformLocation},
     * attribute: {position: GLint}}, bufferParams: {offset: number, vertexCount: number},
     * attributeParams: {offset: number, nbIterations: number, normalize: boolean, type: GLenum, stride: number}}}
     */
    initProgram(context) {
        const vsSource = `
            attribute vec2 aPosition;

            uniform vec2 uResolution;
            uniform vec2 uTranslation;
            uniform vec2 uRotation;
            uniform vec2 uScale;
        
            void main() {
                vec2 position = aPosition * uScale;
                position = position + (uTranslation/uResolution * 2.0) - 1.0;
                position = position + uScale;
                gl_Position = vec4(position * vec2(1.0, -1.0), 0.0, 1.0);
            }
        `
        const fsSource = `
            precision mediump float;
            
            void main() {
                gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
            }
        `
        const shaderProgram = ShaderHelper.initShaderProgram(context, vsSource, fsSource)
        return {
            shaderProgram,
            locations: {
                attribute: {
                    position: context.getAttribLocation(shaderProgram, 'aPosition')
                },
                uniform: {
                    uResolution: context.getUniformLocation(shaderProgram, 'uResolution'),
                    uTranslation: context.getUniformLocation(shaderProgram, 'uTranslation'),
                    uRotation: context.getUniformLocation(shaderProgram, 'uRotation'),
                    uScale: context.getUniformLocation(shaderProgram, 'uScale')
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