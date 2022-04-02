import ComponentExecutor from './ComponentExecutor.js'
import AnimationComponent from '../../component/internal/AnimationComponent.js'

export default class EEAnimationScriptExecutor extends ComponentExecutor {

    constructor() {
        super([AnimationComponent])
    }

    /**
     * @override
     */
    execute(unit, executionContext) {
        const animationComponent = unit.getComponent(AnimationComponent)
        const animation = animationComponent.getAnimation()
        if (animationComponent.isEnabled()) {
            const classCompiled = animationComponent.getCompiledClass()
            if (!animationComponent.isInitialized()) {
                classCompiled.OnInit()
                animationComponent.setInitialized(true)
            }
            if ((!animationComponent.isStarted() && animationComponent.isInitialized()) || !animation) {
                classCompiled.OnAnimationStart()
                animationComponent.setStarted(true)
            } else {
                if (animation) {
                    classCompiled[`RunAnimation${animation}`]()
                }
            }
        }
    }

}