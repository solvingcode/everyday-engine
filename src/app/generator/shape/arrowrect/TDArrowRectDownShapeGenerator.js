import UnitHelper from '../../../utils/UnitHelper.js'
import Vector from '../../../utils/Vector.js'
import TDArrowRectShapeGenerator from './TDArrowRectShapeGenerator.js'

export default class TDArrowRectDownShapeGenerator extends TDArrowRectShapeGenerator{

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