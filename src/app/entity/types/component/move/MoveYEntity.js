import MoveEntity from './MoveEntity.js'
import Size from '../../../../pobject/Size.js'
import Vector from '../../../../utils/Vector.js'

export default class MoveYEntity extends MoveEntity{

    /**
     * @override
     */
    initMoveVertices() {
        this.props.style.color = '#0000FF'
        this.size = new Size({width: 30, height: 100})
        this.vertices = [
            new Vector({x: this.size.width / 2, y: this.size.height}),
            new Vector({x: this.size.width / 2, y: 0})
        ]
        this.setMeshPositionByVertex(new Vector({x: -this.size.width / 2, y: -this.size.height}))
    }

}