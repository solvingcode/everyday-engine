import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'
import Vector from '../../../../utils/Vector.js'

export default class MultiplyVectorFunction extends AFunction{

    constructor() {
        super('Vector * Number')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('value1', TYPES.VECTOR, 0)
        this.addInput('value2', TYPES.NUMBER, 0)
        this.addOutput(TYPES.VECTOR)
    }

    /**
     * @override
     */
    execute() {
        const value1 = this.getInputValue('value1')
        const value2 = this.getInputValue('value2')
        this.setOutputValue(Vector.multiply(value1, value2))
    }
}