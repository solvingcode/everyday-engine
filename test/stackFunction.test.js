import LogFunction from '../src/app/flow/function/native/LogFunction.js'
import AddFunction from '../src/app/flow/function/native/AddFunction.js'
import {expect} from '@jest/globals'
import AEmptyStackFunction from '../src/app/flow/function/AEmptyStackFunction.js'
import StackOperation, {OPERATIONS} from '../src/app/operation/StackOperation.js'
import FunctionRegistry from '../src/app/flow/function/FunctionRegistry.js'
import {CONSTANTS} from '../src/app/operation/StackRegister.js'
import {TYPES} from '../src/app/pobject/AttributeType.js'

test('Execute native function (without output)', async function () {
    const log = new LogFunction()
    log.setInputValue('value', 'test')
    log.execute()
})

test('Execute native function (with output)', async function () {
    const add = new AddFunction()
    add.setInputValue('value1', 20)
    add.setInputValue('value2', 50)
    add.execute()
    expect(add.getOutputValue('result')).toBe(70)
})

test('Execute stack function (without output)', async function () {
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

test('Execute stack function (with output)', async function () {
    FunctionRegistry.get().init([new AddFunction()])
    const func = new AEmptyStackFunction('test')
    func.setInputs([])
    func.setOutput(TYPES.NUMBER)
    func.setStack([
        new StackOperation(OPERATIONS.PUSH, 'value1', 20),
        new StackOperation(OPERATIONS.PUSH, 'value2', 20),
        new StackOperation(OPERATIONS.CALL, 'Add'),
        new StackOperation(OPERATIONS.PUSH, 'value1', CONSTANTS.RESULT),
        new StackOperation(OPERATIONS.PUSH, 'value2', 60),
        new StackOperation(OPERATIONS.CALL, 'Add')
    ])
    func.execute()
    expect(func.getOutputValue()).toBe(100)
})