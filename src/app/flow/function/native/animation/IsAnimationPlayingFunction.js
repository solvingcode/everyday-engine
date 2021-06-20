import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'

export default class IsAnimationPlayingFunction extends AFunction {

    constructor() {
        super('IsAnimationPlaying')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('target', TYPES.ANIMATION, 0)
        this.addOutput(TYPES.BOOLEAN)
    }

    /**
     * @override
     */
    execute(functionRegistry, unit, scriptComponent, world) {
        const animation = this.getInputValue('target')
        this.setOutputValue(
            animation.isPlaying()
        )
    }
}