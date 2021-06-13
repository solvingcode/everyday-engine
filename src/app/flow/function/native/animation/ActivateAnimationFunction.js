import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'
import AnimationComponent from '../../../../component/internal/AnimationComponent.js'

export default class ActivateAnimationFunction extends AFunction{

    constructor() {
        super('ActivateAnimation')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('target', TYPES.ANIMATION, 0)
    }

    /**
     * @override
     */
    execute(functionRegistry, unit, scriptComponent, world) {
        const animation = this.getInputValue('target')
        const animationComponent = unit.getComponent(AnimationComponent)
        animationComponent.setAnimation(animation.getId())
    }
}