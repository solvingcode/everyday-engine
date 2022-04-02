import {TYPES} from '../../../../pobject/AttributeType.js'
import ANativeFunction from '../ANativeFunction.js'

export default class IsAnimationEndedFunction extends ANativeFunction {

    constructor() {
        super('IsAnimationEnded')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('unit', TYPES.UNIT, 0)
        this.addOutput(TYPES.BOOLEAN)
    }
}