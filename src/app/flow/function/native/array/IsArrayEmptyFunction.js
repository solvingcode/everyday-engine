import ANativeFunction from '../ANativeFunction.js'
import {TYPES} from '../../../../pobject/AttributeType.js'

export default class isArrayEmptyFunction extends ANativeFunction{

    constructor() {
        super('isArrayEmpty')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('array', TYPES.ARRAY | TYPES.ANY, [])
        this.addOutput(TYPES.BOOLEAN)
    }
}