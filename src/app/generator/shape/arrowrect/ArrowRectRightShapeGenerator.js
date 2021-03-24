import ArrowRectShapeGenerator from './ArrowRectShapeGenerator.js'
import UnitHelper from '../../../unit/UnitHelper.js'
import Vector from '../../../utils/Vector.js'

export default class ArrowRectRightShapeGenerator extends ArrowRectShapeGenerator{

    /**
     * @override
     */
    drawScaleRect(dataContext, vertices) {
        const {context, camera} = dataContext
        const scaleVertices = UnitHelper.scaleVertices(camera, vertices)
        const {headSize} = this.getArrowProps()
        const {x, y} = scaleVertices[1]
        context.rect(x - headSize, y - headSize / 2, headSize, headSize)
    }

    /**
     * @override
     */
    convertVertices(vertices, size){
        return vertices.map(({x, y, z}) =>
            new Vector({x, y: y + size.getHeight() / 2, z}))
    }

}