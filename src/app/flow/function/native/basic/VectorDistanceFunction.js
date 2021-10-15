import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'
import Vector from '../../../../utils/Vector.js'

export default class VectorDistanceFunction extends AFunction{

    constructor() {
        super('VectorDistance')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('vectorA', TYPES.VECTOR, 0)
        this.addInput('vectorB', TYPES.VECTOR, 0)
        this.addOutput(TYPES.NUMBER)
    }

    /**
     * @override
     */
    execute() {
        const vectorA = this.getInputValue('vectorA')
        const vectorB = this.getInputValue('vectorB')
        this.setOutputValue(Vector.distance(vectorA, vectorB))
    }
}