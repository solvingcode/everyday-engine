import {TYPES} from '../../../../pobject/AttributeType.js'
import ANativeFunction from '../ANativeFunction.js'

export default class AddVectorFunction extends ANativeFunction{

    constructor() {
        super('Vector + Vector')
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