import {TYPES} from '../../../../pobject/AttributeType.js'
import ANativeFunction from '../ANativeFunction.js'

export default class EqualToFunction extends ANativeFunction {

    constructor() {
        super('==')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('value1', TYPES.ANY, 0)
        this.addInput('value2', TYPES.ANY, 0)
        this.addOutput(TYPES.BOOLEAN)
    }
}