import {TYPES} from '../../../../pobject/AttributeType.js'
import ANativeFunction from '../ANativeFunction.js'

export default class MultiplyVectorFunction extends ANativeFunction{

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