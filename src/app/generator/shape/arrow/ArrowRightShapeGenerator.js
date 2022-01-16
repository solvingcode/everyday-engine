import Vector from '../../../utils/Vector.js'
import ArrowShapeGenerator from './ArrowShapeGenerator.js'

export default class ArrowRightShapeGenerator extends ArrowShapeGenerator{

    /**
     * @override
     */
    convertVertices(vertices, size){
        return vertices.map(({x, y, z}) =>
            new Vector({x, y: y + size.getHeight() / 2, z}))
    }

}