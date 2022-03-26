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
        if (animationComponent.isEnabled()) {
            const classCompiled = animationComponent.getCompiledClass()
            if (!animationComponent.isInitialized()) {
                classCompiled.OnInit()
                animationComponent.setInitialized(true)
            }
            if (!animationComponent.isStarted() && animationComponent.isInitialized()) {
                classCompiled.OnAnimationStart()
                animationComponent.setStarted(true)
            } else {
                const animation = animationComponent.getAnimation()
                classCompiled[`RunAnimation${animation}`]()
            }
        }
    }

}