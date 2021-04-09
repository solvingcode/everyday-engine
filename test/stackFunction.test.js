import LogFunction from '../src/app/flow/function/native/LogFunction.js'
import AddFunction from '../src/app/flow/function/native/AddFunction.js'
import {expect} from '@jest/globals'
import AEmptyStackFunction from '../src/app/flow/function/AEmptyStackFunction.js'
import StackOperation, {OPERATIONS} from '../src/app/operation/StackOperation.js'
import FunctionRegistry from '../src/app/flow/function/FunctionRegistry.js'
import {CONSTANTS} from '../src/app/operation/StackRegister.js'
import {TYPES} from '../src/app/pobject/AttributeType.js'
import FunctionFlow from '../src/app/flow/FunctionFlow.js'
import ClassFlow from '../src/app/flow/ClassFlow.js'
import EventRegistry from '../src/app/flow/event/EventRegistry.js'
import OnMouseClickEvent from '../src/app/flow/event/native/OnMouseClickEvent.js'
import FunctionNode from '../src/app/flow/node/FunctionNode.js'
import EventNode from '../src/app/flow/node/EventNode.js'
import ConstantNode from '../src/app/flow/node/ConstantNode.js'

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
    FunctionRegistry.get().init([new LogFunction(), new AddFunction()])
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
    func.execute()
    expect(console.log).toHaveBeenCalledWith(100)
    expect(func.getOutputValue()).toBe(undefined)
})

test('Execute stack function (with output)', function () {
    FunctionRegistry.get().init([new AddFunction()])
    const func = new AEmptyStackFunction('test')
    func.setOutput(TYPES.NUMBER)
    func.setStack([
        new StackOperation(OPERATIONS.PUSH, 'value1', 20),
        new StackOperation(OPERATIONS.PUSH, 'value2', 30),
        new StackOperation(OPERATIONS.CALL, 'Add'),
        new StackOperation(OPERATIONS.PUSH, 'value1', CONSTANTS.RESULT),
        new StackOperation(OPERATIONS.PUSH, 'value2', 60),
        new StackOperation(OPERATIONS.CALL, 'Add')
    ])
    func.execute()
    expect(func.getOutputValue()).toBe(110)
})

test('Create and compile function flow', function () {
    FunctionRegistry.get().init([new AddFunction()])
    const flow = new FunctionFlow('testFlow')

    const node = new FunctionNode('Add')
    const nodeSetValue1 = new ConstantNode(20)
    const nodeSetValue2 = new ConstantNode(30)

    node.attach(nodeSetValue1, node.getElement().getInputId('value1'))
    node.attach(nodeSetValue2, node.getElement().getInputId('value2'))

    flow.addNode(node)
    flow.compile()

    const compiledFunction = FunctionRegistry.get().getInstance('testFlow')
    compiledFunction.execute()
    expect(compiledFunction.getOutputValue()).toBe(50)
})

test('Create and compile class flow', function () {
    FunctionRegistry.get().init([new AddFunction(), new LogFunction()])
    EventRegistry.get().init([new OnMouseClickEvent()])

    const flow = new ClassFlow('classFlow')

    const nodeLog = new FunctionNode('Log')
    flow.addNode(nodeLog)

    const nodeAdd = new FunctionNode('Add')
    flow.addNode(nodeAdd)

    const nodeSetValue1 = new ConstantNode(20)
    flow.addNode(nodeSetValue1)

    const nodeSetValue2 = new ConstantNode(30)
    flow.addNode(nodeSetValue2)

    const nodeEvent = new EventNode('OnMouseClickEvent')
    flow.addNode(nodeEvent)

    nodeAdd.attach(nodeSetValue1, nodeAdd.getElement().getInputId('value1'))
    nodeAdd.attach(nodeSetValue2, nodeAdd.getElement().getInputId('value2'))
    nodeLog.attach(nodeAdd, nodeLog.getElement().getInputId('value'))
    nodeLog.attach(nodeEvent, null)

    flow.compile()

    const mouseEventCompiled = EventRegistry.get().getInstance('classFlow.OnMouseClickEvent')
    expect(FunctionRegistry.get().getInstance('classFlow')).toBe(undefined)
    expect(mouseEventCompiled).toBeDefined()

    console.log = jest.fn()
    mouseEventCompiled.execute()
    expect(console.log).toHaveBeenCalledWith(50)
})