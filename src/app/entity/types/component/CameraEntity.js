import ComponentEntity from '../../ComponentEntity.js'

/**
 * @class {CameraEntity}
 */
export default class CameraEntity extends ComponentEntity {

    /**
     * @override
     */
    init(world) {
        const dragDistance = this.setMeshPositionByDragDistance(world)
        this.size = {width: Math.abs(dragDistance.x), height: Math.abs(dragDistance.y)}
        return true
    }

    /**
     * @override
     */
    drawContext(dataContext) {
        const {context, scaleSize} = dataContext
        const {width, height} = scaleSize
        context.beginPath()
        context.rect(0, 0, width, height)
        context.moveTo(0, 0)
        context.lineTo(width, height)
        context.moveTo(width, 0)
        context.lineTo(0, height)
    }

}