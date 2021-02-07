import Color from '../../../utils/Color.js'
import Size from '../../../pobject/Size.js'
import JointEntity from './JointEntity.js'
import Vector from '../../../utils/Vector.js'

class AttachPointEntity extends JointEntity {

    constructor(props) {
        super(props)
        this.props.style = {color: `#${Color.fromArrayInt([this.id])}`}
        this.attached = true
    }

    /**
     * @override
     */
    calculateSize(dragDistance) {
        return new Size({width: 10, height: 10})
    }

    /**
     * @override
     */
    setMeshPosition(position) {
        super.setMeshPosition(new Vector({x: position.x - this.size.width / 2, y: position.y - this.size.height / 2}))
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

}

export default AttachPointEntity