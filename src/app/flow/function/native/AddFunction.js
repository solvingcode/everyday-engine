import {TYPES} from '../../../pobject/AttributeType.js'
import AFunction from '../AFunction.js'

export default class AddFunction extends AFunction{

    constructor() {
        super('Add')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('value1', TYPES.NUMBER, 0)
        this.addInput('value2', TYPES.NUMBER, 0)
        this.setOutput(TYPES.NUMBER)
    }

    /**
     * @override
     */
    execute() {
        this.setOutputValue(
            this.getInputValue('value1') +
            this.getInputValue('value2')
        )
    }
}