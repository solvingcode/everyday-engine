import {TYPES} from '../../../../pobject/AttributeType.js'
import ANativeFunction from '../ANativeFunction.js'

export default class StartAnimationFunction extends ANativeFunction {

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