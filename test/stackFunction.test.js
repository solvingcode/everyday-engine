import LogFunction from '../src/app/flow/function/native/LogFunction.js'
import AddFunction from '../src/app/flow/function/native/AddFunction.js'
import {expect} from '@jest/globals'
import AEmptyStackFunction from '../src/app/flow/function/AEmptyStackFunction.js'
import StackOperation, {OPERATIONS} from '../src/app/operation/StackOperation.js'
import FunctionRegistry from '../src/app/flow/function/FunctionRegistry.js'
import {CONSTANTS} from '../src/app/operation/StackRegister.js'
import {TYPES} from '../src/app/pobject/AttributeType.js'
import ANode from '../src/app/flow/node/ANode.js'
import FunctionFlow from '../src/app/flow/FunctionFlow.js'
import ClassFlow from '../src/app/flow/ClassFlow.js'
import EventRegistry from '../src/app/flow/event/EventRegistry.js'
import OnMouseClickEvent from '../src/app/flow/event/native/OnMouseClickEvent.js'

test('Execute native function (without output)', function () {
    const log = new LogFunction()
    log.setInputValue('value', 'test')
    log.execute()
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
    func.execute()
    expect(func.getOutputValue()).toBe(null)
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

    //Create target node
    const node = new ANode(FunctionRegistry.get().getFunction('Add'))

    //Create source node 1
    const funcSetValue1 = new AEmptyStackFunction('funcSetValue1')
    funcSetValue1.setOutput(TYPES.NUMBER)
    funcSetValue1.setStack([new StackOperation(OPERATIONS.PUSH, CONSTANTS.RESULT, 20)])
    FunctionRegistry.get().register(funcSetValue1)
    const nodeSetValue1 = new ANode(funcSetValue1)

    //Create source node 2
    const funcSetValue2 = new AEmptyStackFunction('funcSetValue2')
    funcSetValue2.setOutput(TYPES.NUMBER)
    funcSetValue2.setStack([new StackOperation(OPERATIONS.PUSH, CONSTANTS.RESULT, 30)])
    FunctionRegistry.get().register(funcSetValue2)
    const nodeSetValue2 = new ANode(funcSetValue2)

    //Attach output of node1 to value1 of the target node
    node.attach(
        nodeSetValue1,
        node.getElement().getInputId('value1')
    )

    //Attach output of node2 to value2 of the target node
    node.attach(
        nodeSetValue2,
        node.getElement().getInputId('value2')
    )

    flow.addNode(node)
    flow.compile()

    const compiledFunction = FunctionRegistry.get().getFunction('testFlow')
    compiledFunction.execute()
    expect(compiledFunction.getOutputValue()).toBe(50)
})

test('Create and compile class flow', function () {
    FunctionRegistry.get().init([new AddFunction(), new LogFunction()])
    EventRegistry.get().init([new OnMouseClickEvent()])

    const flow = new ClassFlow('classFlow')

    //Create log node
    const nodeLog = new ANode(FunctionRegistry.get().getFunction('Log'))
    flow.addNode(nodeLog)

    //Create add node
    const nodeAdd = new ANode(FunctionRegistry.get().getFunction('Add'))
    flow.addNode(nodeAdd)

    //Create constant node 1
    const funcSetValue1 = new AEmptyStackFunction('funcSetValue1')
    funcSetValue1.setOutput(TYPES.NUMBER)
    funcSetValue1.setStack([new StackOperation(OPERATIONS.PUSH, CONSTANTS.RESULT, 20)])
    FunctionRegistry.get().register(funcSetValue1)
    const nodeSetValue1 = new ANode(funcSetValue1)
    flow.addNode(nodeSetValue1)

    //Create source node 2
    const funcSetValue2 = new AEmptyStackFunction('funcSetValue2')
    funcSetValue2.setOutput(TYPES.NUMBER)
    funcSetValue2.setStack([new StackOperation(OPERATIONS.PUSH, CONSTANTS.RESULT, 30)])
    FunctionRegistry.get().register(funcSetValue2)
    const nodeSetValue2 = new ANode(funcSetValue2)
    flow.addNode(nodeSetValue2)

    //Create event node
    const mouseEvent = EventRegistry.get().getEvent('OnMouseClickEvent')
    const nodeEvent = new ANode(mouseEvent)
    flow.addNode(nodeEvent)

    nodeAdd.attach(nodeSetValue1, nodeAdd.getElement().getInputId('value1'))
    nodeAdd.attach(nodeSetValue2, nodeAdd.getElement().getInputId('value2'))
    nodeLog.attach(nodeAdd, nodeLog.getElement().getInputId('value'))
    nodeLog.attach(nodeEvent, null)

    flow.compile()

    const mouseEventCompiled = EventRegistry.get().getEvent('classFlow.OnMouseClickEvent')
    expect(FunctionRegistry.get().getFunction('classFlow')).toBe(undefined)
    expect(mouseEventCompiled).toBeDefined()

    console.log = jest.fn()
    mouseEventCompiled.execute()
    expect(console.log).toHaveBeenCalledWith(50)
})