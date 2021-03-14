import ColliderComponent from '../ColliderComponent.js'

export default class CircleColliderComponent extends ColliderComponent{

    constructor(props) {
        super(props)
        this.getStyle().setColor('#00FF00')
        this.getStyle().setFillColor('')
    }

    /**
     * @override
     */
    init(world) {
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