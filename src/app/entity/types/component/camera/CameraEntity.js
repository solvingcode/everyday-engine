import ManagedComponentEntity from '../ManagedComponentEntity.js'

/**
 * @class {CameraEntity}
 */
export default class CameraEntity extends ManagedComponentEntity {

    constructor(props) {
        super({...props, name: 'Camera'})
        this.props.getStyle().setColor('#CCCCCC')
    }

    /**
     * @override
     */
    init(world) {
        const dragDistance = this.setMeshPositionByDragDistance(world)
        const {width: resolutionWidth, height: resolutionHeight} = world.getResolution()
        const dragX = Math.abs(dragDistance.x)
        this.ratio = dragX / resolutionWidth
        this.size = {width: dragX, height: Math.ceil(resolutionHeight * this.ratio)}
        return true
    }

    /**
     * @override
     */
    drawContext(dataContext) {
        const {context, scaleSize} = dataContext
        const {width, height} = scaleSize
        context.beginPath()
        context.rect(0, 0, width, height)
        context.moveTo(0, 0)
        context.lineTo(width, height)
        context.moveTo(width, 0)
        context.lineTo(0, height)
    }

    /**
     * @return {number}
     */
    getRatio(){
        return this.getWidth() / this.getHeight()
    }

    /**
     * @override
     */
    setWidth(width) {
        const ratio = this.getRatio()
        this.size.height = this.getHeight() * ratio
        super.setWidth(width)
    }

    /**
     * @override
     */
    setHeight(height) {
        const ratio = this.getRatio()
        this.size.width = this.getWidth() / ratio
        super.setHeight(height)
    }

}