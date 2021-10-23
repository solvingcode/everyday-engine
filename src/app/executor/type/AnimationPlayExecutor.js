import ComponentExecutor from './ComponentExecutor.js'
import World from '../../world/World.js'
import AnimationComponent from '../../component/internal/AnimationComponent.js'
import WindowManager, {WINDOWS} from '../../manager/WindowManager.js'
import Component from '../../component/Component.js'
import ClientError from '../../exception/type/ClientError.js'
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
        const componentRegistry = world.getComponentRegistry()
        const animationComponent = unit.getComponent(AnimationComponent)
        const animation = world.getAnimationManager().findById(animationComponent.getAnimation())
        if (animation) {
            if (!!WindowManager.get().hasWindow(WINDOWS.ANIMATION)) {
                animation.getProperties().forEach(property => {
                    const component = componentRegistry.getInstance(property.getComponentName())
                    if ((component instanceof Component)) {
                        const time = animation.getTime()
                        const componentClass = component.constructor
                        const prevFrame = property.tryGetPrevAt(time)
                        const nextFrame = property.tryGetNextAt(time)
                        const type = unit.getComponent(componentClass).getType(property.getAttributeName())
                        const newValue = AnimationPlayer.interpolate(componentClass, type, time, prevFrame, nextFrame)
                        if (prevFrame) {
                            if(!_.isEqual(unit.getComponent(componentClass).getValue(property.getAttributeName()), newValue)){
                                unit.getComponent(componentClass).setValue(property.getAttributeName(), newValue)
                            }
                        }
                    } else {
                        throw new ClientError(`Cannot set Animation : "${component ? component.constructor.name : component}" must be a Component`)
                    }
                })
            }
        }
    }

}