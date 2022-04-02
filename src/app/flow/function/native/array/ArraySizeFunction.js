import ANativeFunction from '../ANativeFunction.js'
import {TYPES} from '../../../../pobject/AttributeType.js'

export default class ArraySizeFunction extends ANativeFunction{

    constructor() {
        super('ArraySize')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('array', TYPES.ARRAY | TYPES.ANY, [])
        this.addOutput(TYPES.NUMBER)
    }
}