import Size from '../../../../pobject/Size.js'
import Vector from '../../../../utils/Vector.js'
import ScaleAxisEntity from './ScaleAxisEntity.js'

export default class ScaleXEntity extends ScaleAxisEntity {

    /**
     * @override
     */
    init(world) {
        this.props.style.color = '#FF0000'
        this.props.style.fillColor = '#FF0000'
        this.size = new Size({width: 100, height: 30})
        this.vertices = [
            new Vector({x: 0, y: this.size.height / 2}),
            new Vector({x: this.size.width, y: this.size.height / 2})
        ]
        this.setMeshPositionByVertex(new Vector({x: 0, y: -this.size.height / 2}))
        return true
    }

    /**
     * @override
     */
    drawScaleRect(context, camera) {
        const scaleVertices = this.getScaleVertices(camera)
        const {headSize} = this.getArrowProps()
        const {x, y} = scaleVertices[1]
        context.rect(x - headSize, y - headSize / 2, headSize, headSize)
    }

}