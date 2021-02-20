import Size from '../../../../pobject/Size.js'
import Vector from '../../../../utils/Vector.js'
import MoveEntity from './MoveEntity.js'

export default class MoveCenterEntity extends MoveEntity{

    constructor(props) {
        super(props)
        this.selectable = false
        this.props.style.borderSize = 2
    }

    /**
     * @override
     */
    init(world) {
        this.size = new Size({width: 50, height: 50})
        this.setMeshPositionByVertex(new Vector({x: -this.size.width / 2, y: -this.size.height / 2}))
        return true
    }

    /**
     * @override
     */
    drawContext(dataContext) {
        const {center, context, scaleSize} = dataContext
        const sw = scaleSize.width
        const radiusScale = sw / 2 - this.props.style.borderSize
        context.ellipse(center.x, center.y, radiusScale, radiusScale, 0, 0, 2 * Math.PI)
    }

}