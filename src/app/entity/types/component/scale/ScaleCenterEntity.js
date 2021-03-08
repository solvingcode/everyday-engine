import Size from '../../../../pobject/Size.js'
import Vector from '../../../../utils/Vector.js'
import ScaleEntity from './ScaleEntity.js'

export default class ScaleCenterEntity extends ScaleEntity{

    constructor(props) {
        super(props)
        this.getStyle().setBorderSize(2)
        this.getStyle().setColor('#CCCCCC')
        this.getStyle().setFillColor('')
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
        const radiusScale = sw / 2 - this.props.getStyle().getBorderSize()
        context.ellipse(center.x, center.y, radiusScale, radiusScale, 0, 0, 2 * Math.PI)
    }

}