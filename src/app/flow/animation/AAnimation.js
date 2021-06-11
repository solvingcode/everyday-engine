import AFunction from '../function/AFunction.js'
import World from '../../world/World.js'
import AnimationComponent from '../../component/internal/AnimationComponent.js'

export default class AAnimation extends AFunction{

    /**
     * @param {string} value
     */
    constructor(value) {
        super('Animation')
        this.setName(`${value}`)
    }

    initAttributes() {
    }

    /**
     * @override
     */
    execute(functionRegistry, unit) {
        const animation = World.get().getAnimationManager().findById(parseInt(this.getName()))
        const animationComponent = unit.getComponent(AnimationComponent)
        animationComponent.setAnimation(animation.getId())
    }
}