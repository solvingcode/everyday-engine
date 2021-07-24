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
    }

    /**
     * @override
     */
    execute(functionRegistry, unit, scriptComponent, world) {
        const animationComponent = unit.getComponent(AnimationComponent)
        animationComponent.setTime(0)
        animationComponent.setLoopTimes(0)
        animationComponent.setAnimation(null)
    }
}