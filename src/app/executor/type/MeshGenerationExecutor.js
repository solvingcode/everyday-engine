import ComponentExecutor from './ComponentExecutor.js'
import MeshComponent from '../../component/internal/MeshComponent.js'
import World from '../../world/World.js'
import Vector from '../../utils/Vector.js'
import {CANVAS_CONTEXT_TYPE} from '../../core/Constant.js'
import DataContext from '../../pobject/DataContext.js'
import TransformComponent from '../../component/internal/TransformComponent.js'
import GeometryHelper from '../../utils/GeometryHelper.js'
import Size from '../../pobject/Size.js'
import ShapeGenerator from '../../generator/ShapeGenerator.js'
import UnitHelper from '../../utils/UnitHelper.js'
import Mesh from '../../core/Mesh.js'
import Maths from '../../utils/Maths.js'
import GUIPropertyComponent from '../../component/internal/gui/property/GUIPropertyComponent.js'
import ImageHelper from '../../utils/ImageHelper.js'
import TransformHelper from '../../utils/TransformHelper.js'
import Color from '../../utils/Color.js'

export default class MeshGenerationExecutor extends ComponentExecutor {

    constructor() {
        super([MeshComponent, TransformComponent])
    }

    /**
     * @override
     */
    execute(unit, executionContext) {
        const meshComponent = unit.getComponent(MeshComponent)
        const propertyComponent = unit.getComponent(GUIPropertyComponent)
        const world = World.get()
        const {camera} = executionContext
        if (!meshComponent.isGenerated()) {
            meshComponent.setVertices(UnitHelper.generateVertices(unit))
            if (!meshComponent.isEnabled() ||
                !propertyComponent.isVisible() ||
                !this.generate(unit, world, camera)) {
                world.getMeshManager().clear(unit.getId())
            }
            meshComponent.setGenerated(true)
            meshComponent.setVersion(Maths.generateId())
        }
    }

    /**
     * @param {Unit} unit
     * @param {World} world
     * @param {Camera} camera
     */
    generate(unit, world, camera) {
        const meshComponent = unit.getComponent(MeshComponent)
        const transformComponent = unit.getComponent(TransformComponent)
        const dataContext = this.startContext(unit.getId(), meshComponent, transformComponent, world, camera)
        if (dataContext) {
            this.drawContext(unit, dataContext)
            return this.closeContext(meshComponent, transformComponent, dataContext)
        }
    }

    /**
     * @param {number} unitId
     * @param {MeshComponent} meshComponent
     * @param {TransformComponent} transformComponent
     * @param {World} world
     * @param {Camera} camera
     * @return {DataContext | null}
     */
    startContext(unitId, meshComponent, transformComponent, world, camera) {
        const scaleSize = this.getScaleSize(camera, meshComponent, transformComponent)
        const rotation = transformComponent.getRotation()
        const {width, height} = GeometryHelper.getLargestRectangle(rotation, scaleSize)
        if (width > 0 && height > 0) {
            const center = new Vector({x: scaleSize.width / 2, y: scaleSize.height / 2})
            const canvas = new OffscreenCanvas(width, height)
            const context = canvas.getContext(CANVAS_CONTEXT_TYPE)
            const {opacity, borderSize, fillColor,
                color, fillColorOpacity, colorOpacity,
                shadowColor, shadowPosition, shadowBlur,
                gradientColorAssetId} = meshComponent.getStyle()
            context.strokeStyle = Color.hexToRgba(color, colorOpacity)
            const gradientColorAsset = world.getAssetsManager().findAssetById(gradientColorAssetId)
            if(gradientColorAsset){
                const gradientColor = gradientColorAsset.getType().getData()
                const linearGradient = context.createLinearGradient(
                    scaleSize.width / 2, 0, scaleSize.width / 2, scaleSize.height)
                gradientColor.getColors().forEach(colorStop => {
                    linearGradient.addColorStop(colorStop.getOffset(), colorStop.getColor())
                })
                context.fillStyle = linearGradient
            }else if (fillColor) {
                context.fillStyle = Color.hexToRgba(fillColor, fillColorOpacity)
            }
            if(shadowColor){
                context.shadowColor = shadowColor
                context.shadowBlur = camera.toScaleNumber(shadowBlur)
                context.shadowOffsetX = camera.toScaleNumber(shadowPosition.getX())
                context.shadowOffsetY = camera.toScaleNumber(shadowPosition.getY())
            }
            if (_.isNumber(opacity)) {
                context.globalAlpha = opacity
            }
            context.lineWidth = camera.toScaleNumber(borderSize || 1)
            context.translate(width / 2, height / 2)
            context.rotate(rotation)
            context.translate(-center.x, -center.y)
            return new DataContext(unitId, center, context, scaleSize, camera, world)
        }
        return null
    }

    /**
     * @param {Unit} unit
     * @param {DataContext} dataContext
     */
    drawContext(unit, dataContext) {
        ShapeGenerator.get().draw(unit, dataContext)
    }

    /**
     * @param {MeshComponent} meshComponent
     * @param {TransformComponent} transformComponent
     * @param {DataContext} dataContext
     * @return {boolean}
     */
    closeContext(meshComponent, transformComponent, dataContext) {
        const {fillColor, color, borderSize, gradientColorAssetId} = meshComponent.getStyle()
        const {context, world, unitId, scaleSize} = dataContext
        if (meshComponent.getAssetId()) {
            if (fillColor || gradientColorAssetId) {
                context.fill()
                context.globalCompositeOperation = 'destination-over'
            }
            context.clip()
            const asset = world.getAssetsManager().findAssetById(meshComponent.getAssetId())
            const canvasBg = asset.getType().getData().context.canvas
            if (meshComponent.isImageRepeat()) {
                const canvasBgScaled = UnitHelper.generateImageRepeat(canvasBg, dataContext, meshComponent)
                context.drawImage(canvasBgScaled, 0, 0, scaleSize.width, scaleSize.height)
            } else {
                const directionScale = TransformHelper.getScaleDirection(transformComponent.getScale())
                context.drawImage(ImageHelper.scaleCanvas(canvasBg, directionScale),
                    0, 0, scaleSize.width, scaleSize.height)
            }
            this.getMaterial(world, meshComponent.getMaterial())
                .generate(canvasBg, dataContext, meshComponent, transformComponent)
            borderSize && context.stroke()
        } else if (fillColor || gradientColorAssetId) {
            context.fill()
            if (color) {
                context.stroke()
            }
        } else {
            context.stroke()
        }
        return this.updateMeshFromContext(unitId, world.getMeshManager(), context)
    }

    /**
     * @param {World} world
     * @param {string} material
     * @return {Material}
     */
    getMaterial(world, material){
        return world.getMaterialRegistry().getInstance(material)
    }

    /**
     * @param {World} world
     * @return {Mesh}
     */
    getTexture(world) {
        const texture = world.getAssetsManager().findAssetById(this.getTextureId())
        if (texture) {
            return texture.getType().getData()
        }
        return null
    }

    /**
     * @param {number} unitId
     * @param {MeshManager} meshManager
     * @param {OffscreenCanvasRenderingContext2D} context
     */
    updateMeshFromContext(unitId, meshManager, context) {
        const sw = context.canvas.width, sh = context.canvas.height
        if (sw && sh) {
            let mesh = meshManager.get(unitId)
            if (!mesh) {
                mesh = new Mesh()
            }
            mesh.clear(new Size({width: sw, height: sh}))
            mesh.context = context
            meshManager.set(unitId, mesh)
            return true
        }
        return false
    }

    /**
     * @param {Camera} camera
     * @param {MeshComponent} meshComponent
     * @param transformComponent
     * @return {Size}
     */
    getScaleSize(camera, meshComponent, transformComponent) {
        return camera.toScaleSize(meshComponent.getSize())
    }
}