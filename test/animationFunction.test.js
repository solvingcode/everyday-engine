import {expect} from '@jest/globals'
import World from '../src/app/world/World.js'
import EventNode from '../src/app/flow/node/EventNode.js'
import Animation from '../src/app/animation/Animation.js'
import AnimationNode from '../src/app/flow/node/AnimationNode.js'
import OnAnimationStartEvent from '../src/app/flow/event/native/OnAnimationStartEvent.js'
import AnimatorScript from '../src/app/flow/AnimatorScript.js'
import MeshUnit from '../src/app/unit/type/MeshUnit.js'
import AnimationComponent from '../src/app/component/internal/AnimationComponent.js'
import AnimationScriptExecutor from '../src/app/executor/type/AnimationScriptExecutor.js'
import KeyFrame from '../src/app/animation/KeyFrame.js'
import ConditionNode from '../src/app/flow/node/ConditionNode.js'
import FunctionNode from '../src/app/flow/node/FunctionNode.js'
import ConstantNode from '../src/app/flow/node/ConstantNode.js'
import StringVariableNode from '../src/app/flow/node/variable/StringVariableNode.js'
import AssetHelper from '../src/app/utils/AssetHelper.js'
import ReferenceNode from '../src/app/flow/node/ReferenceNode.js'
import FunctionScript from '../src/app/flow/FunctionScript.js'
import ScriptHelper from '../src/app/utils/ScriptHelper.js'

test('Create and compile animation when (startEvent -> animation)', function () {
    const world = World.get()
    const functionRegistry = world.getFunctionRegistry()
    const animationManager = world.getAnimationManager()
    const unit = new MeshUnit()
    const animationComponent = unit.createComponent(AnimationComponent)

    functionRegistry.init()

    const script = new AnimatorScript('animationScript')
    const scriptFunction = new FunctionScript('main')
    script.addFunction(scriptFunction)
    const animation = new Animation(1, 'Animation')

    animationManager.add(animation)
    animationComponent.setScript(script.getName())

    const nodeStartAnimation = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, EventNode, 'OnAnimationStart')
    const nodeAnimation = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, AnimationNode, `Animation ${animation.getName()}`)

    nodeAnimation.attachPrevNode(nodeStartAnimation)

    script.compile(world)

    const mouseEventCompiled = functionRegistry.getInstance('animationScript.main.OnAnimationStart.0')
    expect(functionRegistry.getInstance('animationScript')).toBe(undefined)
    expect(mouseEventCompiled).toBeDefined()
    expect(mouseEventCompiled.constructor).toEqual(OnAnimationStartEvent)

    new AnimationScriptExecutor().execute(unit, {})
    expect(unit.getComponent(AnimationComponent).getAnimation()).toEqual(animation.getId())
})

test('Create and compile animation when (startEvent -> animation1 -> animation2)', function () {
    const world = World.get()
    const functionRegistry = world.getFunctionRegistry()
    const animationManager = world.getAnimationManager()
    const unit = new MeshUnit()
    const animationComponent = unit.createComponent(AnimationComponent)

    functionRegistry.init()

    const script = new AnimatorScript('animationScript')
    const scriptFunction = new FunctionScript('main')
    script.addFunction(scriptFunction)
    const animation1 = new Animation(1, 'Animation1')
    const animation2 = new Animation(2, 'Animation2')
    animation1.setSamples(10)
    animation1.setFrames([new KeyFrame(), new KeyFrame()])
    animation2.setSamples(10)
    animation2.setFrames([new KeyFrame(), new KeyFrame()])

    animationManager.add(animation1)
    animationManager.add(animation2)
    animationComponent.setScript(script.getName())

    const nodeStartAnimation = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, EventNode, 'OnAnimationStart')
    const nodeAnimation1 = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, AnimationNode, `${animation1.getId()}`)
    const nodeAnimation2 = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, AnimationNode, `${animation2.getId()}`)

    nodeAnimation1.attach(nodeStartAnimation, null)
    nodeAnimation2.attach(nodeAnimation1, null)

    script.compile(world)

    const mouseEventCompiled = functionRegistry.getInstance('animationScript.main.OnAnimationStart.0')
    expect(functionRegistry.getInstance('animationScript')).toBe(undefined)
    expect(mouseEventCompiled).toBeDefined()
    expect(mouseEventCompiled.constructor).toEqual(OnAnimationStartEvent)

    new AnimationScriptExecutor().execute(unit, {})
    expect(unit.getComponent(AnimationComponent).getAnimation()).toEqual(animation2.getId())
    expect(animation2.getTime()).toBe(0)
    const time = animation2.getTime()

    new AnimationMeshExecutor().execute(unit, {deltaTime: 0.1})
    new AnimationScriptExecutor().execute(unit, {})

    expect(unit.getComponent(AnimationComponent).getAnimation()).toEqual(animation2.getId())
    expect(unit.getComponent(AnimationComponent).getTime()).toBeGreaterThan(time)
})

test('Create and compile animation when (startEvent -> animation1 -> condition -> animation2)', function () {
    const world = World.get()
    const functionRegistry = world.getFunctionRegistry()
    const animationManager = world.getAnimationManager()
    const unit = new MeshUnit()
    const animationComponent = unit.createComponent(AnimationComponent)

    functionRegistry.init()

    const script = new AnimatorScript('animationScript')
    const scriptFunction = new FunctionScript('main')
    script.addFunction(scriptFunction)
    const animation1 = new Animation(1, 'Animation1')
    const animation2 = new Animation(2, 'Animation2')
    animation1.setSamples(10)
    animation1.setFrames([new KeyFrame(), new KeyFrame(), new KeyFrame()])
    animation2.setSamples(10)
    animation2.setFrames([new KeyFrame(), new KeyFrame(), new KeyFrame()])

    animationManager.add(animation1)
    animationManager.add(animation2)

    const nodeStartAnimation = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, EventNode, 'OnAnimationStart')
    const nodeAnimation1 = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, AnimationNode, `${animation1.getId()}`)
    const nodeAnimation2 = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, AnimationNode, `${animation2.getId()}`)
    const nodeTrue = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, ConditionNode, 'True')
    const nodeNotEqual = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, FunctionNode, '!=')
    const nodeConstant0 = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, ConstantNode, '0')
    const nodeVarSpeed = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, StringVariableNode, 'speed')

    nodeAnimation1.attach(nodeStartAnimation, null)
    nodeTrue.attach(nodeAnimation1, null)
    nodeTrue.attach(nodeNotEqual, 'target')
    nodeNotEqual.attach(nodeVarSpeed, 'value1')
    nodeNotEqual.attach(nodeConstant0, 'value2')
    nodeAnimation2.attach(nodeTrue, null)

    animationComponent.setVarsAttributes(AssetHelper.getScriptVars(script, world))
    animationComponent.setScript(script.getName())

    script.compile(world)

    const mouseEventCompiled = functionRegistry.getInstance('animationScript.main.OnAnimationStart.0')
    expect(functionRegistry.getInstance('animationScript')).toBe(undefined)
    expect(mouseEventCompiled).toBeDefined()
    expect(mouseEventCompiled.constructor).toEqual(OnAnimationStartEvent)

    //Set speed to 0
    animationComponent.setValue('speed', 0)

    new AnimationScriptExecutor().execute(unit, {})
    new AnimationMeshExecutor().execute(unit, {deltaTime: 0.1})
    expect(unit.getComponent(AnimationComponent).getAnimation()).toEqual(animation1.getId())
    expect(animation1.getTime()).toBe(0)
    const time1 = animation1.getTime()

    new AnimationScriptExecutor().execute(unit, {})
    new AnimationMeshExecutor().execute(unit, {deltaTime: 0.1})
    expect(unit.getComponent(AnimationComponent).getAnimation()).toEqual(animation1.getId())
    expect(unit.getComponent(AnimationComponent).getTime()).toBeGreaterThan(time1)

    //Set speed to 1
    animationComponent.setValue('speed', 1)

    new AnimationScriptExecutor().execute(unit, {})
    new AnimationMeshExecutor().execute(unit, {deltaTime: 0.1})
    expect(unit.getComponent(AnimationComponent).getAnimation()).toEqual(animation2.getId())
    expect(animation2.isPlaying()).toBeTruthy()
    expect(animation1.isPlaying()).toBeFalsy()
    expect(animation2.getTime()).toBe(0)
    const time2 = animation2.getTime()

    new AnimationScriptExecutor().execute(unit, {})
    new AnimationMeshExecutor().execute(unit, {deltaTime: 0.1})
    expect(unit.getComponent(AnimationComponent).getAnimation()).toEqual(animation2.getId())
    expect(animation2.isPlaying()).toBeTruthy()
    expect(animation1.isPlaying()).toBeFalsy()
    expect(animation2.getTime()).toBeGreaterThan(time2)

    //Set speed to 0
    animationComponent.setValue('speed', 0)

    new AnimationScriptExecutor().execute(unit, {})
    new AnimationMeshExecutor().execute(unit, {deltaTime: 0.1})
    expect(unit.getComponent(AnimationComponent).getAnimation()).toEqual(animation2.getId())
    expect(animation2.isPlaying()).toBeTruthy()
    expect(animation1.isPlaying()).toBeFalsy()
    expect(animation2.getTime()).toBe(1)
    const time3 = animation2.getTime()

    new AnimationScriptExecutor().execute(unit, {})
    new AnimationMeshExecutor().execute(unit, {deltaTime: 0.1})
    expect(unit.getComponent(AnimationComponent).getAnimation()).toEqual(animation2.getId())
    expect(animation2.isPlaying()).toBeTruthy()
    expect(animation1.isPlaying()).toBeFalsy()
    expect(animation2.getTime()).toBeGreaterThan(time3)
})

test('Create and compile animation when (startEvent -> animation1 -> condition -> animation2 -> condition -> animation1)', function () {
    const world = World.get()
    const functionRegistry = world.getFunctionRegistry()
    const animationManager = world.getAnimationManager()
    const unit = new MeshUnit()
    const animationComponent = unit.createComponent(AnimationComponent)

    functionRegistry.init()

    const script = new AnimatorScript('animationScript')
    const scriptFunction = new FunctionScript('main')
    script.addFunction(scriptFunction)
    const animation1 = new Animation(1, 'Animation1')
    const animation2 = new Animation(2, 'Animation2')
    animation1.setSamples(10)
    animation1.setFrames([new KeyFrame(), new KeyFrame(), new KeyFrame()])
    animation2.setSamples(10)
    animation2.setFrames([new KeyFrame(), new KeyFrame(), new KeyFrame()])

    animationManager.add(animation1)
    animationManager.add(animation2)

    const nodeStartAnimation = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, EventNode, 'OnAnimationStart')
    const nodeAnimation1 = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, AnimationNode, `${animation1.getId()}`)
    const nodeAnimation2 = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, AnimationNode, `${animation2.getId()}`)
    const nodeTrue = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, ConditionNode, 'True')
    const nodeTrue2 = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, ConditionNode, 'True')
    const nodeNotEqual = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, FunctionNode, '!=')
    const nodeEqual = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, FunctionNode, '==')
    const nodeConstant0 = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, ConstantNode, '0')
    const nodeVarSpeed = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, StringVariableNode, 'speed')
    const nodeReference = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, ReferenceNode, '')

    nodeAnimation1.attach(nodeStartAnimation, null)
    nodeTrue.attach(nodeAnimation1, null)
    nodeTrue.attach(nodeNotEqual, 'target')
    nodeNotEqual.attach(nodeVarSpeed, 'value1')
    nodeNotEqual.attach(nodeConstant0, 'value2')
    nodeAnimation2.attach(nodeTrue, null)
    nodeTrue2.attach(nodeAnimation2, null)
    nodeTrue2.attach(nodeEqual, 'target')
    nodeEqual.attach(nodeVarSpeed, 'value1')
    nodeEqual.attach(nodeConstant0, 'value2')
    nodeReference.attach(nodeTrue2, null)
    nodeReference.attach(nodeAnimation1, 'target')

    animationComponent.setVarsAttributes(AssetHelper.getScriptVars(script, world))
    animationComponent.setScript(script.getName())

    script.compile(world)

    const mouseEventCompiled = functionRegistry.getInstance('animationScript.main.OnAnimationStart.0')
    expect(functionRegistry.getInstance('animationScript')).toBe(undefined)
    expect(mouseEventCompiled).toBeDefined()
    expect(mouseEventCompiled.constructor).toEqual(OnAnimationStartEvent)

    //Set speed to 0
    animationComponent.setValue('speed', 0)

    new AnimationScriptExecutor().execute(unit, {})
    expect(unit.getComponent(AnimationComponent).getAnimation()).toEqual(animation1.getId())
    expect(animation1.getTime()).toBe(0)
    const time1 = animation1.getTime()

    new AnimationMeshExecutor().execute(unit, {deltaTime: 0.1})
    new AnimationScriptExecutor().execute(unit, {})

    expect(unit.getComponent(AnimationComponent).getAnimation()).toEqual(animation1.getId())
    expect(unit.getComponent(AnimationComponent).getTime()).toBeGreaterThan(time1)

    //Set speed to 1
    animationComponent.setValue('speed', 1)

    new AnimationScriptExecutor().execute(unit, {})
    expect(unit.getComponent(AnimationComponent).getAnimation()).toEqual(animation2.getId())
    expect(animation2.isPlaying()).toBeTruthy()
    expect(animation1.isPlaying()).toBeFalsy()
    expect(animation2.getTime()).toBe(0)
    const time2 = animation2.getTime()

    new AnimationMeshExecutor().execute(unit, {deltaTime: 0.1})
    new AnimationScriptExecutor().execute(unit, {})

    expect(unit.getComponent(AnimationComponent).getAnimation()).toEqual(animation2.getId())
    expect(animation2.isPlaying()).toBeTruthy()
    expect(animation1.isPlaying()).toBeFalsy()
    expect(animation2.getTime()).toBeGreaterThan(time2)

    //Set speed to 0
    animationComponent.setValue('speed', 0)

    new AnimationScriptExecutor().execute(unit, {})
    expect(unit.getComponent(AnimationComponent).getAnimation()).toEqual(animation1.getId())
    expect(animation1.isPlaying()).toBeTruthy()
    expect(animation2.isPlaying()).toBeFalsy()
    expect(animation1.getTime()).toBe(0)
    const time3 = animation1.getTime()

    new AnimationMeshExecutor().execute(unit, {deltaTime: 0.1})
    new AnimationScriptExecutor().execute(unit, {})

    expect(unit.getComponent(AnimationComponent).getAnimation()).toEqual(animation1.getId())
    expect(animation1.isPlaying()).toBeTruthy()
    expect(animation2.isPlaying()).toBeFalsy()
    expect(animation1.getTime()).toBeGreaterThan(time3)
})

test('Create and compile animation when (startEvent -> animation1 -> anyStartEvent -> condition -> animation2)', function () {
    const world = World.get()
    const functionRegistry = world.getFunctionRegistry()
    const animationManager = world.getAnimationManager()
    const unit = new MeshUnit()
    const animationComponent = unit.createComponent(AnimationComponent)

    functionRegistry.init()

    const script = new AnimatorScript('animationScript')
    const scriptFunction = new FunctionScript('main')
    script.addFunction(scriptFunction)
    const animation1 = new Animation(1, 'Animation1')
    const animation2 = new Animation(2, 'Animation2')
    animation1.setSamples(10)
    animation1.setFrames([new KeyFrame(), new KeyFrame(), new KeyFrame()])
    animation2.setSamples(10)
    animation2.setFrames([new KeyFrame(), new KeyFrame(), new KeyFrame()])

    animationManager.add(animation1)
    animationManager.add(animation2)

    const nodeStartAnimation = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, EventNode, 'OnAnimationStart')
    const nodeAnyStartAnimation = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, EventNode, 'OnAnyAnimationStart')
    const nodeAnimation1 = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, AnimationNode, `${animation1.getId()}`)
    const nodeAnimation2 = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, AnimationNode, `${animation2.getId()}`)
    const nodeTrue = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, ConditionNode, 'True')
    const nodeNotEqual = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, FunctionNode, '!=')
    const nodeConstant0 = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, ConstantNode, '0')
    const nodeVarSpeed = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, StringVariableNode, 'speed')

    nodeAnimation1.attach(nodeStartAnimation, null)
    nodeTrue.attach(nodeAnyStartAnimation, null)
    nodeTrue.attach(nodeNotEqual, 'target')
    nodeNotEqual.attach(nodeVarSpeed, 'value1')
    nodeNotEqual.attach(nodeConstant0, 'value2')
    nodeAnimation2.attach(nodeTrue, null)

    animationComponent.setVarsAttributes(AssetHelper.getScriptVars(script, world))
    animationComponent.setScript(script.getName())

    script.compile(world)

    const mouseEventCompiled = functionRegistry.getInstance('animationScript.main.OnAnimationStart.0')
    expect(functionRegistry.getInstance('animationScript')).toBe(undefined)
    expect(mouseEventCompiled).toBeDefined()
    expect(mouseEventCompiled.constructor).toEqual(OnAnimationStartEvent)

    //Set speed to 0
    animationComponent.setValue('speed', 0)

    new AnimationScriptExecutor().execute(unit, {})
    expect(unit.getComponent(AnimationComponent).getAnimation()).toEqual(animation1.getId())
    expect(animation1.getTime()).toBe(0)
    const time1 = animation1.getTime()

    new AnimationMeshExecutor().execute(unit, {deltaTime: 0.1})
    new AnimationScriptExecutor().execute(unit, {})

    expect(unit.getComponent(AnimationComponent).getAnimation()).toEqual(animation1.getId())
    expect(unit.getComponent(AnimationComponent).getTime()).toBeGreaterThan(time1)

    //Set speed to 1
    animationComponent.setValue('speed', 1)

    new AnimationScriptExecutor().execute(unit, {})
    expect(unit.getComponent(AnimationComponent).getAnimation()).toEqual(animation2.getId())
    expect(animation2.isPlaying()).toBeTruthy()
    expect(animation1.isPlaying()).toBeFalsy()
    expect(animation2.getTime()).toBe(0)
    const time2 = animation2.getTime()

    new AnimationMeshExecutor().execute(unit, {deltaTime: 0.1})
    new AnimationScriptExecutor().execute(unit, {})

    expect(unit.getComponent(AnimationComponent).getAnimation()).toEqual(animation2.getId())
    expect(animation2.isPlaying()).toBeTruthy()
    expect(animation1.isPlaying()).toBeFalsy()
    expect(animation2.getTime()).toBeGreaterThan(time2)

    //Set speed to 0
    animationComponent.setValue('speed', 0)

    new AnimationScriptExecutor().execute(unit, {})
    expect(unit.getComponent(AnimationComponent).getAnimation()).toEqual(animation2.getId())
    expect(animation2.isPlaying()).toBeTruthy()
    expect(animation1.isPlaying()).toBeFalsy()
    expect(animation2.getTime()).toBe(1)
    const time3 = animation2.getTime()

    new AnimationMeshExecutor().execute(unit, {deltaTime: 0.1})
    new AnimationScriptExecutor().execute(unit, {})

    expect(unit.getComponent(AnimationComponent).getAnimation()).toEqual(animation2.getId())
    expect(animation2.isPlaying()).toBeTruthy()
    expect(animation1.isPlaying()).toBeFalsy()
    expect(animation2.getTime()).toBeGreaterThan(time3)
})