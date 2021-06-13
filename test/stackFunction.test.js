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
        new StackOperation(OPERATIONS.CALL, 'Add'),
        new StackOperation(OPERATIONS.PUSH, 'value1', '__result__'),
        new StackOperation(OPERATIONS.PUSH, 'value2', '60'),
        new StackOperation(OPERATIONS.CALL, 'Add'),
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
        new StackOperation(OPERATIONS.CALL, 'Add'),
        new StackOperation(OPERATIONS.PUSH, 'value1', CONSTANTS.RESULT),
        new StackOperation(OPERATIONS.PUSH, 'value2', '60'),
        new StackOperation(OPERATIONS.CALL, 'Add')
    ])
    func.execute(functionRegistry)
    expect(func.getOutputValue()).toBe(110)
})

test('Create and compile function flow', function () {
    const functionRegistry = World.get().getFunctionRegistry()
    functionRegistry.init()
    const script = new FunctionScript('testScript')

    const nodeSetValue1 = script.createNode(functionRegistry, ConstantNode, 20)
    const nodeSetValue2 = script.createNode(functionRegistry, ConstantNode, 30)
    const node = script.createNode(functionRegistry, FunctionNode, 'Add')

    node.attach(nodeSetValue1, 'value1')
    node.attach(nodeSetValue2, 'value2')

    script.compile()

    const compiledFunction = functionRegistry.getInstance('testScript')
    compiledFunction.execute(functionRegistry, null, null, World.get())
    expect(compiledFunction.getOutputValue()).toBe(50)
})

test('Create and compile class flow', function () {
    const functionRegistry = World.get().getFunctionRegistry()

    functionRegistry.init()

    const script = new ClassScript('classScript')

    const nodeLog = script.createNode(functionRegistry, FunctionNode, 'Log')
    const nodeAdd = script.createNode(functionRegistry, FunctionNode, 'Add')
    const nodeSetValue1 = script.createNode(functionRegistry, ConstantNode, 20)
    const nodeSetValue2 = script.createNode(functionRegistry, ConstantNode, 30)
    const nodeEvent = script.createNode(functionRegistry, FunctionNode, 'OnMouseClick')

    nodeAdd.attach(nodeSetValue1, 'value1')
    nodeAdd.attach(nodeSetValue2, 'value2')
    nodeLog.attach(nodeAdd, 'value')
    nodeLog.attach(nodeEvent, null)

    script.compile()

    const mouseEventCompiled = functionRegistry.getInstance('classScript.OnMouseClick4')
    expect(functionRegistry.getInstance('classScript')).toBe(undefined)
    expect(mouseEventCompiled).toBeDefined()
    expect(mouseEventCompiled.constructor).toEqual(OnMouseClickEvent)

    console.log = jest.fn()
    mouseEventCompiled.execute(functionRegistry, null, null, World.get())
    expect(console.log).toHaveBeenCalledWith(50)
})

test('Create and compile class script with success condition', function () {
    const functionRegistry = World.get().getFunctionRegistry()

    functionRegistry.init()

    const script = new ClassScript('classScript')

    const nodeLog = script.createNode(functionRegistry, FunctionNode, 'Log')
    const nodeLessThan = script.createNode(functionRegistry, FunctionNode, '<')
    const nodeSetValue1 = script.createNode(functionRegistry, ConstantNode, 20)
    const nodeSetValue2 = script.createNode(functionRegistry, ConstantNode, 30)
    const nodeSetValue3 = script.createNode(functionRegistry, ConstantNode, 'correct')
    const nodeTrueCondition = script.createNode(functionRegistry, ConditionNode, 'True')
    const nodeEvent = script.createNode(functionRegistry, FunctionNode, 'OnMouseClick')

    nodeLessThan.attach(nodeSetValue1, 'value1')
    nodeLessThan.attach(nodeSetValue2, 'value2')
    nodeTrueCondition.attach(nodeLessThan, 'target')
    nodeLog.attach(nodeSetValue3, 'value')
    nodeLog.attach(nodeTrueCondition, null)
    nodeTrueCondition.attach(nodeEvent, null)

    script.compile()

    const mouseEventCompiled = functionRegistry.getInstance('classScript.OnMouseClick6')
    expect(functionRegistry.getInstance('classScript')).toBe(undefined)
    expect(mouseEventCompiled).toBeDefined()
    expect(mouseEventCompiled.constructor).toEqual(OnMouseClickEvent)

    console.log = jest.fn()
    mouseEventCompiled.execute(functionRegistry, null, null, World.get())
    expect(console.log).toHaveBeenCalledWith('correct')
})

test('Create and compile class script with failed condition', function () {
    const functionRegistry = World.get().getFunctionRegistry()

    functionRegistry.init()

    const script = new ClassScript('classScript')

    const nodeLog = script.createNode(functionRegistry, FunctionNode, 'Log')
    const nodeLessThan = script.createNode(functionRegistry, FunctionNode, '<')
    const nodeSetValue1 = script.createNode(functionRegistry, ConstantNode, 20)
    const nodeSetValue2 = script.createNode(functionRegistry, ConstantNode, 10)
    const nodeSetValue3 = script.createNode(functionRegistry, ConstantNode, 'correct')
    const nodeTrueCondition = script.createNode(functionRegistry, ConditionNode, 'True')
    const nodeEvent = script.createNode(functionRegistry, FunctionNode, 'OnMouseClick')

    nodeLessThan.attach(nodeSetValue1, 'value1')
    nodeLessThan.attach(nodeSetValue2, 'value2')
    nodeTrueCondition.attach(nodeLessThan, 'target')
    nodeLog.attach(nodeSetValue3, 'value')
    nodeLog.attach(nodeTrueCondition, null)
    nodeTrueCondition.attach(nodeEvent, null)

    script.compile()

    const mouseEventCompiled = functionRegistry.getInstance('classScript.OnMouseClick6')
    expect(functionRegistry.getInstance('classScript')).toBe(undefined)
    expect(mouseEventCompiled).toBeDefined()
    expect(mouseEventCompiled.constructor).toEqual(OnMouseClickEvent)

    console.log = jest.fn()
    mouseEventCompiled.execute(functionRegistry, null, null, World.get())
    expect(console.log).not.toHaveBeenCalledWith('correct')
})

test('Create and compile class script with variables', function () {
    const functionRegistry = World.get().getFunctionRegistry()

    functionRegistry.init()

    const script = new ClassScript('classScript')
    const scriptComponent = new ScriptComponent()
    scriptComponent.setVarsAttributes([new DynamicAttribute('text', TYPES.STRING, 'test')])

    const nodeLog = script.createNode(functionRegistry, FunctionNode, 'Log')
    const nodeVar = script.createNode(functionRegistry, StringVariableNode, 'text')
    const nodeEvent = script.createNode(functionRegistry, FunctionNode, 'OnMouseClick')

    nodeLog.attach(nodeVar, 'value')
    nodeLog.attach(nodeEvent, null)

    script.compile()

    const mouseEventCompiled = functionRegistry.getInstance('classScript.OnMouseClick2')
    expect(functionRegistry.getInstance('classScript')).toBe(undefined)
    expect(mouseEventCompiled).toBeDefined()
    expect(mouseEventCompiled.constructor).toEqual(OnMouseClickEvent)

    console.log = jest.fn()
    mouseEventCompiled.execute(functionRegistry, null, scriptComponent, World.get())
    expect(console.log).toHaveBeenCalledWith('test')
})