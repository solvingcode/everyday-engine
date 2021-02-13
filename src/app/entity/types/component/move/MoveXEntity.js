import MoveEntity from './MoveEntity.js'
import Size from '../../../../pobject/Size.js'
import Vector from '../../../../utils/Vector.js'

export default class MoveXEntity extends MoveEntity {

    /**
     * @override
     */
    initMoveVertices() {
        this.props.style.color = '#FF0000'
        this.size = new Size({width: 100, height: 30})
        this.vertices = [
            new Vector({x: 0, y: this.size.height / 2}),
            new Vector({x: this.size.width, y: this.size.height / 2})
        ]
        this.setMeshPositionByVertex(new Vector({x: 0, y: -this.size.height / 2}))
    }

}