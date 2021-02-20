import Size from '../../../../pobject/Size.js'
import Vector from '../../../../utils/Vector.js'
import ScaleAxisEntity from './ScaleAxisEntity.js'

export default class ScaleYEntity extends ScaleAxisEntity{

    /**
     * @override
     */
    init(world) {
        this.props.style.color = '#0000FF'
        this.props.style.fillColor = '#0000FF'
        this.size = new Size({width: 30, height: 100})
        this.vertices = [
            new Vector({x: this.size.width / 2, y: 0}),
            new Vector({x: this.size.width / 2, y: this.size.height})
        ]
        this.setMeshPositionByVertex(new Vector({x: -this.size.width / 2, y: 0}))
        return true
    }

    /**
     * @override
     */
    drawScaleRect(context, camera) {
        const scaleVertices = this.getScaleVertices(camera)
        const {headSize} = this.getArrowProps()
        const {x, y} = scaleVertices[1]
        context.rect(x - headSize / 2, y - headSize, headSize, headSize)
    }

}