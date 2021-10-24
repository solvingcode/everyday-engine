import ComponentExecutor from './ComponentExecutor.js'
import World from '../../world/World.js'
import AnimationComponent from '../../component/internal/AnimationComponent.js'
import AnimationPlayer from '../../animation/AnimationPlayer.js'

export default class AnimationPlayerExecutor extends ComponentExecutor {

    constructor() {
        super([AnimationComponent])
    }

    /**
     * @override
     */
    execute(unit, executionContext) {
        const world = World.get()
        const {deltaTime} = executionContext
        const animationComponent = unit.getComponent(AnimationComponent)
        const animation = world.getAnimationManager().findById(animationComponent.getAnimation())
        if (animation) {
            animation.play(deltaTime)
            animationComponent.setLoopTimes(animation.getLoopTimes())
            AnimationPlayer.play(animation, world, animation.getTime(), unit)
        }
    }

}