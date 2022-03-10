import MeshGenerator from './MeshGenerator.js'
import ShaderHelper from '../../utils/ShaderHelper.js'
import {objectContext} from '../../core/Context.js'
import DataContextWebGL from '../../pobject/DataContextWebGL.js'
import {PrimitiveShape} from '../../unit/Unit.js'
import RectTextureShader from '../../shader/RectTextureShader.js'
import RectStrokeShader from '../../shader/RectStrokeShader.js'
import Color from '../../utils/Color.js'
import TextComponent from '../../component/internal/TextComponent.js'
import UnitHelper from '../../utils/UnitHelper.js'
import UITextComponent from '../../component/internal/ui/UITextComponent.js'
import NodeComponent from '../../component/internal/gui/node/NodeComponent.js'
import LightPointComponent from '../../component/internal/LightPointComponent.js'
import GeometryHelper from '../../utils/GeometryHelper.js'
import {MODE} from '../../constant/FilterMode.js'
import TransformHelper from '../../utils/TransformHelper.js'
import Vector from '../../utils/Vector.js'
import Size from '../../pobject/Size.js'
import Canvas from '../../core/Canvas.js'

export default class WebGLMeshGenerator extends MeshGenerator {

    startContext(unit, meshComponent, transformComponent, world, camera) {
        const scale = transformComponent.getScale()
        const scaleSize = camera.toScaleSize(meshComponent.getSize())
        const rotation = transformComponent.getRotation()
        const sizeContext = GeometryHelper.getLargestRectangle(rotation, scaleSize)
        const center = new Vector({x: scaleSize.width / 2, y: scaleSize.height / 2})
        const centerContext = new Vector({x: sizeContext.width / 2, y: sizeContext.height / 2})
        const shape = meshComponent.getShape()
        const buffer = objectContext.createBuffer()
        const program = this.initProgram(world, unit, objectContext, this.getShader(shape), this.getMode(objectContext, shape))
        const textureData = this.initTexture(world, unit, meshComponent, transformComponent, camera, scaleSize, sizeContext)
        return new DataContextWebGL(unit.getId(), objectContext, scale, scaleSize, center, centerContext, camera,
            world, {
                position: {buffer, vertices: []},
                texture: {buffer: textureData && textureData.buffer, vertices: textureData ? textureData.vertices : []}
            }, textureData && textureData.texture, program)
    }

    closeContext(meshComponent, transformComponent, dataContext) {
        const {context, unitId, world, program, buffers, texture, camera, center, centerContext} = dataContext

        context.bindBuffer(objectContext.ARRAY_BUFFER, buffers.position.buffer)
        context.bufferData(context.ARRAY_BUFFER, new Float32Array(buffers.position.vertices), context.STATIC_DRAW)

        const params = this.getParams(context, buffers)

        const {borderSize, color, colorOpacity} = meshComponent.getStyle()
        const lineWidth = camera.toScaleNumber(borderSize || 1)
        const borderColor = Color.hexToRgba(color, colorOpacity)
        world.getMeshManager().set(unitId, {
            params, program, buffers, texture, center, centerContext,
            style: {lineWidth, borderColor}
        })
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
     * @param {World } world
     * @param {Unit} unit
     * @param {MeshComponent} meshComponent
     * @param {TransformComponent} transformComponent
     * @param {Camera} camera
     * @param {Size} scaleSize
     * @param {Size} sizeContext
     * @return {HTMLCanvasElement}
     */
    generateTexture(world, unit, meshComponent, transformComponent, camera, scaleSize, sizeContext) {
        let canvas
        if (meshComponent.getAssetId()) {
            const asset = world.getAssetsManager().findAssetById(meshComponent.getAssetId())
            const canvasBg = asset.getType().getData().context.canvas
            let canvasGenerated = canvasBg
            if (meshComponent.isImageRepeat()) {
                canvasGenerated = UnitHelper.generateImageRepeat(canvasBg, camera, meshComponent)
            }
            const materialContext = this.getMaterial(world, meshComponent.getMaterial())
                .generate(canvasGenerated.getContext('2d'),
                    new Size({width: Math.floor(sizeContext.width), height: Math.floor(sizeContext.height)}),
                    world, camera, meshComponent, transformComponent)
            canvas = materialContext.canvas
        } else if (meshComponent.getMapAssetPositions().length > 0) {
            const mapAssetIds = meshComponent.getMapAssetIds()
            const canvasBg = new Canvas(scaleSize.width, scaleSize.height)
            const contextBg = canvasBg.getContext('2d')
            if (meshComponent.getFilter() === MODE.NO_SMOOTHING) {
                contextBg.imageSmoothingEnabled = false
            }
            meshComponent.getMapAssetPositions().forEach((mapAssetPosition, iMapAssetPosition) => {
                const asset = world.getAssetsManager().findAssetById(mapAssetIds[iMapAssetPosition])
                const canvasMapBg = asset.getType().getData().context.canvas
                const scaleSizeMap = camera.toScaleSize(meshComponent.getMapAssetSize())
                const drawPosition = camera.toCameraScale(mapAssetPosition)
                contextBg.drawImage(canvasMapBg, drawPosition.getX(), drawPosition.getY(), scaleSizeMap.width, scaleSizeMap.height)
            })
            canvas = canvasBg
        } else if (unit.getComponent(TextComponent) || unit.getComponent(UITextComponent)) {
            const textComponent = unit.getComponent(TextComponent) || unit.getComponent(UITextComponent)
            const dataContextText = UnitHelper.init2dCanvas(world, camera, meshComponent, transformComponent)
            if (dataContextText) {
                UnitHelper.drawText(dataContextText.context, textComponent, scaleSize, camera, world)
                canvas = dataContextText.context.canvas
            }
        } else if (unit.getComponent(NodeComponent)) {
            const canvasNode = new Canvas(scaleSize.width, scaleSize.height)
            const contextNode = canvasNode.getContext('2d')
            UnitHelper.drawNode(contextNode, unit, scaleSize, camera)
            canvas = canvasNode
        } else if (unit.getComponent(LightPointComponent)) {
            const dataContextLight = UnitHelper.init2dCanvas(world, camera, meshComponent, transformComponent)
            if (dataContextLight) {
                UnitHelper.drawLight(dataContextLight.context, unit.getComponent(LightPointComponent),
                    dataContextLight.center, dataContextLight.scaleSize, camera)
                canvas = dataContextLight.context.canvas
            }
        }
        return canvas
    }

    /**
     * @param {World } world
     * @param {Unit} unit
     * @param {MeshComponent} meshComponent
     * @param {TransformComponent} transformComponent
     * @param {Camera} camera
     * @param {Size} scaleSize
     * @param {Size} sizeContext
     * @return {{vertices: number[], texture: WebGLTexture, buffer: (AudioBuffer|WebGLBuffer)}}
     */
    initTexture(world, unit, meshComponent, transformComponent, camera, scaleSize, sizeContext) {
        const canvas = this.generateTexture(world, unit, meshComponent, transformComponent, camera, scaleSize, sizeContext)
        if (canvas) {
            return this.setupTexture(world, canvas, transformComponent, meshComponent)
        }
    }

    /**
     * @param {World} world
     * @param {Canvas | HTMLCanvasElement} canvas
     * @param {MeshComponent} meshComponent
     * @param {TransformComponent} transformComponent
     * @return {{vertices: number[], texture: WebGLTexture, buffer: AudioBuffer | WebGLBuffer}}
     */
    setupTexture(world, canvas, transformComponent, meshComponent) {
        const textureBuffer = objectContext.createBuffer()
        const texture = objectContext.createTexture()
        objectContext.bindTexture(objectContext.TEXTURE_2D, texture)
        objectContext.texImage2D(objectContext.TEXTURE_2D, 0, objectContext.RGBA,
            objectContext.RGBA, objectContext.UNSIGNED_BYTE, canvas)
        objectContext.texParameteri(objectContext.TEXTURE_2D, objectContext.TEXTURE_WRAP_S, objectContext.CLAMP_TO_EDGE)
        objectContext.texParameteri(objectContext.TEXTURE_2D, objectContext.TEXTURE_WRAP_T, objectContext.CLAMP_TO_EDGE)
        if (meshComponent.getFilter() === MODE.NO_SMOOTHING) {
            objectContext.texParameteri(objectContext.TEXTURE_2D, objectContext.TEXTURE_MIN_FILTER, objectContext.NEAREST)
            objectContext.texParameteri(objectContext.TEXTURE_2D, objectContext.TEXTURE_MAG_FILTER, objectContext.NEAREST)
        }
        objectContext.bindBuffer(objectContext.ARRAY_BUFFER, textureBuffer)
        const textureCoords = TransformHelper.getTextureCoords(transformComponent.getScale())
        objectContext.bufferData(objectContext.ARRAY_BUFFER, new Float32Array(textureCoords), objectContext.STATIC_DRAW)
        return {texture, buffer: textureBuffer, vertices: textureCoords}
    }

    /**
     * @param {World} world
     * @param {Unit} unit
     * @param {WebGLRenderingContext} context
     * @param {{vs: string, fs: string}} shader
     * @param {GLenum} mode
     * @return {{mode: GLenum, shaderProgram: WebGLProgram, locations: {uniform: {uScale: WebGLUniformLocation,
     * uColor: WebGLUniformLocation, uResolution: WebGLUniformLocation, uTranslation: WebGLUniformLocation,
     * uRotation: WebGLUniformLocation}, attribute: {position: GLint}}, bufferParams: {offset: number,
     * vertexCount: number}, attributeParams: {offset: number, nbIterations: number, normalize: boolean,
     * type: GLenum, stride: number}}}
     */
    initProgram(world, unit, context, {vs, fs}, mode) {
        const meshData = world.getMeshManager().get(unit.getId())
        if (meshData) {
            return meshData.program
        }
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
                    uCenter: context.getUniformLocation(shaderProgram, 'uCenter'),
                    uCenterContext: context.getUniformLocation(shaderProgram, 'uCenterContext'),
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
            case PrimitiveShape.RECT_STROKE:
            case PrimitiveShape.CIRCLE:
            case PrimitiveShape.CAMERA:
            case PrimitiveShape.ARROW_RIGHT:
            case PrimitiveShape.ARROW_DOWN:
            case PrimitiveShape.ARROW_RECT_RIGHT:
            case PrimitiveShape.ARROW_RECT_DOWN:
            case PrimitiveShape.GRID:
            case PrimitiveShape.LINE:
            case PrimitiveShape.CURVE:
            case PrimitiveShape.EDGE:
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
            case PrimitiveShape.RECT_STROKE:
            case PrimitiveShape.CIRCLE:
            case PrimitiveShape.CAMERA:
                return context.LINE_LOOP
            case PrimitiveShape.ARROW_RIGHT:
            case PrimitiveShape.ARROW_DOWN:
            case PrimitiveShape.ARROW_RECT_RIGHT:
            case PrimitiveShape.ARROW_RECT_DOWN:
            case PrimitiveShape.GRID:
            case PrimitiveShape.LINE:
            case PrimitiveShape.CURVE:
            case PrimitiveShape.EDGE:
                return context.LINES
            default:
                return context.TRIANGLES
        }
    }

}