import ComponentExecutor from './ComponentExecutor.js'
import MeshComponent from '../component/MeshComponent.js'
import World from '../world/World.js'
import Vector from '../utils/Vector.js'
import {CANVAS_CONTEXT_TYPE} from '../core/Constant.js'
import DataContext from '../pobject/DataContext.js'
import TransformComponent from '../component/TransformComponent.js'
import GeometryHelper from '../utils/GeometryHelper.js'
import Size from '../pobject/Size.js'
import ShapeGenerator from '../generator/ShapeGenerator.js'
import UnitHelper from '../unit/UnitHelper.js'

/**
 * @todo: improve drawing primitives shapes
 */
export default class MeshGenerationExecutor extends ComponentExecutor{

    constructor() {
        super([MeshComponent, TransformComponent])
    }

    /**
     * @override
     */
    execute(unit){
        const meshComponent = unit.getComponent(MeshComponent)
        const transformComponent = unit.getComponent(TransformComponent)
        if(!meshComponent.isGenerated()){
            meshComponent.setVertices(UnitHelper.generateVertices(unit))
            if(this.generate(meshComponent, transformComponent, World.get())){
                meshComponent.setGenerated(true)
            }
        }
    }

    /**
     * @param {MeshComponent} meshComponent
     * @param {TransformComponent} transformComponent
     * @param {World} world
     */
    generate(meshComponent, transformComponent, world){
        const dataContext = this.startContext(meshComponent, transformComponent, world)
        if (dataContext) {
            this.drawContext(meshComponent, transformComponent, dataContext)
            return this.closeContext(meshComponent, transformComponent, dataContext)
        }
    }

    /**
     * @param {MeshComponent} meshComponent
     * @param {TransformComponent} transformComponent
     * @param {World} world
     * @return {DataContext | null}
     */
    startContext(meshComponent, transformComponent, world) {
        const cameraUnit = world.getCamera()
        const scaleSize = cameraUnit.toScaleSize(meshComponent.getSize(), transformComponent.getPosition())
        const rotation = transformComponent.getRotation()
        const {width, height} = GeometryHelper.getLargestRectangle(rotation, scaleSize)
        if (width > 0 && height > 0) {
            const center = new Vector({x: scaleSize.width / 2, y: scaleSize.height / 2})
            const canvas = new OffscreenCanvas(width, height)
            const context = canvas.getContext(CANVAS_CONTEXT_TYPE)
            const {opacity, borderSize, fillColor, color} = meshComponent.getStyle()
            context.strokeStyle = color
            if(fillColor){
                context.fillStyle = fillColor
            }
            if (_.isNumber(opacity)) {
                context.globalAlpha = opacity
            }
            context.lineWidth = borderSize || 1
            context.translate(width / 2, height / 2)
            context.rotate(rotation)
            context.translate(-center.x, -center.y)
            return new DataContext(center, context, scaleSize, world.getCamera(), world)
        }
        return null
    }

    /**
     * @param {MeshComponent} meshComponent
     * @param {TransformComponent} transformComponent
     * @param {DataContext} dataContext
     */
    drawContext(meshComponent, transformComponent, dataContext) {
        ShapeGenerator.get().draw(meshComponent, transformComponent, dataContext)
    }

    /**
     * @param {MeshComponent} meshComponent
     * @param {TransformComponent} transformComponent
     * @param {DataContext} dataContext
     * @return {boolean}
     */
    closeContext(meshComponent, transformComponent, dataContext) {
        const {fillColor, borderSize} = meshComponent.getStyle()
        const {context, scaleSize} = dataContext
        if (meshComponent.getAssetId()) {
            const asset = dataContext.world.getAssetsManager().findAssetById(meshComponent.getAssetId())
            if (fillColor) {
                context.fill()
                context.globalCompositeOperation = 'destination-over'
            }
            context.clip()
            const canvasBg = asset.getType().getData().context.canvas
            if (meshComponent.isImageRepeat()) {
                context.fillStyle = context.createPattern(canvasBg, 'repeat')
                context.fill()
            } else {
                context.drawImage(canvasBg, 0, 0, scaleSize.width, scaleSize.height)
            }
            borderSize && context.stroke()
        } else if (fillColor) {
            context.stroke()
            context.fill()
        } else {
            context.stroke()
        }
        return this.updateMeshFromContext(meshComponent, transformComponent, context)
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
     * @param {MeshComponent} meshComponent
     * @param {TransformComponent} transformComponent
     * @param {OffscreenCanvasRenderingContext2D} context
     */
    updateMeshFromContext(meshComponent, transformComponent, context) {
        const sw = context.canvas.width, sh = context.canvas.height
        if (sw && sh) {
            const mesh = meshComponent.getMesh()
            mesh.clear(new Size({width: sw, height: sh}))
            mesh.context = context
            return true
        }
        return false
    }

}