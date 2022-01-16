import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'

export default class SinFunction extends AFunction{

    constructor() {
        super('Sin')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('number', TYPES.NUMBER, 0)
        this.addOutput(TYPES.NUMBER)
    }

    /**
     * @override
     */
    execute() {
        this.setOutputValue(Math.sin(this.getInputValue('number')))
    }
}