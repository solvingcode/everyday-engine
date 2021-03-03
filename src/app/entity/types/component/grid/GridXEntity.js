import Vector from '../../../../utils/Vector.js'
import ComponentEntity from '../ComponentEntity.js'

export default class GridXEntity extends ComponentEntity {

    init(world) {
        this.size = this.props.size
        this.props.style.color = this.position.y === 0 ? '#FF0000' : '#555555'
        this.props.style.borderSize = 3
        this.vertices = [new Vector(), new Vector({x: this.size.width, y: 0})]
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