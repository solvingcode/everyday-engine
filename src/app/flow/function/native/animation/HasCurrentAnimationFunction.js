import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'

export default class HasCurrentAnimationFunction extends AFunction {

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