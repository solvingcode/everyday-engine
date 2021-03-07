import Size from '../../../../pobject/Size.js'
import Vector from '../../../../utils/Vector.js'
import RotateEntity from './RotateEntity.js'

export default class RotateZEntity extends RotateEntity {

    constructor(props) {
        super(props)
        this.props.style.color = '#00FF00'
        this.props.style.borderSize = 2
    }

    /**
     * @override
     */
    init(world) {
        this.size = new Size({width: 100, height: 100})
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