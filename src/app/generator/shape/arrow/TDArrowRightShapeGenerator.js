import Vector from '../../../utils/Vector.js'
import TDArrowShapeGenerator from './TDArrowShapeGenerator.js'

export default class TDArrowRightShapeGenerator extends TDArrowShapeGenerator{

    /**
     * @override
     */
    convertVertices(vertices, size){
        return vertices.map(({x, y, z}) =>
            new Vector({x, y: y + size.getHeight() / 2, z}))
    }

}