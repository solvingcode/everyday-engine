import MeshGenerator from './MeshGenerator.js'
import ShaderHelper from '../../utils/ShaderHelper.js'
import {objectContext} from '../../core/Context.js'
import DataContextWebGL from '../../pobject/DataContextWebGL.js'
import Maths from '../../utils/Maths.js'
import {PrimitiveShape} from '../../unit/Unit.js'
import RectTextureShader from '../../shader/RectTextureShader.js'
import RectStrokeShader from '../../shader/RectStrokeShader.js'
import Color from '../../utils/Color.js'

export default class WebGLMeshGenerator extends MeshGenerator {

    startContext(unitId, meshComponent, transformComponent, world, camera) {
        const scale = transformComponent.getScale()
        const shape = meshComponent.getShape()
        const buffer = objectContext.createBuffer()
        let textureData
        const program = this.initProgram(objectContext, this.getShader(shape), this.getMode(objectContext, shape))
        if (meshComponent.getAssetId()) {
            textureData = this.setupTexture(world, meshComponent)
        }
        return new DataContextWebGL(unitId, objectContext, scale, camera, world, {
            position: {buffer, vertices: []},
            texture: {buffer: textureData && textureData.buffer, vertices: textureData ? textureData.vertices : []}
        }, textureData && textureData.texture, program)
    }

    closeContext(meshComponent, transformComponent, dataContext) {
        const {context, unitId, world, program, buffers, texture, camera} = dataContext

        context.bindBuffer(objectContext.ARRAY_BUFFER, buffers.position.buffer)
        context.bufferData(context.ARRAY_BUFFER, new Float32Array(buffers.position.vertices), context.STATIC_DRAW)

        const params = this.getParams(context, buffers)

        const {borderSize, color, colorOpacity} = meshComponent.getStyle()
        const lineWidth = camera.toScaleNumber(borderSize || 1)
        const borderColor = Color.hexToRgba(color, colorOpacity)
        world.getMeshManager().set(unitId, {params, program, buffers, texture, style: {lineWidth, borderColor}})
        return true
    }

    /**
     * @param {WebGLRenderingContext} context
     * @param {Map<string, {buffer: WebGLBuffer, vertices: number[]}>} buffers
     * @return {*}
     */
    getParams(context, buffers) {
        const params = {}
        const dimension = 2
        for (const iBuffer in buffers) {
            const vertices = buffers[iBuffer].vertices
            params[iBuffer] = {
                attribute: {
                    nbIterations: dimension,
                    type: context.FLOAT,
                    normalize: false,
                    stride: 0,
                    offset: 0
                },
                buffer: {
                    offset: 0,
                    vertexCount: vertices.length / dimension
                }
            }
        }
        return params
    }

    /**
     * @param {World} world
     * @param {MeshComponent} meshComponent
     * @return {{vertices: number[], texture: WebGLTexture, buffer: AudioBuffer | WebGLBuffer}}
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
        return {texture, buffer: textureBuffer, vertices: textureCoords}
    }

    /**
     * @param {WebGLRenderingContext} context
     * @param {{vs: string, fs: string}} shader
     * @param {GLenum} mode
     * @return {{mode: GLenum, shaderProgram: WebGLProgram, locations: {uniform: {uScale: WebGLUniformLocation,
     * uColor: WebGLUniformLocation, uResolution: WebGLUniformLocation, uTranslation: WebGLUniformLocation,
     * uRotation: WebGLUniformLocation}, attribute: {position: GLint}}, bufferParams: {offset: number,
     * vertexCount: number}, attributeParams: {offset: number, nbIterations: number, normalize: boolean,
     * type: GLenum, stride: number}}}
     */
    initProgram(context, {vs, fs}, mode) {
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
            mode
        }
    }

    /**
     * @param shape
     * @return {{vs: string, fs: string}}
     */
    getShader(shape) {
        switch (shape) {
            case PrimitiveShape.RECT:
            case PrimitiveShape.CIRCLE:
            case PrimitiveShape.ARROW_RIGHT:
            case PrimitiveShape.ARROW_DOWN:
            case PrimitiveShape.ARROW_RECT_RIGHT:
            case PrimitiveShape.ARROW_RECT_DOWN:
                return RectStrokeShader
            default:
                return RectTextureShader
        }
    }

    /**
     * @param {WebGLRenderingContext} context
     * @param {string} shape
     * @return {GLenum}
     */
    getMode(context, shape) {
        switch (shape) {
            case PrimitiveShape.RECT:
            case PrimitiveShape.CIRCLE:
                return context.LINE_LOOP
            case PrimitiveShape.ARROW_RIGHT:
            case PrimitiveShape.ARROW_DOWN:
            case PrimitiveShape.ARROW_RECT_RIGHT:
            case PrimitiveShape.ARROW_RECT_DOWN:
                return context.LINES
            default:
                return context.TRIANGLES
        }
    }

}