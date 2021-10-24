import ComponentExecutor from './ComponentExecutor.js'
import World from '../../world/World.js'
import AnimationComponent from '../../component/internal/AnimationComponent.js'
import OnAnimationStartEvent from '../../flow/event/native/OnAnimationStartEvent.js'
import ScriptHelper from '../../utils/ScriptHelper.js'
import AAnimation from '../../flow/animation/AAnimation.js'

export default class AnimationScriptExecutor extends ComponentExecutor {

    constructor() {
        super([AnimationComponent])
    }

    /**
     * @override
     */
    execute(unit, executionContext) {
        const world = World.get()
        const functionRegistry = world.getFunctionRegistry()
        const animationComponent = unit.getComponent(AnimationComponent)
        if(animationComponent.isEnabled()){
            const animation = animationComponent.getAnimation()
            const scriptName = animationComponent.getScript()
            functionRegistry.getInstancesByClass(scriptName).forEach(instance => {
                if (instance instanceof OnAnimationStartEvent && !animationComponent.isStarted()) {
                    instance.execute(functionRegistry, unit, animationComponent, world, executionContext)
                    animationComponent.setStarted(true)
                } else if (instance instanceof AAnimation) {
                    const animationInstance = parseInt(ScriptHelper.getValueFromFunctionName(scriptName, instance.getName()))
                    if (animationInstance === animation) {
                        instance.execute(functionRegistry, unit, animationComponent, world, executionContext)
                    }
                }
            })
        }
    }

}