import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'
import AnimationComponent from '../../../../component/internal/AnimationComponent.js'

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

    /**
     * @override
     */
    execute(functionRegistry, unit, scriptComponent, world) {
        const animation = this.getInputValue('target')
        const targetUnit = this.getInputValue('unit')
        const animationComponent = targetUnit.getComponent(AnimationComponent)
        animationComponent.setTime(0)
        animationComponent.setLoopTimes(0)
        animationComponent.setAnimation(animation.getId())
    }
}