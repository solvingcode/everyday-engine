import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'

export default class AbsFunction extends AFunction{

    constructor() {
        super('Abs')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('value', TYPES.NUMBER, 0)
        this.addOutput(TYPES.NUMBER)
    }

    /**
     * @override
     */
    execute() {
        const value = parseFloat(this.getInputValue('value'))
        this.setOutputValue(Math.abs(value))
    }
}