import ComponentExecutor from './ComponentExecutor.js'
import World from '../../world/World.js'
import AnimationComponent from '../../component/internal/AnimationComponent.js'
import OnAnimationStartEvent from '../../flow/event/native/OnAnimationStartEvent.js'

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
        functionRegistry.getInstancesByClass(animationComponent.getScript()).forEach(instance => {
            if (instance instanceof OnAnimationStartEvent) {
                instance.execute(functionRegistry, unit, animationComponent, world)
            }
        })
    }

}