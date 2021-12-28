import ComponentExecutor from './ComponentExecutor.js'
import World from '../../world/World.js'
import AnimationComponent from '../../component/internal/AnimationComponent.js'
import WindowManager, {WINDOWS} from '../../manager/WindowManager.js'
import AnimationPlayer from '../../animation/AnimationPlayer.js'

export default class AnimationEditorExecutor extends ComponentExecutor {

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
        if (animationComponent) {
            if (!!WindowManager.get().hasWindow(WINDOWS.ANIMATION)) {
                if (animationComponent.getPlaying()) {
                    AnimationPlayer.play(deltaTime, animationComponent, world, unit)
                }
            }
        }
    }

}