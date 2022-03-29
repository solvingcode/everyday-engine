import {TYPES} from '../../../../pobject/AttributeType.js'
import ANativeFunction from '../ANativeFunction.js'

export default class RoundFunction extends ANativeFunction{

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