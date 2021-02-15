import MoveAxisEntity from './MoveAxisEntity.js'
import Size from '../../../../pobject/Size.js'
import Vector from '../../../../utils/Vector.js'

export default class MoveYEntity extends MoveAxisEntity{

    /**
     * @override
     */
    init(world) {
        this.props.style.color = '#0000FF'
        this.size = new Size({width: 30, height: 100})
        this.vertices = [
            new Vector({x: this.size.width / 2, y: 0}),
            new Vector({x: this.size.width / 2, y: this.size.height})
        ]
        this.setMeshPositionByVertex(new Vector({x: -this.size.width / 2, y: 0}))
        return true
    }

}