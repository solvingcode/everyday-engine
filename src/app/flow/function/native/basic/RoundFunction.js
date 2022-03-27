import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'

export default class RoundFunction extends AFunction{

    constructor() {
        super('Round')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('value', TYPES.NUMBER, 0)
        this.addInput('digits', TYPES.NUMBER, 0)
        this.addOutput(TYPES.NUMBER)
    }
}