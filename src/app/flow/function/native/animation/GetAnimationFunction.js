import ANativeFunction from '../ANativeFunction.js'
import {TYPES} from '../../../../pobject/AttributeType.js'

export default class GetAnimationFunction extends ANativeFunction{

    constructor() {
        super('GetAnimation')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('id', TYPES.NUMBER, 0)
        this.addOutput(TYPES.ANIMATION)
    }
}