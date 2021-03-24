import ArrowRectShapeGenerator from './ArrowRectShapeGenerator.js'
import UnitHelper from '../../../unit/UnitHelper.js'
import Vector from '../../../utils/Vector.js'

export default class ArrowRectDownShapeGenerator extends ArrowRectShapeGenerator{

    /**
     * @override
     */
    drawScaleRect(dataContext, vertices) {
        const {context, camera} = dataContext
        const scaleVertices = UnitHelper.scaleVertices(camera, vertices)
        const {headSize} = this.getArrowProps()
        const {x, y} = scaleVertices[1]
        context.rect(x - headSize / 2, y - headSize, headSize, headSize)
    }

    /**
     * @override
     */
    convertVertices(vertices, size){
        return [
            new Vector({x: size.width / 2, y: 0}),
            new Vector({x: size.width / 2, y: size.height})
        ]
    }
}