import Vector from '../../../../utils/Vector.js'
import ComponentEntity from '../ComponentEntity.js'

export default class GridYEntity extends ComponentEntity {

    init(world) {
        this.size = this.props.size
        this.props.style.color = this.position.x === 0 ? '#0000FF' : '#555555'
        this.props.style.borderSize = 3
        this.vertices = [new Vector(), new Vector({x: 0, y: this.size.height})]
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

}