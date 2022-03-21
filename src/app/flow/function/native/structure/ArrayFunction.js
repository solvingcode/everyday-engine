import {TYPES} from '../../../../pobject/AttributeType.js'
import ANativeFunction from '../ANativeFunction.js'

export default class ArrayFunction extends ANativeFunction{

    constructor() {
        super('Array')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('length', TYPES.NUMBER, 0)
        this.addOutput(TYPES.ARRAY | TYPES.ANY)
    }

    /**
     * @override
     */
    execute() {
        const length = this.getInputValue('length')
        this.setOutputValue(new Array(length))
    }
}