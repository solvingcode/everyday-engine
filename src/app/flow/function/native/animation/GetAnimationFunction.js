import AFunction from '../../AFunction.js'
import {TYPES} from '../../../../pobject/AttributeType.js'

export default class GetAnimationFunction extends AFunction{

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