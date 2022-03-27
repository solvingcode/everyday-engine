import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'

export default class SubtractVectorFunction extends AFunction{

    constructor() {
        super('Vector - Vector')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('value1', TYPES.VECTOR, 0)
        this.addInput('value2', TYPES.VECTOR, 0)
        this.addOutput(TYPES.VECTOR)
    }
}