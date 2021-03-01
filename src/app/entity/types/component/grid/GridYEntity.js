import Vector from '../../../../utils/Vector.js'
import LineEntity from '../../shape/LineEntity.js'

export default class GridYEntity extends LineEntity {

    init(world) {
        this.size = this.props.size
        this.props.style.color = this.position.x === 0 ? '#0000FF' : '#555555'
        this.props.style.borderSize = 3
        this.vertices = [new Vector(), new Vector({x: 0, y: this.size.height})]
        return true
    }

}