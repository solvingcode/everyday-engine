import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'

export default class AddFunction extends AFunction{

    constructor() {
        super('+')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('value1', TYPES.NUMBER, 0)
        this.addInput('value2', TYPES.NUMBER, 0)
        this.addOutput(TYPES.NUMBER)
    }

    /**
     * @override
     */
    execute() {
        const value1 = this.getInputValue('value1')
        const value2 = this.getInputValue('value2')
        this.setOutputValue(parseFloat(value1) + parseFloat(value2))
    }
}