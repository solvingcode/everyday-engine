import {TYPES} from '../../../../pobject/AttributeType.js'
import ANativeFunction from '../ANativeFunction.js'

export default class IsAnimationPlayingFunction extends ANativeFunction {

    constructor() {
        super('IsAnimationPlaying')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('unit', TYPES.UNIT, 0)
        this.addInput('target', TYPES.ANIMATION, 0)
        this.addOutput(TYPES.BOOLEAN)
    }
}