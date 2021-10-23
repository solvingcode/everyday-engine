import ComponentExecutor from './ComponentExecutor.js'
import World from '../../world/World.js'
import AnimationComponent from '../../component/internal/AnimationComponent.js'
import WindowManager, {WINDOWS} from '../../manager/WindowManager.js'
import AnimationPlayer from '../../animation/AnimationPlayer.js'

export default class AnimationPlayExecutor extends ComponentExecutor {

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
            if (!!WindowManager.get().hasWindow(WINDOWS.ANIMATION)) {
                if (animation.isPlaying()) {
                    animation.play(deltaTime)
                }
                AnimationPlayer.play(animation, world, animation.getTime(), unit)
            }
        }
    }

}