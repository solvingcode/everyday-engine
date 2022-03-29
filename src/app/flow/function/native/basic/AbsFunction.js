import {TYPES} from '../../../../pobject/AttributeType.js'
import ANativeFunction from '../ANativeFunction.js'

export default class AbsFunction extends ANativeFunction{

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
}