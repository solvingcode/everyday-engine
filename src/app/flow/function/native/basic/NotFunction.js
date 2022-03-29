import {TYPES} from '../../../../pobject/AttributeType.js'
import ANativeFunction from '../ANativeFunction.js'

export default class NotFunction extends ANativeFunction {

    constructor() {
        super('!')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('value', TYPES.ANY, 0)
        this.addOutput(TYPES.BOOLEAN)
    }
}