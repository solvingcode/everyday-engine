import EntityMotion from '../../EntityMotion.js'

class RectEntity extends EntityMotion {

    constructor(props) {
        super(props)
        this.shape = EntityMotion.shapes.RECT
    }

    /**
     * @override
     */
    init(world) {
        const dragDistance = this.setMeshPositionByDragDistance(world)
        this.size = {width: Math.abs(dragDistance.x), height: Math.abs(dragDistance.y)}
        return true
    }

    /**
     * Draw the context
     * @param {DataContext} dataContext
     */
    drawContext(dataContext) {
        const {context, scaleSize} = dataContext
        context.rect(0, 0, scaleSize.width, scaleSize.height)
    }

}

export default RectEntity