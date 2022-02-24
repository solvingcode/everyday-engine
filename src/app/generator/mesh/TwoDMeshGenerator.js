import MeshGenerator from './MeshGenerator.js'
import Vector from '../../utils/Vector.js'
import DataContext2D from '../../pobject/DataContext2D.js'
import {MODE} from '../../constant/FilterMode.js'
import UnitHelper from '../../utils/UnitHelper.js'
import TransformHelper from '../../utils/TransformHelper.js'
import ImageHelper from '../../utils/ImageHelper.js'
import Mesh from '../../core/Mesh.js'
import Size from '../../pobject/Size.js'

export default class TwoDMeshGenerator extends MeshGenerator {

    startContext(unit, meshComponent, transformComponent, world, camera) {
        const unitId = unit.getId()
        const dataContext = UnitHelper.init2dCanvas(world, camera, meshComponent, transformComponent)
        if (dataContext) {
            return new DataContext2D(unitId, dataContext.center, dataContext.context, dataContext.scaleSize, camera, world)
        }
        return null
    }

    closeContext(meshComponent, transformComponent, dataContext) {
        const {fillColor, color, borderSize, gradientColorAssetId} = meshComponent.getStyle()
        const {context, scaleSize, camera, world, unitId} = dataContext
        if (meshComponent.getFilter() === MODE.NO_SMOOTHING) {
            context.imageSmoothingEnabled = false
        }
        if (meshComponent.getAssetId()) {
            this.drawAssetImage(dataContext, meshComponent.getAssetId(), meshComponent, transformComponent, scaleSize)
        } else if (meshComponent.getMapAssetPositions().length > 0) {
            const mapAssetIds = meshComponent.getMapAssetIds()
            meshComponent.getMapAssetPositions().forEach((mapAssetPosition, iMapAssetPosition) => {
                this.drawAssetImage(dataContext, mapAssetIds[iMapAssetPosition], meshComponent,
                    transformComponent,
                    camera.toScaleSize(meshComponent.getMapAssetSize()),
                    camera.toCameraScale(mapAssetPosition))
            })
        } else if (fillColor || gradientColorAssetId) {
            context.fill()
            if (color && borderSize) {
                context.stroke()
            }
        } else if (borderSize) {
            context.stroke()
        }
        const materialContext = this.getMaterial(world, meshComponent.getMaterial())
            .generate(dataContext, meshComponent, transformComponent)
        return this.updateMeshFromContext(unitId, world.getMeshManager(), materialContext)
    }

    /**
     * @param {World} world
     * @param {string} material
     * @return {Material}
     */
    getMaterial(world, material) {
        return world.getMaterialRegistry().getInstance(material)
    }

    /**
     * @param {DataContext2D} dataContext
     * @param {number} assetId
     * @param {MeshComponent} meshComponent
     * @param {TransformComponent} transformComponent
     * @param {Size} scaleSize
     * @param {Vector} drawPosition
     */
    drawAssetImage(dataContext, assetId, meshComponent,
                   transformComponent, scaleSize, drawPosition = new Vector()) {
        const {fillColor, borderSize, gradientColorAssetId} = meshComponent.getStyle()
        const {context, world, camera} = dataContext
        if (fillColor || gradientColorAssetId) {
            context.fill()
            context.globalCompositeOperation = 'destination-over'
        }
        context.clip()
        const asset = world.getAssetsManager().findAssetById(assetId)
        const canvasBg = asset.getType().getData().context.canvas
        if (meshComponent.isImageRepeat()) {
            const canvasBgScaled = UnitHelper.generateImageRepeat(canvasBg, camera, meshComponent)
            context.drawImage(canvasBgScaled, 0, 0, scaleSize.width, scaleSize.height)
        } else {
            const directionScale = TransformHelper.getScaleDirection(transformComponent.getScale())
            context.drawImage(ImageHelper.scaleCanvas(canvasBg, directionScale),
                drawPosition.getX(), drawPosition.getY(), scaleSize.width, scaleSize.height)
        }
        borderSize && context.stroke()
    }

    /**
     * @param {number} unitId
     * @param {MeshManager} meshManager
     * @param {CanvasRenderingContext2D} context
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

}