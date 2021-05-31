import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'

export default class EqualToFunction extends AFunction{

    constructor() {
        super('==')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('value1', TYPES.NUMBER, 0)
        this.addInput('value2', TYPES.NUMBER, 0)
        this.addOutput(TYPES.BOOLEAN)
    }

    /**
     * @override
     */
    execute() {
        this.setOutputValue(
            parseFloat(this.getInputValue('value1')) ===
            parseFloat(this.getInputValue('value2'))
        )
    }
}