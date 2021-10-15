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
import ThenNode from '../src/app/flow/node/ThenNode.js'
import GetVariableNode from '../src/app/flow/node/variable/GetVariableNode.js'
import StringVariableNode from '../src/app/flow/node/variable/StringVariableNode.js'

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

    nodeAdd.attachResultOutput(nodeSetValue1, 'value1')
    nodeAdd.attachResultOutput(nodeSetValue2, 'value2')
    nodeLog.attachResultOutput(nodeAdd, 'value')
    nodeLog.attachPrevNode(nodeEvent)

    script.compile(world)

    const mouseEventCompiled = functionRegistry.getInstance('classScript.main.OnMouseClick.4')
    expect(functionRegistry.getInstance('classScript')).toBe(undefined)
    expect(mouseEventCompiled).toBeDefined()
    expect(mouseEventCompiled.constructor).toEqual(OnMouseClickEvent)

    console.log = jest.fn()
    mouseEventCompiled.execute(functionRegistry, null, null, World.get(), {})
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

    nodeLessThan.attachResultOutput(nodeSetValue1, 'value1')
    nodeLessThan.attachResultOutput(nodeSetValue2, 'value2')
    nodeTrueCondition.attachResultOutput(nodeLessThan, 'target')
    nodeLog.attachResultOutput(nodeSetValue3, 'value')
    nodeLog.attachManagedOutput(nodeTrueCondition)
    nodeTrueCondition.attachPrevNode(nodeEvent)

    script.compile(world)

    const mouseEventCompiled = functionRegistry.getInstance('classScript.main.OnMouseClick.6')
    expect(functionRegistry.getInstance('classScript')).toBe(undefined)
    expect(mouseEventCompiled).toBeDefined()
    expect(mouseEventCompiled.constructor).toEqual(OnMouseClickEvent)

    console.log = jest.fn()
    mouseEventCompiled.execute(functionRegistry, null, null, World.get(), {})
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

    nodeLessThan.attachResultOutput(nodeSetValue1, 'value1')
    nodeLessThan.attachResultOutput(nodeSetValue2, 'value2')
    nodeTrueCondition.attachResultOutput(nodeLessThan, 'target')
    nodeLog.attachResultOutput(nodeSetValue3, 'value')
    nodeLog.attachManagedOutput(nodeTrueCondition)
    nodeTrueCondition.attachPrevNode(nodeEvent)

    script.compile(world)

    const mouseEventCompiled = functionRegistry.getInstance('classScript.main.OnMouseClick.6')
    expect(functionRegistry.getInstance('classScript')).toBe(undefined)
    expect(mouseEventCompiled).toBeDefined()
    expect(mouseEventCompiled.constructor).toEqual(OnMouseClickEvent)

    console.log = jest.fn()
    mouseEventCompiled.execute(functionRegistry, null, null, World.get(), {})
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
    ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, StringVariableNode, 'text')
    const nodeGetVar = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, GetVariableNode, 'text')
    const nodeEvent = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, FunctionNode, 'OnMouseClick')

    nodeLog.attachResultOutput(nodeGetVar, 'value')
    nodeLog.attachPrevNode(nodeEvent)

    script.compile(world)

    const mouseEventCompiled = functionRegistry.getInstance('classScript.main.OnMouseClick.3')
    expect(functionRegistry.getInstance('classScript')).toBe(undefined)
    expect(mouseEventCompiled).toBeDefined()
    expect(mouseEventCompiled.constructor).toEqual(OnMouseClickEvent)

    console.log = jest.fn()
    mouseEventCompiled.execute(functionRegistry, null, scriptComponent, World.get(), {})
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

    nodeArray.attachResultOutput(nodeLength, 'length')
    nodeLoop.attachResultOutput(nodeArray, 'array')
    nodeLoop.attachPrevNode(nodeEvent)
    nodeGetValue.attachResultOutput(nodeLoop, 'attributes')
    nodeGetValue.attachResultOutput(nodeAttributeName, 'name')
    nodeLog.attachResultOutput(nodeGetValue, 'value')
    nodeLog.attachPrevNode(nodeLoop)

    script.compile(world)

    const mouseEventCompiled = functionRegistry.getInstance('classScript.main.OnMouseClick.2')
    expect(functionRegistry.getInstance('classScript')).toBe(undefined)
    expect(mouseEventCompiled).toBeDefined()
    expect(mouseEventCompiled.constructor).toEqual(OnMouseClickEvent)

    console.log = jest.fn()
    mouseEventCompiled.execute(functionRegistry, null, scriptComponent, World.get(), {})
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
    nodeLog.attachResultOutput(nodeInput1, 'value')
    nodeLog.attachPrevNode(nodeOnCall)

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
    nodeLogFunction.attachPrevNode(nodeMouseClick)
    nodeLogFunction.attachResultOutput(nodeInputText, 'text')
    nodeLogFunction.attachResultOutput(nodeInputUnit, 'unit')

    script.compile(world)

    const mouseEventCompiled = functionRegistry.getInstance('classScript.main.OnMouseClick.2')
    expect(mouseEventCompiled).toBeDefined()
    expect(mouseEventCompiled.constructor).toEqual(OnMouseClickEvent)

    console.log = jest.fn()
    mouseEventCompiled.execute(functionRegistry, unitCaller, scriptComponent, World.get(), {})
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
    nodeMultiply.attachResultOutput(nodeInput1, 'value1')
    nodeMultiply.attachResultOutput(nodeInput2, 'value2')
    nodeMultiply.attachPrevNode(nodeOnCall)
    nodeOutput.attachManagedOutput(nodeMultiply)

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
    nodeLogFunction.attachPrevNode(nodeMouseClick)
    nodeLogFunction.attachResultOutput(nodeMultiplyFunction, 'value')
    nodeLogFunction.attachResultOutput(nodeInputUnit1, 'unit')
    nodeMultiplyFunction.attachResultOutput(nodeInputValue1, 'numberA')
    nodeMultiplyFunction.attachResultOutput(nodeInputValue2, 'numberB')
    nodeMultiplyFunction.attachResultOutput(nodeInputUnit2, 'unit')

    script.compile(world)

    const mouseEventCompiled = functionRegistry.getInstance('classScript.main.OnMouseClick.4')
    expect(mouseEventCompiled).toBeDefined()
    expect(mouseEventCompiled.constructor).toEqual(OnMouseClickEvent)

    console.log = jest.fn()
    mouseEventCompiled.execute(functionRegistry, null, scriptComponent, World.get(), {})
    expect(console.log).toHaveBeenCalledWith(20)
})

test('Create and compile class function (with async calls)', async function () {
    const world = World.get()
    const scene = new Scene("Game3")
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

    nodeMultiply.attachResultOutput(nodeInput1, 'value1')
    nodeMultiply.attachResultOutput(nodeInput2, 'value2')
    nodeMultiply.attachPrevNode(nodeOnCall)
    nodeOutput.attachManagedOutput(nodeMultiply)

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
    const nodeThen = ScriptHelper.createNodeByClass(functionRegistry, mainScriptFunction, ThenNode, 'Then')
    const nodeLogFunction = ScriptHelper.createNodeByClass(functionRegistry, mainScriptFunction, FunctionNode, 'Log')
    const nodeMultiplyFunction = ScriptHelper.createNodeByClass(functionRegistry, mainScriptFunction, FunctionNode, 'classScript.testFunction')
    const nodeMouseClick = ScriptHelper.createNodeByClass(functionRegistry, mainScriptFunction, EventNode, 'OnMouseClick')
    const nodeInputValue1 = ScriptHelper.createNodeByClass(functionRegistry, mainScriptFunction, ConstantNode, '5')
    const nodeInputValue2 = ScriptHelper.createNodeByClass(functionRegistry, mainScriptFunction, ConstantNode, '4')
    const nodePromise = ScriptHelper.createNodeByClass(functionRegistry, mainScriptFunction, FunctionNode, 'APromise')

    nodePromise.attachResultOutput(nodeMultiplyFunction, 'target')
    nodePromise.attachPrevNode(nodeMouseClick)
    nodeThen.attachManagedOutput(nodePromise)
    nodeLogFunction.attachPrevNode(nodeThen)
    nodeLogFunction.attachResultOutput(nodeThen, 'value')
    nodeLogFunction.attachResultOutput(nodeInputUnit1, 'unit')
    nodeMultiplyFunction.attachResultOutput(nodeInputValue1, 'numberA')
    nodeMultiplyFunction.attachResultOutput(nodeInputValue2, 'numberB')
    nodeMultiplyFunction.attachResultOutput(nodeInputUnit2, 'unit')

    script.compile(world)

    const mouseEventCompiled = functionRegistry.getInstance('classScript.main.OnMouseClick.5')
    expect(mouseEventCompiled).toBeDefined()
    expect(mouseEventCompiled.constructor).toEqual(OnMouseClickEvent)

    console.log = jest.fn()
    mouseEventCompiled.execute(functionRegistry, null, scriptComponent, World.get(), {})
    await new Promise((r) => setTimeout(r, 2000));
    expect(console.log).toHaveBeenCalledWith(20)
})

test('Create and compile class function (with async calls inside custom function)', async function () {
    const world = World.get()
    const scene = new Scene("Game4")
    world.getSceneManager().tryAdd(scene)
    world.getSceneManager().activate(scene)
    const unit = world.createUnitInstant(AssetUnitInstant, new Vector(), null, 'Empty')
    const unitScriptComponent = unit.createComponent(ScriptComponent)
    unitScriptComponent.setScript('classScript')
    const functionRegistry = world.getFunctionRegistry()

    functionRegistry.init()

    const script = new ClassScript('classScript')
    const multiplyCustomFunction = new FunctionScript('multiplyCustomFunction')
    const promiseCustomFunction = new FunctionScript('promiseCustomFunction')
    const mainScriptFunction = new FunctionScript('main')
    script.addFunction(mainScriptFunction)
    script.addFunction(multiplyCustomFunction)
    script.addFunction(promiseCustomFunction)
    const scriptComponent = new ScriptComponent()

    const nodeMultiply = ScriptHelper.createNodeByClass(functionRegistry, multiplyCustomFunction, FunctionNode, 'Multiply')
    const nodeInput1 = ScriptHelper.createNodeByClass(functionRegistry, multiplyCustomFunction, FunctionInputNode, `numberA[${TYPES.NUMBER}]`)
    const nodeInput2 = ScriptHelper.createNodeByClass(functionRegistry, multiplyCustomFunction, FunctionInputNode, `numberB[${TYPES.NUMBER}]`)
    const nodeOutput = ScriptHelper.createNodeByClass(functionRegistry, multiplyCustomFunction, FunctionOutputNode, `${TYPES.NUMBER}`)
    const nodeOnCall = ScriptHelper.createNodeByClass(functionRegistry, multiplyCustomFunction, EventNode, 'OnCall')

    nodeMultiply.attachResultOutput(nodeInput1, 'value1')
    nodeMultiply.attachResultOutput(nodeInput2, 'value2')
    nodeMultiply.attachPrevNode(nodeOnCall)
    nodeOutput.attachManagedOutput(nodeMultiply)

    const nodePromise = ScriptHelper.createNodeByClass(functionRegistry, promiseCustomFunction, FunctionNode, 'APromise')
    const nodePromiseValue = ScriptHelper.createNodeByClass(functionRegistry, promiseCustomFunction, FunctionInputNode, `value[${TYPES.NUMBER}]`)
    const nodePromiseOutput = ScriptHelper.createNodeByClass(functionRegistry, promiseCustomFunction, FunctionOutputNode, `${TYPES.PROMISE}`)
    const nodePromiseOnCall = ScriptHelper.createNodeByClass(functionRegistry, promiseCustomFunction, EventNode, 'OnCall')

    nodePromise.attachResultOutput(nodePromiseValue, 'target')
    nodePromise.attachPrevNode(nodePromiseOnCall)
    nodePromiseOutput.attachManagedOutput(nodePromise)

    script.compile(world)

    const multiplyFunctionCompiled = functionRegistry.getInstance('classScript.multiplyCustomFunction')
    const multiplyCallEventCompiled = functionRegistry.getInstance('classScript.multiplyCustomFunction.OnCall')
    const promiseFunctionCompiled = functionRegistry.getInstance('classScript.promiseCustomFunction')
    const promiseCallEventCompiled = functionRegistry.getInstance('classScript.promiseCustomFunction.OnCall')
    expect(functionRegistry.getInstance('classScript')).toBe(undefined)
    expect(multiplyCallEventCompiled).toBeDefined()
    expect(multiplyFunctionCompiled).toBeDefined()
    expect(promiseCallEventCompiled).toBeDefined()
    expect(promiseFunctionCompiled).toBeDefined()
    expect(multiplyCallEventCompiled.constructor).toEqual(OnCallEvent)
    expect(multiplyFunctionCompiled.constructor).toEqual(ACustomFunction)
    expect(promiseCallEventCompiled.constructor).toEqual(OnCallEvent)
    expect(promiseFunctionCompiled.constructor).toEqual(ACustomFunction)

    const nodeInputUnit1 = ScriptHelper.createNodeByClass(functionRegistry, mainScriptFunction, ConstantNode, unit.getId())
    const nodeInputUnit2 = ScriptHelper.createNodeByClass(functionRegistry, mainScriptFunction, ConstantNode, unit.getId())
    const nodeThen = ScriptHelper.createNodeByClass(functionRegistry, mainScriptFunction, ThenNode, 'Then')
    const nodeLogFunction = ScriptHelper.createNodeByClass(functionRegistry, mainScriptFunction, FunctionNode, 'Log')
    const nodeMultiplyFunction = ScriptHelper.createNodeByClass(functionRegistry, mainScriptFunction, FunctionNode, 'classScript.multiplyCustomFunction')
    const nodeMouseClick = ScriptHelper.createNodeByClass(functionRegistry, mainScriptFunction, EventNode, 'OnMouseClick')
    const nodeInputValue1 = ScriptHelper.createNodeByClass(functionRegistry, mainScriptFunction, ConstantNode, '5')
    const nodeInputValue2 = ScriptHelper.createNodeByClass(functionRegistry, mainScriptFunction, ConstantNode, '4')
    const nodePromiseFunction = ScriptHelper.createNodeByClass(functionRegistry, mainScriptFunction, FunctionNode, 'classScript.promiseCustomFunction')

    nodePromiseFunction.attachResultOutput(nodeMultiplyFunction, 'value')
    nodePromiseFunction.attachPrevNode(nodeMouseClick)
    nodePromiseFunction.attachResultOutput(nodeInputUnit2, 'unit')
    nodeThen.attachManagedOutput(nodePromiseFunction)
    nodeLogFunction.attachPrevNode(nodeThen)
    nodeLogFunction.attachResultOutput(nodeThen, 'value')
    nodeLogFunction.attachResultOutput(nodeInputUnit1, 'unit')
    nodeMultiplyFunction.attachResultOutput(nodeInputValue1, 'numberA')
    nodeMultiplyFunction.attachResultOutput(nodeInputValue2, 'numberB')
    nodeMultiplyFunction.attachResultOutput(nodeInputUnit2, 'unit')

    script.compile(world)

    const mouseEventCompiled = functionRegistry.getInstance('classScript.main.OnMouseClick.5')
    expect(mouseEventCompiled).toBeDefined()
    expect(mouseEventCompiled.constructor).toEqual(OnMouseClickEvent)

    console.log = jest.fn()
    mouseEventCompiled.execute(functionRegistry, null, scriptComponent, World.get(), {})
    await new Promise((r) => setTimeout(r, 2000));
    expect(console.log).toHaveBeenCalledWith(20)
})

test('Create and compile class flow (order instructions)', function () {
    const world = World.get()
    const functionRegistry = world.getFunctionRegistry()

    functionRegistry.init()

    const script = new ClassScript('classScript')
    const scriptFunction = new FunctionScript('main')
    script.addFunction(scriptFunction)

    const nodeLog1 = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, FunctionNode, 'Log')
    const nodeLog2 = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, FunctionNode, 'Log')
    const nodeAdd = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, FunctionNode, '+')
    const nodeSetValue1 = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, ConstantNode, 20)
    const nodeSetValue2 = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, ConstantNode, 30)
    const nodeSetValue3 = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, ConstantNode, "End")
    const nodeEvent = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, FunctionNode, 'OnMouseClick')

    nodeAdd.attachResultOutput(nodeSetValue1, 'value1')
    nodeAdd.attachResultOutput(nodeSetValue2, 'value2')
    nodeLog1.attachResultOutput(nodeAdd, 'value')
    nodeLog2.attachResultOutput(nodeSetValue3, 'value')
    nodeLog1.attachPrevNode(nodeEvent)
    nodeLog2.attachPrevNode(nodeLog1)

    script.compile(world)

    const mouseEventCompiled = functionRegistry.getInstance('classScript.main.OnMouseClick.6')
    expect(functionRegistry.getInstance('classScript')).toBe(undefined)
    expect(mouseEventCompiled).toBeDefined()
    expect(mouseEventCompiled.constructor).toEqual(OnMouseClickEvent)

    console.log = jest.fn()
    mouseEventCompiled.execute(functionRegistry, null, null, World.get(), {})
    expect(console.log).toHaveBeenCalledWith(50)
    expect(console.log).toHaveBeenCalledWith("End")
})