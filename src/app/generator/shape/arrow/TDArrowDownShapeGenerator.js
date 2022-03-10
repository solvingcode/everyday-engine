import Vector from '../../../utils/Vector.js'
import TDArrowShapeGenerator from './TDArrowShapeGenerator.js'

export default class TDArrowDownShapeGenerator extends TDArrowShapeGenerator{

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