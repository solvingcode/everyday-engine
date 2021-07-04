import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'

export default class AndFunction extends AFunction{

    constructor() {
        super('&&')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('value1', TYPES.BOOLEAN, 0)
        this.addInput('value2', TYPES.BOOLEAN, 0)
        this.addOutput(TYPES.BOOLEAN)
    }

    /**
     * @override
     */
    execute() {
        this.setOutputValue(
            !!this.getInputValue('value1') &&
            !!this.getInputValue('value2')
        )
    }
}