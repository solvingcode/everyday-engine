import Vector from '../../../utils/Vector.js'
import ArrowShapeGenerator from './ArrowShapeGenerator.js'

export default class ArrowDownShapeGenerator extends ArrowShapeGenerator{

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