import MoveAxisEntity from './MoveAxisEntity.js'
import Size from '../../../../pobject/Size.js'
import Vector from '../../../../utils/Vector.js'

export default class MoveXEntity extends MoveAxisEntity {

    /**
     * @override
     */
    init(world) {
        this.props.getStyle().setColor('#FF0000')
        this.size = new Size({width: 100, height: 30})
        this.vertices = [
            new Vector({x: 0, y: this.size.height / 2}),
            new Vector({x: this.size.width, y: this.size.height / 2})
        ]
        this.setMeshPositionByVertex(new Vector({x: 0, y: -this.size.height / 2}))
        return true
    }

}