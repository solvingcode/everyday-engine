import MeshGenerator from './MeshGenerator.js'
import ShaderHelper from '../../utils/ShaderHelper.js'
import {objectContext} from '../../core/Context.js'
import DataContextWebGL from '../../pobject/DataContextWebGL.js'
import Maths from '../../utils/Maths.js'

export default class WebGLMeshGenerator extends MeshGenerator {

    startContext(unitId, meshComponent, transformComponent, world, camera) {
        const scale = transformComponent.getScale()
        const buffer = objectContext.createBuffer()
        let textureData
        const program = this.initProgram(objectContext)
        this.setupStyle(meshComponent, camera)
        if (meshComponent.getAssetId()) {
            textureData = this.setupTexture(world, meshComponent)
        }
        return new DataContextWebGL(unitId, objectContext, scale, camera, world, {
            position: buffer,
            texture: textureData && textureData.buffer
        }, textureData && textureData.texture, program)
    }

    closeContext(meshComponent, transformComponent, dataContext) {
        const {unitId, world, program, buffers, texture} = dataContext
        world.getMeshManager().set(unitId, {program, buffers, texture})
        return true
    }

    /**
     * @param {MeshComponent} meshComponent
     * @param {Camera} camera
     */
    setupStyle(meshComponent, camera) {
        const {borderSize} = meshComponent.getStyle()
        objectContext.lineWidth(camera.toScaleNumber(borderSize || 1))
    }

    /**
     * @param {World} world
     * @param {MeshComponent} meshComponent
     * @return {{texture: WebGLTexture, buffer: WebGLBuffer}}
     */
    setupTexture(world, meshComponent) {
        const textureBuffer = objectContext.createBuffer()
        const asset = world.getAssetsManager().findAssetById(meshComponent.getAssetId())
        const canvasBg = asset.getType().getData().context.canvas
        const texture = objectContext.createTexture()
        objectContext.bindTexture(objectContext.TEXTURE_2D, texture)
        objectContext.texImage2D(objectContext.TEXTURE_2D, 0, objectContext.RGBA,
            objectContext.RGBA, objectContext.UNSIGNED_BYTE, canvasBg)
        if (Maths.isPowerOf2(canvasBg.width) && Maths.isPowerOf2(canvasBg.height)) {
            objectContext.generateMipmap(objectContext.TEXTURE_2D)
        } else {
            objectContext.texParameteri(objectContext.TEXTURE_2D, objectContext.TEXTURE_WRAP_S, objectContext.CLAMP_TO_EDGE)
            objectContext.texParameteri(objectContext.TEXTURE_2D, objectContext.TEXTURE_WRAP_T, objectContext.CLAMP_TO_EDGE)
            objectContext.texParameteri(objectContext.TEXTURE_2D, objectContext.TEXTURE_MIN_FILTER, objectContext.LINEAR)
        }
        objectContext.bindBuffer(objectContext.ARRAY_BUFFER, textureBuffer)
        const textureCoords = [
            0.0, 0.0,
            1.0, 0.0,
            0.0, 1.0,
            0.0, 1.0,
            1.0, 0.0,
            1.0, 1.0
        ]
        objectContext.bufferData(objectContext.ARRAY_BUFFER, new Float32Array(textureCoords), objectContext.STATIC_DRAW)
        return {texture, buffer: textureBuffer}
    }

    /**
     * @param {WebGLRenderingContext} context
     * @return {{mode: GLenum, shaderProgram: WebGLProgram, locations: {uniform: {uScale: WebGLUniformLocation,
     * uColor: WebGLUniformLocation, uResolution: WebGLUniformLocation, uTranslation: WebGLUniformLocation,
     * uRotation: WebGLUniformLocation}, attribute: {position: GLint}}, bufferParams: {offset: number,
     * vertexCount: number}, attributeParams: {offset: number, nbIterations: number, normalize: boolean,
     * type: GLenum, stride: number}}}
     */
    initProgram(context) {
        const {vs, fs} = this.getShadersTexture()
        const shaderProgram = ShaderHelper.initShaderProgram(context, vs, fs)
        return {
            shaderProgram,
            locations: {
                attribute: {
                    position: context.getAttribLocation(shaderProgram, 'aPosition'),
                    texture: context.getAttribLocation(shaderProgram, 'aTextureCoord')
                },
                uniform: {
                    uResolution: context.getUniformLocation(shaderProgram, 'uResolution'),
                    uTranslation: context.getUniformLocation(shaderProgram, 'uTranslation'),
                    uRotation: context.getUniformLocation(shaderProgram, 'uRotation'),
                    uScale: context.getUniformLocation(shaderProgram, 'uScale'),
                    uColor: context.getUniformLocation(shaderProgram, 'uColor'),
                    uSampler: context.getUniformLocation(shaderProgram, 'uSampler')
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
                vertexCount: 6
            },
            mode: context.TRIANGLES
        }
    }

    /**
     * @return {{vs: string, fs: string}}
     */
    getShadersStroke() {
        return {
            vs: `
                attribute vec2 aPosition;
    
                uniform vec2 uResolution;
                uniform vec2 uTranslation;
                uniform vec2 uRotation;
                uniform vec2 uScale;
                uniform vec4 uColor;
                
                varying vec4 vColor;
            
                void main() {
                    vec2 position = aPosition * uScale;
                    position = position + (uTranslation/uResolution * 2.0) - 1.0;
                    position = position + uScale;
                    gl_Position = vec4(position * vec2(1.0, -1.0), 0.0, 1.0);
                    vColor = uColor;
                }
            `,
            fs: `
                precision mediump float;
                
                varying vec4 vColor;
                
                void main() {
                    gl_FragColor = vColor;
                }
            `
        }
    }

    /**
     * @return {{vs: string, fs: string}}
     */
    getShadersTexture() {
        return {
            vs: `
                attribute vec2 aPosition;
                attribute vec2 aTextureCoord;
    
                uniform vec2 uResolution;
                uniform vec2 uTranslation;
                uniform vec2 uRotation;
                uniform vec2 uScale;
                uniform vec4 uColor;
                
                varying vec4 vColor;
                varying highp vec2 vTextureCoord;
            
                void main() {
                    //vec2 position = aPosition * uScale;
                    vec2 position = aPosition * uScale * 2.0;
                    position = position + (uTranslation/uResolution * 2.0) - 1.0;
                    //position = position + uScale;
                    gl_Position = vec4(position * vec2(1.0, -1.0), 0.0, 1.0);
                    vColor = uColor;
                    vTextureCoord = aTextureCoord;
                }
            `,
            fs: `
                precision mediump float;
                
                varying vec4 vColor;
                varying highp vec2 vTextureCoord;
    
                uniform sampler2D uSampler;
                
                void main() {
                    gl_FragColor = texture2D(uSampler, vTextureCoord);
                }
            `
        }
    }

}