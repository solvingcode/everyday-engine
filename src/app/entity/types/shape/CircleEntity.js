import EntityMotion from '../../EntityMotion.js'

class CircleEntity extends EntityMotion {

    constructor(props) {
        super(props)
        this.shape = EntityMotion.shapes.CIRCLE
        this.radius = 0
    }

    /**
     * @override
     */
    init(world) {
        const dragDistance = this.setMeshPositionByDragDistance(world)
        this.size = {width: Math.abs(dragDistance.x), height: Math.abs(dragDistance.x)}
        return true
    }

    /**
     * @override
     */
    drawContext(dataContext) {
        const {center, context, scaleSize} = dataContext
        const sw = scaleSize.width
        this.radius = Math.abs(this.size.width / 2 - 1)
        context.ellipse(center.x, center.y, sw / 2, sw / 2, 0, 0, 2 * Math.PI)
    }

    /**
     * Calculate the largest rectangle for given rotation and size
     * @param {number} angleRadian
     * @param {Size} size
     */
    getLargestRectangle(angleRadian, size) {
        return size
    }

    /**
     * @override
     */
    includes(point) {
        const {x, y} = this.fromAbsolutePosition(point)
        const center = this.getCenter()
        return Math.pow(x - center.x, 2) + Math.pow(y - center.y, 2) < Math.pow(this.size.width/2, 2)
    }

    /**
     * @override
     */
    setWidth(width) {
        this.size.height = width
        super.setWidth(width)
    }

    /**
     * @override
     */
    setHeight(height) {
        this.size.width = height
        super.setHeight(height)
    }

}

export default CircleEntity