import {TYPES} from '../../../../pobject/AttributeType.js'
import ANativeFunction from '../ANativeFunction.js'

export default class HasCurrentAnimationFunction extends ANativeFunction {

    constructor() {
        super('HasCurrentAnimation')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('unit', TYPES.UNIT)
        this.addOutput(TYPES.BOOLEAN)
    }
}