import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'

export default class StartAnimationFunction extends AFunction {

    constructor() {
        super('ActivateAnimation')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('unit', TYPES.UNIT, 0)
        this.addInput('target', TYPES.ANIMATION, 0)
    }
}