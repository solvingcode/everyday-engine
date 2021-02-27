import EntityMotion from '../../EntityMotion.js'
import Vector from '../../../utils/Vector.js'
import Size from '../../../pobject/Size.js'

class LineEntity extends EntityMotion {

    constructor(props) {
        super(props)
        this.shape = EntityMotion.shapes.LINE
        this.vertices = []
    }

    /**
     * @override
     */
    init(world) {
        const dragDistance = this.setMeshPositionByDragDistance(world)
        this.size = new Size({width: Math.abs(dragDistance.x), height: Math.abs(dragDistance.y)})
        if (dragDistance.x * dragDistance.y < 0) {
            this.vertices = [new Vector({x: this.size.width, y: 0}), new Vector({x: 0, y: this.size.height})]
        } else {
            this.vertices = [new Vector({x: 0, y: 0}), new Vector({x: this.size.width, y: this.size.height})]
        }
        return true
    }

    /**
     * @override
     */
    drawContext(dataContext) {
        const {context, camera} = dataContext
        const {x: x0, y: y0} = camera.toCameraScale(this.vertices[0])
        const {x: x1, y: y1} = camera.toCameraScale(this.vertices[1])
        context.beginPath()
        context.moveTo(x0, y0)
        context.lineTo(x1, y1)
    }

    /**
     * @return {number}
     */
    getLineWidth() {
        return Math.abs(this.vertices[1].x - this.vertices[0].x)
    }

    /**
     * @return {number}
     */
    getLineHeight() {
        return Math.abs(this.vertices[1].y - this.vertices[0].y)
    }

}

export default LineEntity