import {TYPES} from '../../../../pobject/AttributeType.js'
import ANativeFunction from '../ANativeFunction.js'

export default class IsUnitPressedFunction extends ANativeFunction {

    constructor() {
        super('IsUnitPressed')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('target', TYPES.UNIT, 0)
        this.addOutput(TYPES.BOOLEAN)
    }
}