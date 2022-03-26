import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'
import AnimationComponent from '../../../../component/internal/AnimationComponent.js'

export default class IsAnimationPlayingFunction extends AFunction {

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

    /**
     * @override
     */
    execute(functionRegistry, unit, scriptComponent, world) {
        const animation = this.getInputValue('target')
        const targetUnit = this.getInputValue('unit')
        const animationComponent = targetUnit.getComponent(AnimationComponent)
        this.setOutputValue(
            animation.getId() === animationComponent.getAnimation()
        )
    }
}