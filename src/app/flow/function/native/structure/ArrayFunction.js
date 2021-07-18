import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'

export default class ArrayFunction extends AFunction{

    constructor() {
        super('Array')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('length', TYPES.NUMBER, 0)
        this.addOutput(TYPES.ARRAY_ANY)
    }

    /**
     * @override
     */
    execute() {
        const length = this.getInputValue('length')
        this.setOutputValue(new Array(length))
    }
}