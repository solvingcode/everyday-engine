import {TYPES} from '../../../../pobject/AttributeType.js'
import ANativeFunction from '../ANativeFunction.js'

export default class GetCurrentAnimationFunction extends ANativeFunction {

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