import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'

export default class GetCurrentAnimationFunction extends AFunction {

    constructor() {
        super('GetCurrentAnimation')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('unit', TYPES.UNIT, 0)
        this.addOutput(TYPES.NUMBER)
    }
}