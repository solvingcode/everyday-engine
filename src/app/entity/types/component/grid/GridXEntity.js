import Vector from '../../../../utils/Vector.js'
import LineEntity from '../../shape/LineEntity.js'

export default class GridXEntity extends LineEntity {

    init(world) {
        this.size = this.props.size
        this.props.style.color = this.position.y === 0 ? '#FF0000' : '#555555'
        this.props.style.borderSize = 3
        this.vertices = [new Vector(), new Vector({x: this.size.width, y: 0})]
        return true
    }

}