import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'
import AnimationComponent from '../../../../component/internal/AnimationComponent.js'

export default class StopAnimationFunction extends AFunction{

    constructor() {
        super('EndAnimation')
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
        animation.setTime(0)
        animation.setLoopTimes(0)
        animation.setPlaying(false)
        animationComponent.setAnimation(null)
    }
}