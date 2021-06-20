import {expect} from '@jest/globals'
import World from '../src/app/world/World.js'
import EventNode from '../src/app/flow/node/EventNode.js'
import Animation from '../src/app/animation/Animation.js'
import AnimationNode from '../src/app/flow/node/AnimationNode.js'
import OnAnimationStartEvent from '../src/app/flow/event/native/OnAnimationStartEvent.js'
import AnimationScript from '../src/app/flow/AnimationScript.js'
import EmptyUnit from '../src/app/unit/type/EmptyUnit.js'
import AnimationComponent from '../src/app/component/internal/AnimationComponent.js'
import AnimationScriptExecutor from '../src/app/executor/type/AnimationScriptExecutor.js'

test('Create and compile animation when one animation', function () {
    const world = World.get()
    const functionRegistry = world.getFunctionRegistry()
    const animationManager = world.getAnimationManager()
    const unit = new EmptyUnit()
    const animationComponent = unit.createComponent(AnimationComponent)

    functionRegistry.init()

    const script = new AnimationScript('animationScript')
    const animation = new Animation(1, 'Animation')

    animationManager.add(animation)
    animationComponent.setScript(script.getName())

    const nodeStartAnimation = script.createNode(functionRegistry, EventNode, 'OnAnimationStart')
    const nodeAnimation = script.createNode(functionRegistry, AnimationNode, `${animation.getId()}`)

    nodeAnimation.attach(nodeStartAnimation, null)

    script.compile()

    const mouseEventCompiled = functionRegistry.getInstance('animationScript.OnAnimationStart.0')
    expect(functionRegistry.getInstance('animationScript')).toBe(undefined)
    expect(mouseEventCompiled).toBeDefined()
    expect(mouseEventCompiled.constructor).toEqual(OnAnimationStartEvent)

    new AnimationScriptExecutor().execute(unit, {})
    expect(unit.getComponent(AnimationComponent).getAnimation()).toEqual(animation.getId())
})
