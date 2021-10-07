import LogFunction from '../src/app/flow/function/native/basic/LogFunction.js'
import AddFunction from '../src/app/flow/function/native/basic/AddFunction.js'
import {expect} from '@jest/globals'
import AEmptyStackFunction from '../src/app/flow/function/AEmptyStackFunction.js'
import StackOperation, {OPERATIONS} from '../src/app/operation/StackOperation.js'
import {CONSTANTS} from '../src/app/operation/StackRegister.js'
import {TYPES} from '../src/app/pobject/AttributeType.js'
import FunctionScript from '../src/app/flow/FunctionScript.js'
import ClassScript from '../src/app/flow/ClassScript.js'
import FunctionNode from '../src/app/flow/node/FunctionNode.js'
import ConstantNode from '../src/app/flow/node/ConstantNode.js'
import World from '../src/app/world/World.js'
import ConditionNode from '../src/app/flow/node/ConditionNode.js'
import OnMouseClickEvent from '../src/app/flow/event/native/OnMouseClickEvent.js'
import StringVariableNode from '../src/app/flow/node/variable/StringVariableNode.js'
import ScriptComponent from '../src/app/component/internal/ScriptComponent.js'
import DynamicAttribute from '../src/app/pobject/DynamicAttribute.js'
import LoopNode from '../src/app/flow/node/LoopNode.js'
import FunctionInputNode from '../src/app/flow/node/FunctionInputNode.js'
import EventNode from '../src/app/flow/node/EventNode.js'
import OnCallEvent from '../src/app/flow/event/native/OnCallEvent.js'
import ACustomFunction from '../src/app/flow/function/custom/ACustomFunction.js'
import FunctionOutputNode from '../src/app/flow/node/FunctionOutputNode.js'
import ScriptHelper from '../src/app/utils/ScriptHelper.js'
import AssetUnitInstant from '../src/app/unit/instant/type/internal/asset/AssetUnitInstant.js'
import Vector from '../src/app/utils/Vector.js'
import Scene from '../src/app/scene/Scene.js'
import SelfNode from '../src/app/flow/node/SelfNode.js'

test('Execute native function (without output)', function () {
    const log = new LogFunction()
    log.setInputValue('value', 'test')
    console.log = jest.fn()
    log.execute()
    expect(console.log).toHaveBeenCalledWith('test')
})

test('Execute native function (with output)', function () {
    const add = new AddFunction()
    add.setInputValue('value1', 20)
    add.setInputValue('value2', 50)
    add.execute()
    expect(add.getOutputValue('result')).toBe(70)
})

test('Execute stack function (without output)', function () {
    const functionRegistry = World.get().getFunctionRegistry()
    functionRegistry.init()
    const func = new AEmptyStackFunction('test')
    func.setInputs([])
    func.setStack([
        new StackOperation(OPERATIONS.PUSH, 'value1', '20'),
        new StackOperation(OPERATIONS.PUSH, 'value2', '20'),
        new StackOperation(OPERATIONS.CALL, '+'),
        new StackOperation(OPERATIONS.PUSH, 'value1', '__result__'),
        new StackOperation(OPERATIONS.PUSH, 'value2', '60'),
        new StackOperation(OPERATIONS.CALL, '+'),
        new StackOperation(OPERATIONS.PUSH, 'value', '__result__'),
        new StackOperation(OPERATIONS.CALL, 'Log')
    ])
    console.log = jest.fn()
    func.execute(functionRegistry)
    expect(console.log).toHaveBeenCalledWith(100)
    expect(func.getOutputValue()).toBe(null)
})

test('Execute stack function (with output)', function () {
    const functionRegistry = World.get().getFunctionRegistry()
    functionRegistry.init()
    const func = new AEmptyStackFunction('test')
    func.addOutput(TYPES.NUMBER)
    func.setStack([
        new StackOperation(OPERATIONS.PUSH, 'value1', '20'),
        new StackOperation(OPERATIONS.PUSH, 'value2', '30'),
        new StackOperation(OPERATIONS.CALL, '+'),
        new StackOperation(OPERATIONS.PUSH, 'value1', CONSTANTS.RESULT),
        new StackOperation(OPERATIONS.PUSH, 'value2', '60'),
        new StackOperation(OPERATIONS.CALL, '+')
    ])
    func.execute(functionRegistry)
    expect(func.getOutputValue()).toBe(110)
})

test('Create and compile class flow', function () {
    const world = World.get()
    const functionRegistry = world.getFunctionRegistry()

    functionRegistry.init()

    const script = new ClassScript('classScript')
    const scriptFunction = new FunctionScript('main')
    script.addFunction(scriptFunction)

    const nodeLog = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, FunctionNode, 'Log')
    const nodeAdd = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, FunctionNode, '+')
    const nodeSetValue1 = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, ConstantNode, 20)
    const nodeSetValue2 = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, ConstantNode, 30)
    const nodeEvent = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, FunctionNode, 'OnMouseClick')

    nodeAdd.attach(nodeSetValue1, 'value1')
    nodeAdd.attach(nodeSetValue2, 'value2')
    nodeLog.attach(nodeAdd, 'value')
    nodeLog.attach(nodeEvent, null)

    script.compile(world)

    const mouseEventCompiled = functionRegistry.getInstance('classScript.main.OnMouseClick.4')
    expect(functionRegistry.getInstance('classScript')).toBe(undefined)
    expect(mouseEventCompiled).toBeDefined()
    expect(mouseEventCompiled.constructor).toEqual(OnMouseClickEvent)

    console.log = jest.fn()
    mouseEventCompiled.execute(functionRegistry, null, null, World.get())
    expect(console.log).toHaveBeenCalledWith(50)
})

test('Create and compile class script with success condition', function () {
    const world = World.get()
    const functionRegistry = world.getFunctionRegistry()

    functionRegistry.init()

    const script = new ClassScript('classScript')
    const scriptFunction = new FunctionScript('main')
    script.addFunction(scriptFunction)

    const nodeLog = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, FunctionNode, 'Log')
    const nodeLessThan = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, FunctionNode, '<')
    const nodeSetValue1 = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, ConstantNode, 20)
    const nodeSetValue2 = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, ConstantNode, 30)
    const nodeSetValue3 = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, ConstantNode, 'correct')
    const nodeTrueCondition = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, ConditionNode, 'True')
    const nodeEvent = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, FunctionNode, 'OnMouseClick')

    nodeLessThan.attach(nodeSetValue1, 'value1')
    nodeLessThan.attach(nodeSetValue2, 'value2')
    nodeTrueCondition.attach(nodeLessThan, 'target')
    nodeLog.attach(nodeSetValue3, 'value')
    nodeLog.attach(nodeTrueCondition, null)
    nodeTrueCondition.attach(nodeEvent, null)

    script.compile(world)

    const mouseEventCompiled = functionRegistry.getInstance('classScript.main.OnMouseClick.6')
    expect(functionRegistry.getInstance('classScript')).toBe(undefined)
    expect(mouseEventCompiled).toBeDefined()
    expect(mouseEventCompiled.constructor).toEqual(OnMouseClickEvent)

    console.log = jest.fn()
    mouseEventCompiled.execute(functionRegistry, null, null, World.get())
    expect(console.log).toHaveBeenCalledWith('correct')
})

test('Create and compile class script with failed condition', function () {
    const world = World.get()
    const functionRegistry = world.getFunctionRegistry()

    functionRegistry.init()

    const script = new ClassScript('classScript')
    const scriptFunction = new FunctionScript('main')
    script.addFunction(scriptFunction)

    const nodeLog = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, FunctionNode, 'Log')
    const nodeLessThan = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, FunctionNode, '<')
    const nodeSetValue1 = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, ConstantNode, 20)
    const nodeSetValue2 = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, ConstantNode, 10)
    const nodeSetValue3 = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, ConstantNode, 'correct')
    const nodeTrueCondition = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, ConditionNode, 'True')
    const nodeEvent = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, FunctionNode, 'OnMouseClick')

    nodeLessThan.attach(nodeSetValue1, 'value1')
    nodeLessThan.attach(nodeSetValue2, 'value2')
    nodeTrueCondition.attach(nodeLessThan, 'target')
    nodeLog.attach(nodeSetValue3, 'value')
    nodeLog.attach(nodeTrueCondition, null)
    nodeTrueCondition.attach(nodeEvent, null)

    script.compile(world)

    const mouseEventCompiled = functionRegistry.getInstance('classScript.main.OnMouseClick.6')
    expect(functionRegistry.getInstance('classScript')).toBe(undefined)
    expect(mouseEventCompiled).toBeDefined()
    expect(mouseEventCompiled.constructor).toEqual(OnMouseClickEvent)

    console.log = jest.fn()
    mouseEventCompiled.execute(functionRegistry, null, null, World.get())
    expect(console.log).not.toHaveBeenCalledWith('correct')
})

test('Create and compile class script with variables', function () {
    const world = World.get()
    const functionRegistry = world.getFunctionRegistry()

    functionRegistry.init()

    const script = new ClassScript('classScript')
    const scriptFunction = new FunctionScript('main')
    script.addFunction(scriptFunction)
    const scriptComponent = new ScriptComponent()
    scriptComponent.setVarsAttributes([new DynamicAttribute('text', TYPES.STRING, 'test')])

    const nodeLog = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, FunctionNode, 'Log')
    const nodeVar = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, StringVariableNode, 'text')
    const nodeEvent = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, FunctionNode, 'OnMouseClick')

    nodeLog.attach(nodeVar, 'value')
    nodeLog.attach(nodeEvent, null)

    script.compile(world)

    const mouseEventCompiled = functionRegistry.getInstance('classScript.main.OnMouseClick.2')
    expect(functionRegistry.getInstance('classScript')).toBe(undefined)
    expect(mouseEventCompiled).toBeDefined()
    expect(mouseEventCompiled.constructor).toEqual(OnMouseClickEvent)

    console.log = jest.fn()
    mouseEventCompiled.execute(functionRegistry, null, scriptComponent, World.get())
    expect(console.log).toHaveBeenCalledWith('test')
})

test('Create and compile class script with loop', function () {
    const world = World.get()
    const functionRegistry = world.getFunctionRegistry()

    functionRegistry.init()

    const script = new ClassScript('classScript')
    const scriptFunction = new FunctionScript('main')
    script.addFunction(scriptFunction)
    const scriptComponent = new ScriptComponent()

    const nodeLog = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, FunctionNode, 'Log')
    const nodeLoop = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, LoopNode, 'Loop')
    const nodeEvent = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, FunctionNode, 'OnMouseClick')
    const nodeArray = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, FunctionNode, 'Array')
    const nodeLength = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, ConstantNode, 10)
    const nodeAttributeName = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, ConstantNode, "index")
    const nodeGetValue = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, FunctionNode, 'GetValue')

    nodeArray.attach(nodeLength, 'length')
    nodeLoop.attach(nodeArray, 'array')
    nodeLoop.attach(nodeEvent, null)
    nodeGetValue.attach(nodeLoop, 'attributes')
    nodeGetValue.attach(nodeAttributeName, 'name')
    nodeLog.attach(nodeGetValue, 'value')
    nodeLog.attach(nodeLoop, null)

    script.compile(world)

    const mouseEventCompiled = functionRegistry.getInstance('classScript.main.OnMouseClick.2')
    expect(functionRegistry.getInstance('classScript')).toBe(undefined)
    expect(mouseEventCompiled).toBeDefined()
    expect(mouseEventCompiled.constructor).toEqual(OnMouseClickEvent)

    console.log = jest.fn()
    mouseEventCompiled.execute(functionRegistry, null, scriptComponent, World.get())
    expect(console.log).toHaveBeenCalledWith(10)
})

test('Create and compile class function (no return)', function () {
    const world = World.get()
    const scene = new Scene("Game")
    world.getSceneManager().tryAdd(scene)
    world.getSceneManager().activate(scene)
    const unit = world.createUnitInstant(AssetUnitInstant, new Vector(), null, 'Empty')
    const unitCaller = world.createUnitInstant(AssetUnitInstant, new Vector(), null, 'Empty Caller')
    const unitScriptComponent = unit.createComponent(ScriptComponent)
    const scriptComponent = unitCaller.createComponent(ScriptComponent)
    unitScriptComponent.setScript('classScript')
    scriptComponent.setScript('classScript')
    const functionRegistry = world.getFunctionRegistry()

    functionRegistry.init()

    const script = new ClassScript('classScript')
    const scriptFunction = new FunctionScript('testFunction')
    const mainScriptFunction = new FunctionScript('main')
    script.addFunction(mainScriptFunction)
    script.addFunction(scriptFunction)

    const nodeLog = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, FunctionNode, 'Log')
    const nodeInput1 = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, FunctionInputNode, `text[${TYPES.STRING}]`)
    const nodeOnCall = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, EventNode, 'OnCall')
    nodeLog.attach(nodeInput1, 'value')
    nodeLog.attach(nodeOnCall, null)

    script.compile(world)

    const functionCompiled = functionRegistry.getInstance('classScript.testFunction')
    const callEventCompiled = functionRegistry.getInstance('classScript.testFunction.OnCall')
    expect(functionRegistry.getInstance('classScript')).toBe(undefined)
    expect(callEventCompiled).toBeDefined()
    expect(functionCompiled).toBeDefined()
    expect(callEventCompiled.constructor).toEqual(OnCallEvent)
    expect(functionCompiled.constructor).toEqual(ACustomFunction)

    const nodeInputUnit = ScriptHelper.createNodeByClass(functionRegistry, mainScriptFunction, SelfNode, '')
    const nodeLogFunction = ScriptHelper.createNodeByClass(functionRegistry, mainScriptFunction, FunctionNode, 'classScript.testFunction')
    const nodeMouseClick = ScriptHelper.createNodeByClass(functionRegistry, mainScriptFunction, EventNode, 'OnMouseClick')
    const nodeInputText = ScriptHelper.createNodeByClass(functionRegistry, mainScriptFunction, ConstantNode, 'testMessage')
    nodeLogFunction.attach(nodeMouseClick, null)
    nodeLogFunction.attach(nodeInputText, 'text')
    nodeLogFunction.attach(nodeInputUnit, 'unit')

    script.compile(world)

    const mouseEventCompiled = functionRegistry.getInstance('classScript.main.OnMouseClick.2')
    expect(mouseEventCompiled).toBeDefined()
    expect(mouseEventCompiled.constructor).toEqual(OnMouseClickEvent)

    console.log = jest.fn()
    mouseEventCompiled.execute(functionRegistry, unitCaller, scriptComponent, World.get())
    expect(console.log).toHaveBeenCalledWith('testMessage')
})

test('Create and compile class function (return value)', function () {
    const world = World.get()
    const scene = new Scene("Game2")
    world.getSceneManager().tryAdd(scene)
    world.getSceneManager().activate(scene)
    const unit = world.createUnitInstant(AssetUnitInstant, new Vector(), null, 'Empty')
    const unitScriptComponent = unit.createComponent(ScriptComponent)
    unitScriptComponent.setScript('classScript')
    const functionRegistry = world.getFunctionRegistry()

    functionRegistry.init()

    const script = new ClassScript('classScript')
    const scriptFunction = new FunctionScript('testFunction')
    const mainScriptFunction = new FunctionScript('main')
    script.addFunction(mainScriptFunction)
    script.addFunction(scriptFunction)
    const scriptComponent = new ScriptComponent()

    const nodeMultiply = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, FunctionNode, 'Multiply')
    const nodeInput1 = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, FunctionInputNode, `numberA[${TYPES.NUMBER}]`)
    const nodeInput2 = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, FunctionInputNode, `numberB[${TYPES.NUMBER}]`)
    const nodeOutput = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, FunctionOutputNode, `${TYPES.NUMBER}`)
    const nodeOnCall = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, EventNode, 'OnCall')
    nodeMultiply.attach(nodeInput1, 'value1')
    nodeMultiply.attach(nodeInput2, 'value2')
    nodeMultiply.attach(nodeOnCall, null)
    nodeOutput.attach(nodeMultiply, null)

    script.compile(world)

    const functionCompiled = functionRegistry.getInstance('classScript.testFunction')
    const callEventCompiled = functionRegistry.getInstance('classScript.testFunction.OnCall')
    expect(functionRegistry.getInstance('classScript')).toBe(undefined)
    expect(callEventCompiled).toBeDefined()
    expect(functionCompiled).toBeDefined()
    expect(callEventCompiled.constructor).toEqual(OnCallEvent)
    expect(functionCompiled.constructor).toEqual(ACustomFunction)

    const nodeInputUnit1 = ScriptHelper.createNodeByClass(functionRegistry, mainScriptFunction, ConstantNode, unit.getId())
    const nodeInputUnit2 = ScriptHelper.createNodeByClass(functionRegistry, mainScriptFunction, ConstantNode, unit.getId())
    const nodeLogFunction = ScriptHelper.createNodeByClass(functionRegistry, mainScriptFunction, FunctionNode, 'Log')
    const nodeMultiplyFunction = ScriptHelper.createNodeByClass(functionRegistry, mainScriptFunction, FunctionNode, 'classScript.testFunction')
    const nodeMouseClick = ScriptHelper.createNodeByClass(functionRegistry, mainScriptFunction, EventNode, 'OnMouseClick')
    const nodeInputValue1 = ScriptHelper.createNodeByClass(functionRegistry, mainScriptFunction, ConstantNode, '5')
    const nodeInputValue2 = ScriptHelper.createNodeByClass(functionRegistry, mainScriptFunction, ConstantNode, '4')
    nodeLogFunction.attach(nodeMouseClick, null)
    nodeLogFunction.attach(nodeMultiplyFunction, 'value')
    nodeLogFunction.attach(nodeInputUnit1, 'unit')
    nodeMultiplyFunction.attach(nodeInputValue1, 'numberA')
    nodeMultiplyFunction.attach(nodeInputValue2, 'numberB')
    nodeMultiplyFunction.attach(nodeInputUnit2, 'unit')

    script.compile(world)

    const mouseEventCompiled = functionRegistry.getInstance('classScript.main.OnMouseClick.4')
    expect(mouseEventCompiled).toBeDefined()
    expect(mouseEventCompiled.constructor).toEqual(OnMouseClickEvent)

    console.log = jest.fn()
    mouseEventCompiled.execute(functionRegistry, null, scriptComponent, World.get())
    expect(console.log).toHaveBeenCalledWith(20)
})