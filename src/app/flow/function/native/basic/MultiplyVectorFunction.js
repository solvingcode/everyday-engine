import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'

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
}