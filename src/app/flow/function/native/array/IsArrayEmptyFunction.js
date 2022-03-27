import AFunction from '../../AFunction.js'
import {TYPES} from '../../../../pobject/AttributeType.js'

export default class isArrayEmptyFunction extends AFunction{

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