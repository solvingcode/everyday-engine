import LogFunction from '../src/app/flow/function/native/basic/LogFunction.js'
import AddFunction from '../src/app/flow/function/native/basic/AddFunction.js'
import {expect} from '@jest/globals'
import AEmptyStackFunction from '../src/app/flow/function/AEmptyStackFunction.js'
import StackOperation, {OPERATIONS} from '../src/app/operation/StackOperation.js'
import {CONSTANTS} from '../src/app/operation/StackRegister.js'
import {TYPES} from '../src/app/pobject/AttributeType.js'
import FunctionScript from '../src/app/flow/FunctionScript.js'
import ClassScript from '../src/app/flow/ClassScript.js'
import OnMouseClickEvent from '../src/app/flow/event/native/OnMouseClickEvent.js'
import FunctionNode from '../src/app/flow/node/FunctionNode.js'
import ConstantNode from '../src/app/flow/node/ConstantNode.js'
import World from '../src/app/world/World.js'
import TrueCondition from '../src/app/flow/condition/TrueCondition.js'
import LessThanFunction from '../src/app/flow/function/native/basic/LessThanFunction.js'
import ConditionNode from '../src/app/flow/node/ConditionNode.js'

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
    functionRegistry.init([new LogFunction(), new AddFunction()])
    const func = new AEmptyStackFunction('test')
    func.setInputs([])
    func.setStack([
        new StackOperation(OPERATIONS.PUSH, 'value1', 20),
        new StackOperation(OPERATIONS.PUSH, 'value2', 20),
        new StackOperation(OPERATIONS.CALL, 'Add'),
        new StackOperation(OPERATIONS.PUSH, 'value1', '__result__'),
        new StackOperation(OPERATIONS.PUSH, 'value2', 60),
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
    functionRegistry.init([new AddFunction()])
    const func = new AEmptyStackFunction('test')
    func.addOutput(TYPES.NUMBER)
    func.setStack([
        new StackOperation(OPERATIONS.PUSH, 'value1', 20),
        new StackOperation(OPERATIONS.PUSH, 'value2', 30),
        new StackOperation(OPERATIONS.CALL, 'Add'),
        new StackOperation(OPERATIONS.PUSH, 'value1', CONSTANTS.RESULT),
        new StackOperation(OPERATIONS.PUSH, 'value2', 60),
        new StackOperation(OPERATIONS.CALL, 'Add')
    ])
    func.execute(functionRegistry)
    expect(func.getOutputValue()).toBe(110)
})

test('Create and compile function flow', function () {
    const functionRegistry = World.get().getFunctionRegistry()
    functionRegistry.init([new AddFunction()])
    const script = new FunctionScript('testScript')

    const nodeSetValue1 = script.createNode(functionRegistry, ConstantNode, 20)
    const nodeSetValue2 = script.createNode(functionRegistry, ConstantNode, 30)
    const node = script.createNode(functionRegistry, FunctionNode, 'Add')

    node.attach(nodeSetValue1, functionRegistry.getInstanceById(node.getSourceId()).getInputId('value1'))
    node.attach(nodeSetValue2, functionRegistry.getInstanceById(node.getSourceId()).getInputId('value2'))

    script.compile()

    const compiledFunction = functionRegistry.getInstance('testScript')
    compiledFunction.execute(functionRegistry)
    expect(compiledFunction.getOutputValue()).toBe(50)
})

test('Create and compile class flow', function () {
    const functionRegistry = World.get().getFunctionRegistry()

    functionRegistry.init([new OnMouseClickEvent(), new AddFunction(), new LogFunction()])

    const script = new ClassScript('classScript')

    const nodeLog = script.createNode(functionRegistry, FunctionNode, 'Log')
    const nodeAdd = script.createNode(functionRegistry, FunctionNode, 'Add')
    const nodeSetValue1 = script.createNode(functionRegistry, ConstantNode, 20)
    const nodeSetValue2 = script.createNode(functionRegistry, ConstantNode, 30)
    const nodeEvent = script.createNode(functionRegistry, FunctionNode, 'OnMouseClick')

    nodeAdd.attach(nodeSetValue1, functionRegistry.getInstanceById(nodeAdd.getSourceId()).getInputId('value1'))
    nodeAdd.attach(nodeSetValue2, functionRegistry.getInstanceById(nodeAdd.getSourceId()).getInputId('value2'))
    nodeLog.attach(nodeAdd, functionRegistry.getInstanceById(nodeLog.getSourceId()).getInputId('value'))
    nodeLog.attach(nodeEvent, null)

    script.compile()

    const mouseEventCompiled = functionRegistry.getInstance('classScript.OnMouseClick')
    expect(functionRegistry.getInstance('classScript')).toBe(undefined)
    expect(mouseEventCompiled).toBeDefined()

    console.log = jest.fn()
    mouseEventCompiled.execute(functionRegistry)
    expect(console.log).toHaveBeenCalledWith(50)
})

test('Create and compile class script with success condition', function () {
    const functionRegistry = World.get().getFunctionRegistry()

    functionRegistry.init([
        new OnMouseClickEvent(),
        new LogFunction(),
        new LessThanFunction(),
        new TrueCondition()
    ])

    const script = new ClassScript('classScript')

    const nodeLog = script.createNode(functionRegistry, FunctionNode, 'Log')
    const nodeLessThan = script.createNode(functionRegistry, FunctionNode, 'LessThan')
    const nodeSetValue1 = script.createNode(functionRegistry, ConstantNode, 20)
    const nodeSetValue2 = script.createNode(functionRegistry, ConstantNode, 30)
    const nodeSetValue3 = script.createNode(functionRegistry, ConstantNode, 'correct')
    const nodeTrueCondition = script.createNode(functionRegistry, ConditionNode, 'True')
    const nodeEvent = script.createNode(functionRegistry, FunctionNode, 'OnMouseClick')

    nodeLessThan.attach(nodeSetValue1, functionRegistry.getInstanceById(nodeLessThan.getSourceId()).getInputId('value1'))
    nodeLessThan.attach(nodeSetValue2, functionRegistry.getInstanceById(nodeLessThan.getSourceId()).getInputId('value2'))
    nodeTrueCondition.attach(nodeLessThan, functionRegistry.getInstanceById(nodeTrueCondition.getSourceId()).getInputId('target'))
    nodeLog.attach(nodeSetValue3, functionRegistry.getInstanceById(nodeLog.getSourceId()).getInputId('value'))
    nodeLog.attach(nodeTrueCondition, null)
    nodeTrueCondition.attach(nodeEvent, null)

    script.compile()

    const mouseEventCompiled = functionRegistry.getInstance('classScript.OnMouseClick')
    expect(functionRegistry.getInstance('classScript')).toBe(undefined)
    expect(mouseEventCompiled).toBeDefined()

    console.log = jest.fn()
    mouseEventCompiled.execute(functionRegistry)
    expect(console.log).toHaveBeenCalledWith('correct')
})

test('Create and compile class script with failed condition', function () {
    const functionRegistry = World.get().getFunctionRegistry()

    functionRegistry.init([
        new OnMouseClickEvent(),
        new LogFunction(),
        new LessThanFunction(),
        new TrueCondition()
    ])

    const script = new ClassScript('classScript')

    const nodeLog = script.createNode(functionRegistry, FunctionNode, 'Log')
    const nodeLessThan = script.createNode(functionRegistry, FunctionNode, 'LessThan')
    const nodeSetValue1 = script.createNode(functionRegistry, ConstantNode, 20)
    const nodeSetValue2 = script.createNode(functionRegistry, ConstantNode, 10)
    const nodeSetValue3 = script.createNode(functionRegistry, ConstantNode, 'correct')
    const nodeTrueCondition = script.createNode(functionRegistry, ConditionNode, 'True')
    const nodeEvent = script.createNode(functionRegistry, FunctionNode, 'OnMouseClick')

    nodeLessThan.attach(nodeSetValue1, functionRegistry.getInstanceById(nodeLessThan.getSourceId()).getInputId('value1'))
    nodeLessThan.attach(nodeSetValue2, functionRegistry.getInstanceById(nodeLessThan.getSourceId()).getInputId('value2'))
    nodeTrueCondition.attach(nodeLessThan, functionRegistry.getInstanceById(nodeTrueCondition.getSourceId()).getInputId('target'))
    nodeLog.attach(nodeSetValue3, functionRegistry.getInstanceById(nodeLog.getSourceId()).getInputId('value'))
    nodeLog.attach(nodeTrueCondition, null)
    nodeTrueCondition.attach(nodeEvent, null)

    script.compile()

    const mouseEventCompiled = functionRegistry.getInstance('classScript.OnMouseClick')
    expect(functionRegistry.getInstance('classScript')).toBe(undefined)
    expect(mouseEventCompiled).toBeDefined()

    console.log = jest.fn()
    mouseEventCompiled.execute(functionRegistry)
    expect(console.log).not.toHaveBeenCalledWith('correct')
})