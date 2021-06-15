import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'

export default class NotFunction extends AFunction{

    constructor() {
        super('!')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('value', TYPES.BOOLEAN, 0)
        this.addOutput(TYPES.BOOLEAN)
    }

    /**
     * @override
     */
    execute() {
        this.setOutputValue(
            !this.getInputValue('value')
        )
    }
}