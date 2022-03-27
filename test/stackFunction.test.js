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
import OperationLogger from '../src/app/operation/logger/OperationLogger.js'
import BranchNode from '../src/app/flow/node/BranchNode.js'
import InputScript from '../src/app/flow/InputScript.js'
import OutputScript from '../src/app/flow/OutputScript.js'
import UnitHelper from '../src/app/utils/UnitHelper.js'
import VariableScript from '../src/app/flow/VariableScript.js'
import GetClassVarNode from '../src/app/flow/node/variable/GetClassVarNode.js'
import SetClassVarNode from '../src/app/flow/node/variable/SetClassVarNode.js'
import GetAttrClassNameNode from '../src/app/flow/node/variable/GetAttrClassNameNode.js'
import SetAttrClassNameNode from '../src/app/flow/node/variable/SetAttrClassNameNode.js'
import AssetHelper from '../src/app/utils/AssetHelper.js'

beforeEach(function () {
    World.get().getCompiledClassRegistry().clear()
})

test('Create and compile class flow', function () {
    const world = World.get()
    const functionRegistry = world.getFunctionRegistry()

    const scriptComponent = new ScriptComponent()
    scriptComponent.setScript('classScript')

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

    UnitHelper.initScript(world,null, scriptComponent)

    const classCompiled = scriptComponent.getCompiledClass()
    OperationLogger.logStack(mouseEventCompiled.getStack())
    console.log(world.getCompiledClassRegistry().getInstance('classScript').getCode())
    console.log = jest.fn()
    classCompiled.OnMouseClick()

    expect(console.log).toHaveBeenCalledWith(50)
})

test('Create and compile class script with success condition', function () {
    const world = World.get()
    const functionRegistry = world.getFunctionRegistry()

    const scriptComponent = new ScriptComponent()
    scriptComponent.setScript('classScript')

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
    nodeLog.attachResultManagedOutput(nodeTrueCondition)
    nodeTrueCondition.attachPrevNode(nodeEvent)

    script.compile(world)

    const mouseEventCompiled = functionRegistry.getInstance('classScript.main.OnMouseClick.6')
    expect(functionRegistry.getInstance('classScript')).toBe(undefined)
    expect(mouseEventCompiled).toBeDefined()
    expect(mouseEventCompiled.constructor).toEqual(OnMouseClickEvent)

    UnitHelper.initScript(world, null, scriptComponent)

    const classCompiled = scriptComponent.getCompiledClass()
    OperationLogger.logStack(mouseEventCompiled.getStack())
    console.log(world.getCompiledClassRegistry().getInstance('classScript').getCode())
    console.log = jest.fn()
    classCompiled.OnMouseClick()

    expect(console.log).toHaveBeenCalledWith('correct')
})

test('Create and compile class script with failed condition', function () {
    const world = World.get()
    const functionRegistry = world.getFunctionRegistry()

    const scriptComponent = new ScriptComponent()
    scriptComponent.setScript('classScript')

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
    nodeLog.attachResultManagedOutput(nodeTrueCondition)
    nodeTrueCondition.attachPrevNode(nodeEvent)

    script.compile(world)

    const mouseEventCompiled = functionRegistry.getInstance('classScript.main.OnMouseClick.6')
    expect(functionRegistry.getInstance('classScript')).toBe(undefined)
    expect(mouseEventCompiled).toBeDefined()
    expect(mouseEventCompiled.constructor).toEqual(OnMouseClickEvent)

    UnitHelper.initScript(world, null, scriptComponent)

    const classCompiled = scriptComponent.getCompiledClass()
    OperationLogger.logStack(mouseEventCompiled.getStack())
    console.log(world.getCompiledClassRegistry().getInstance('classScript').getCode())
    console.log = jest.fn()
    classCompiled.OnMouseClick()

    expect(console.log).not.toHaveBeenCalledWith('correct')
})

test('Create and compile class script with branch (true)', function () {
    const world = World.get()
    const functionRegistry = world.getFunctionRegistry()

    const scriptComponent = new ScriptComponent()
    scriptComponent.setScript('classScript')

    functionRegistry.init()

    const script = new ClassScript('classScript')
    const scriptFunction = new FunctionScript('main')
    script.addFunction(scriptFunction)

    const nodeLogCorrect = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, FunctionNode, 'Log')
    const nodeLogIncorrect = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, FunctionNode, 'Log')
    const nodeLessThan = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, FunctionNode, '<')
    const nodeSetValue1 = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, ConstantNode, 20)
    const nodeSetValue2 = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, ConstantNode, 30)
    const nodeSetValueCorrect = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, ConstantNode, 'correct')
    const nodeSetValueIncorrect = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, ConstantNode, 'incorrect')
    const nodeBranchCondition = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, BranchNode, 'Branch')
    const nodeEvent = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, FunctionNode, 'OnMouseClick')

    nodeLessThan.attachResultOutput(nodeSetValue1, 'value1')
    nodeLessThan.attachResultOutput(nodeSetValue2, 'value2')
    nodeBranchCondition.attachResultOutput(nodeLessThan, 'target')
    nodeLogCorrect.attachResultOutput(nodeSetValueCorrect, 'value')
    nodeLogIncorrect.attachResultOutput(nodeSetValueIncorrect, 'value')
    nodeLogCorrect.attachCustomManagedOutput(nodeBranchCondition, 'true')
    nodeLogIncorrect.attachCustomManagedOutput(nodeBranchCondition, 'false')
    nodeBranchCondition.attachPrevNode(nodeEvent)

    script.compile(world)

    const mouseEventCompiled = functionRegistry.getInstance('classScript.main.OnMouseClick.8')
    expect(functionRegistry.getInstance('classScript')).toBe(undefined)
    expect(mouseEventCompiled).toBeDefined()
    expect(mouseEventCompiled.constructor).toEqual(OnMouseClickEvent)

    UnitHelper.initScript(world, null, scriptComponent)

    const classCompiled = scriptComponent.getCompiledClass()
    OperationLogger.logStack(mouseEventCompiled.getStack())
    console.log(world.getCompiledClassRegistry().getInstance('classScript').getCode())
    console.log = jest.fn()
    classCompiled.OnMouseClick()

    expect(console.log).toHaveBeenCalledWith('correct')
})

test('Create and compile class script with branch (false)', function () {
    const world = World.get()
    const functionRegistry = world.getFunctionRegistry()

    const scriptComponent = new ScriptComponent()
    scriptComponent.setScript('classScript')

    functionRegistry.init()

    const script = new ClassScript('classScript')
    const scriptFunction = new FunctionScript('main')
    script.addFunction(scriptFunction)

    const nodeLogCorrect = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, FunctionNode, 'Log')
    const nodeLogIncorrect = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, FunctionNode, 'Log')
    const nodeLessThan = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, FunctionNode, '<')
    const nodeSetValue1 = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, ConstantNode, 30)
    const nodeSetValue2 = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, ConstantNode, 20)
    const nodeSetValueCorrect = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, ConstantNode, 'correct')
    const nodeSetValueIncorrect = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, ConstantNode, 'incorrect')
    const nodeBranchCondition = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, BranchNode, 'Branch')
    const nodeEvent = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, FunctionNode, 'OnMouseClick')

    nodeLessThan.attachResultOutput(nodeSetValue1, 'value1')
    nodeLessThan.attachResultOutput(nodeSetValue2, 'value2')
    nodeBranchCondition.attachResultOutput(nodeLessThan, 'target')
    nodeLogCorrect.attachResultOutput(nodeSetValueCorrect, 'value')
    nodeLogIncorrect.attachResultOutput(nodeSetValueIncorrect, 'value')
    nodeLogCorrect.attachCustomManagedOutput(nodeBranchCondition, 'true')
    nodeLogIncorrect.attachCustomManagedOutput(nodeBranchCondition, 'false')
    nodeBranchCondition.attachPrevNode(nodeEvent)

    script.compile(world)

    const mouseEventCompiled = functionRegistry.getInstance('classScript.main.OnMouseClick.8')
    expect(functionRegistry.getInstance('classScript')).toBe(undefined)
    expect(mouseEventCompiled).toBeDefined()
    expect(mouseEventCompiled.constructor).toEqual(OnMouseClickEvent)

    UnitHelper.initScript(world, null, scriptComponent)

    const classCompiled = scriptComponent.getCompiledClass()
    OperationLogger.logStack(mouseEventCompiled.getStack())
    console.log(world.getCompiledClassRegistry().getInstance('classScript').getCode())
    console.log = jest.fn()
    classCompiled.OnMouseClick()

    expect(console.log).toHaveBeenCalledWith('incorrect')
})

test('Create and compile class script with variables', function () {
    const world = World.get()
    const functionRegistry = world.getFunctionRegistry()

    functionRegistry.init()

    const script = new ClassScript('classScript')
    const scriptFunction = new FunctionScript('main')
    const scriptVariable = new VariableScript('text', TYPES.STRING, 'test')
    script.addFunction(scriptFunction)
    script.addVariable(scriptVariable)
    const scriptComponent = new ScriptComponent()
    scriptComponent.setVarsAttributes(ScriptHelper.getScriptVars(script, world))
    scriptComponent.setScript('classScript')

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

    UnitHelper.initScript(world, null, scriptComponent)

    const classCompiled = scriptComponent.getCompiledClass()
    OperationLogger.logStack(mouseEventCompiled.getStack())
    console.log(world.getCompiledClassRegistry().getInstance('classScript').getCode())
    console.log = jest.fn()
    classCompiled.OnMouseClick()

    expect(console.log).toHaveBeenCalledWith('test')
})

test('Create and compile class script with loop', function () {
    const world = World.get()
    const functionRegistry = world.getFunctionRegistry()
    const className = 'classScript2'

    functionRegistry.init()

    const script = new ClassScript(className)
    const scriptFunction = new FunctionScript('main')
    script.addFunction(scriptFunction)
    const scriptComponent = new ScriptComponent()
    scriptComponent.setScript(className)

    const nodeLog = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, FunctionNode, 'Log')
    const nodeLoop = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, LoopNode, 'Loop')
    const nodeEvent = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, FunctionNode, 'OnMouseClick')
    const nodeArray = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, FunctionNode, 'Array')
    const nodeLength = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, ConstantNode, 10)

    nodeArray.attachResultOutput(nodeLength, 'length')
    nodeLoop.attachResultOutput(nodeArray, 'array')
    nodeLoop.attachPrevNode(nodeEvent)
    nodeLog.attachCustomOutput(nodeLoop, 'value', 'index')
    nodeLog.attachCustomManagedOutput(nodeLoop, 'body')

    script.compile(world)

    const mouseEventCompiled = functionRegistry.getInstance(`${className}.main.OnMouseClick.2`)
    expect(functionRegistry.getInstance(className)).toBe(undefined)
    expect(mouseEventCompiled).toBeDefined()
    expect(mouseEventCompiled.constructor).toEqual(OnMouseClickEvent)
    console.log(world.getCompiledClassRegistry().getInstance(className).getCode())

    UnitHelper.initScript(world, null, scriptComponent)

    const classCompiled = scriptComponent.getCompiledClass()
    OperationLogger.logStack(mouseEventCompiled.getStack())
    console.log = jest.fn()
    classCompiled.OnMouseClick()

    expect(console.log).toHaveBeenCalledWith(10)
})

test('Create and compile class function (no return)', function () {
    const world = World.get()
    const scene = new Scene('Game')
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

    scriptFunction.getFunctionInputs().push(new InputScript('text', TYPES.STRING))

    const nodeLog = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, FunctionNode, 'Log')
    const nodeInput1 = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, FunctionInputNode, 'Input classScript.testFunction.text')
    const nodeOnCall = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, EventNode, 'OnCall')
    nodeLog.attachResultOutput(nodeInput1, 'value')
    nodeLog.attachPrevNode(nodeOnCall)

    script.compile(world)

    const functionCompiled = functionRegistry.getInstance('classScript.testFunction')
    expect(functionRegistry.getInstance('classScript')).toBe(undefined)
    expect(functionCompiled).toBeDefined()
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

    UnitHelper.initScript(world, unit, unitScriptComponent)

    const classCompiled = unitScriptComponent.getCompiledClass()
    OperationLogger.logStack(mouseEventCompiled.getStack())
    console.log(world.getCompiledClassRegistry().getInstance('classScript').getCode())
    console.log = jest.fn()
    classCompiled.OnMouseClick()

    expect(console.log).toHaveBeenCalledWith('testMessage')
})

test('Create and compile class function (return value)', function () {
    const world = World.get()
    const scene = new Scene('Game2')
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

    scriptFunction.getFunctionInputs().push(new InputScript('numberA', TYPES.NUMBER))
    scriptFunction.getFunctionInputs().push(new InputScript('numberB', TYPES.NUMBER))

    scriptFunction.getFunctionOutputs().push(new OutputScript('result', TYPES.NUMBER))

    const nodeMultiply = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, FunctionNode, 'Multiply')
    const nodeInput1 = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, FunctionInputNode, 'Input classScript.testFunction.numberA')
    const nodeInput2 = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, FunctionInputNode, 'Input classScript.testFunction.numberB')
    const nodeOutput = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, FunctionOutputNode, 'Output classScript.testFunction.result')
    const nodeOnCall = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, EventNode, 'OnCall')
    nodeMultiply.attachResultOutput(nodeInput1, 'value1')
    nodeMultiply.attachResultOutput(nodeInput2, 'value2')
    nodeMultiply.attachPrevNode(nodeOnCall)
    nodeOutput.attachResultManagedOutput(nodeMultiply)

    script.compile(world)

    const functionCompiled = functionRegistry.getInstance('classScript.testFunction')
    expect(functionRegistry.getInstance('classScript')).toBe(undefined)
    expect(functionCompiled).toBeDefined()
    expect(functionCompiled.constructor).toEqual(ACustomFunction)

    const nodeInputUnit = ScriptHelper.createNodeByClass(functionRegistry, mainScriptFunction, SelfNode, '')
    const nodeLogFunction = ScriptHelper.createNodeByClass(functionRegistry, mainScriptFunction, FunctionNode, 'Log')
    const nodeMultiplyFunction = ScriptHelper.createNodeByClass(functionRegistry, mainScriptFunction, FunctionNode, 'classScript.testFunction')
    const nodeMouseClick = ScriptHelper.createNodeByClass(functionRegistry, mainScriptFunction, EventNode, 'OnMouseClick')
    const nodeInputValue1 = ScriptHelper.createNodeByClass(functionRegistry, mainScriptFunction, ConstantNode, '5')
    const nodeInputValue2 = ScriptHelper.createNodeByClass(functionRegistry, mainScriptFunction, ConstantNode, '4')
    nodeLogFunction.attachPrevNode(nodeMouseClick)
    nodeLogFunction.attachResultOutput(nodeMultiplyFunction, 'value')
    nodeMultiplyFunction.attachResultOutput(nodeInputValue1, 'numberA')
    nodeMultiplyFunction.attachResultOutput(nodeInputValue2, 'numberB')
    nodeMultiplyFunction.attachResultOutput(nodeInputUnit, 'unit')

    script.compile(world)

    const mouseEventCompiled = functionRegistry.getInstance('classScript.main.OnMouseClick.3')
    expect(mouseEventCompiled).toBeDefined()
    expect(mouseEventCompiled.constructor).toEqual(OnMouseClickEvent)

    UnitHelper.initScript(world, unit, unitScriptComponent)

    const classCompiled = unitScriptComponent.getCompiledClass()
    OperationLogger.logStack(mouseEventCompiled.getStack())
    console.log(world.getCompiledClassRegistry().getInstance('classScript').getCode())
    console.log = jest.fn()
    classCompiled.OnMouseClick()
    expect(console.log).toHaveBeenCalledWith(20)
})

test('Create and compile class function (with async calls)', async function () {
    const world = World.get()
    const scene = new Scene('Game3')
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

    scriptFunction.getFunctionInputs().push(new InputScript('numberA', TYPES.NUMBER))
    scriptFunction.getFunctionInputs().push(new InputScript('numberB', TYPES.NUMBER))
    scriptFunction.getFunctionOutputs().push(new OutputScript('result', TYPES.NUMBER))

    const nodeMultiply = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, FunctionNode, 'Multiply')
    const nodeInput1 = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, FunctionInputNode, 'Input classScript.testFunction.numberA')
    const nodeInput2 = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, FunctionInputNode, 'Input classScript.testFunction.numberB')
    const nodeOutput = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, FunctionOutputNode, 'Output classScript.testFunction.result')
    const nodeOnCall = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, EventNode, 'OnCall')

    nodeMultiply.attachResultOutput(nodeInput1, 'value1')
    nodeMultiply.attachResultOutput(nodeInput2, 'value2')
    nodeMultiply.attachPrevNode(nodeOnCall)
    nodeOutput.attachResultManagedOutput(nodeMultiply)

    script.compile(world)

    const functionCompiled = functionRegistry.getInstance('classScript.testFunction')
    expect(functionRegistry.getInstance('classScript')).toBe(undefined)
    expect(functionCompiled).toBeDefined()
    expect(functionCompiled.constructor).toEqual(ACustomFunction)

    const nodeInputUnit = ScriptHelper.createNodeByClass(functionRegistry, mainScriptFunction, SelfNode, '')
    const nodeThen = ScriptHelper.createNodeByClass(functionRegistry, mainScriptFunction, ThenNode, 'Then')
    const nodeLogFunction = ScriptHelper.createNodeByClass(functionRegistry, mainScriptFunction, FunctionNode, 'Log')
    const nodeMultiplyFunction = ScriptHelper.createNodeByClass(functionRegistry, mainScriptFunction, FunctionNode, 'classScript.testFunction')
    const nodeMouseClick = ScriptHelper.createNodeByClass(functionRegistry, mainScriptFunction, EventNode, 'OnMouseClick')
    const nodeInputValue1 = ScriptHelper.createNodeByClass(functionRegistry, mainScriptFunction, ConstantNode, '5')
    const nodeInputValue2 = ScriptHelper.createNodeByClass(functionRegistry, mainScriptFunction, ConstantNode, '4')
    const nodePromise = ScriptHelper.createNodeByClass(functionRegistry, mainScriptFunction, FunctionNode, 'APromise')

    nodePromise.attachResultOutput(nodeMultiplyFunction, 'target')
    nodePromise.attachPrevNode(nodeMouseClick)
    nodeThen.attachResultManagedOutput(nodePromise)
    nodeLogFunction.attachPrevNode(nodeThen)
    nodeLogFunction.attachResultOutput(nodeThen, 'value')
    nodeMultiplyFunction.attachResultOutput(nodeInputValue1, 'numberA')
    nodeMultiplyFunction.attachResultOutput(nodeInputValue2, 'numberB')
    nodeMultiplyFunction.attachResultOutput(nodeInputUnit, 'unit')

    script.compile(world)

    const mouseEventCompiled = functionRegistry.getInstance('classScript.main.OnMouseClick.4')
    expect(mouseEventCompiled).toBeDefined()
    expect(mouseEventCompiled.constructor).toEqual(OnMouseClickEvent)

    UnitHelper.initScript(world, unit, unitScriptComponent)

    const classCompiled = unitScriptComponent.getCompiledClass()
    OperationLogger.logStack(mouseEventCompiled.getStack())
    console.log(world.getCompiledClassRegistry().getInstance('classScript').getCode())
    console.log = jest.fn()
    classCompiled.OnMouseClick()
    await new Promise((r) => setTimeout(r, 2000))
    expect(console.log).toHaveBeenCalledWith(20)
})

test('Create and compile class function (with async calls inside custom function)', async function () {
    const world = World.get()
    const scene = new Scene('Game4')
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

    multiplyCustomFunction.getFunctionInputs().push(new InputScript('numberA', TYPES.NUMBER))
    multiplyCustomFunction.getFunctionInputs().push(new InputScript('numberB', TYPES.NUMBER))
    multiplyCustomFunction.getFunctionOutputs().push(new OutputScript('result', TYPES.NUMBER))

    const nodeMultiply = ScriptHelper.createNodeByClass(functionRegistry, multiplyCustomFunction, FunctionNode, 'Multiply')
    const nodeInput1 = ScriptHelper.createNodeByClass(functionRegistry, multiplyCustomFunction, FunctionInputNode, 'Input classScript.multiplyCustomFunction.numberA')
    const nodeInput2 = ScriptHelper.createNodeByClass(functionRegistry, multiplyCustomFunction, FunctionInputNode, 'Input classScript.multiplyCustomFunction.numberB')
    const nodeOutput = ScriptHelper.createNodeByClass(functionRegistry, multiplyCustomFunction, FunctionOutputNode, 'Output classScript.multiplyCustomFunction.result')
    const nodeOnCall = ScriptHelper.createNodeByClass(functionRegistry, multiplyCustomFunction, EventNode, 'OnCall')

    nodeMultiply.attachResultOutput(nodeInput1, 'value1')
    nodeMultiply.attachResultOutput(nodeInput2, 'value2')
    nodeMultiply.attachPrevNode(nodeOnCall)
    nodeOutput.attachResultManagedOutput(nodeMultiply)

    promiseCustomFunction.getFunctionInputs().push(new InputScript('value', TYPES.NUMBER))
    promiseCustomFunction.getFunctionOutputs().push(new OutputScript('result', TYPES.PROMISE))

    const nodePromise = ScriptHelper.createNodeByClass(functionRegistry, promiseCustomFunction, FunctionNode, 'APromise')
    const nodePromiseValue = ScriptHelper.createNodeByClass(functionRegistry, promiseCustomFunction, FunctionInputNode, 'Input classScript.promiseCustomFunction.value')
    const nodePromiseOutput = ScriptHelper.createNodeByClass(functionRegistry, promiseCustomFunction, FunctionOutputNode, 'Output classScript.promiseCustomFunction.result')
    const nodePromiseOnCall = ScriptHelper.createNodeByClass(functionRegistry, promiseCustomFunction, EventNode, 'OnCall')

    nodePromise.attachResultOutput(nodePromiseValue, 'target')
    nodePromise.attachPrevNode(nodePromiseOnCall)
    nodePromiseOutput.attachResultManagedOutput(nodePromise)

    script.compile(world)

    const multiplyFunctionCompiled = functionRegistry.getInstance('classScript.multiplyCustomFunction')
    const promiseFunctionCompiled = functionRegistry.getInstance('classScript.promiseCustomFunction')
    expect(functionRegistry.getInstance('classScript')).toBe(undefined)
    expect(multiplyFunctionCompiled).toBeDefined()
    expect(promiseFunctionCompiled).toBeDefined()
    expect(multiplyFunctionCompiled.constructor).toEqual(ACustomFunction)
    expect(promiseFunctionCompiled.constructor).toEqual(ACustomFunction)

    const nodeInputUnit = ScriptHelper.createNodeByClass(functionRegistry, mainScriptFunction, SelfNode, '')
    const nodeThen = ScriptHelper.createNodeByClass(functionRegistry, mainScriptFunction, ThenNode, 'Then')
    const nodeLogFunction = ScriptHelper.createNodeByClass(functionRegistry, mainScriptFunction, FunctionNode, 'Log')
    const nodeMultiplyFunction = ScriptHelper.createNodeByClass(functionRegistry, mainScriptFunction, FunctionNode, 'classScript.multiplyCustomFunction')
    const nodeMouseClick = ScriptHelper.createNodeByClass(functionRegistry, mainScriptFunction, EventNode, 'OnMouseClick')
    const nodeInputValue1 = ScriptHelper.createNodeByClass(functionRegistry, mainScriptFunction, ConstantNode, '5')
    const nodeInputValue2 = ScriptHelper.createNodeByClass(functionRegistry, mainScriptFunction, ConstantNode, '4')
    const nodePromiseFunction = ScriptHelper.createNodeByClass(functionRegistry, mainScriptFunction, FunctionNode, 'classScript.promiseCustomFunction')

    nodePromiseFunction.attachResultOutput(nodeMultiplyFunction, 'value')
    nodePromiseFunction.attachPrevNode(nodeMouseClick)
    nodePromiseFunction.attachResultOutput(nodeInputUnit, 'unit')
    nodeThen.attachResultManagedOutput(nodePromiseFunction)
    nodeLogFunction.attachPrevNode(nodeThen)
    nodeLogFunction.attachResultOutput(nodeThen, 'value')
    nodeMultiplyFunction.attachResultOutput(nodeInputValue1, 'numberA')
    nodeMultiplyFunction.attachResultOutput(nodeInputValue2, 'numberB')
    nodeMultiplyFunction.attachResultOutput(nodeInputUnit, 'unit')

    script.compile(world)

    const mouseEventCompiled = functionRegistry.getInstance('classScript.main.OnMouseClick.4')
    expect(mouseEventCompiled).toBeDefined()
    expect(mouseEventCompiled.constructor).toEqual(OnMouseClickEvent)

    UnitHelper.initScript(world, unit, unitScriptComponent)

    const classCompiled = unitScriptComponent.getCompiledClass()
    OperationLogger.logStack(mouseEventCompiled.getStack())
    console.log(world.getCompiledClassRegistry().getInstance('classScript').getCode())
    console.log = jest.fn()
    classCompiled.OnMouseClick()
    await new Promise((r) => setTimeout(r, 2000))
    expect(console.log).toHaveBeenCalledWith(20)
})

test('Create and compile class flow (order instructions)', function () {
    const world = World.get()
    const functionRegistry = world.getFunctionRegistry()
    const scene = new Scene('Game5')
    world.getSceneManager().tryAdd(scene)
    world.getSceneManager().activate(scene)
    const unit = world.createUnitInstant(AssetUnitInstant, new Vector(), null, 'Empty')
    const scriptComponent = unit.createComponent(ScriptComponent)
    scriptComponent.setScript('classScript')

    functionRegistry.init()

    const script = new ClassScript('classScript')
    const scriptFunction = new FunctionScript('main')
    script.addFunction(scriptFunction)

    const nodeLog1 = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, FunctionNode, 'Log')
    const nodeLog2 = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, FunctionNode, 'Log')
    const nodeAdd = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, FunctionNode, '+')
    const nodeSetValue1 = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, ConstantNode, 20)
    const nodeSetValue2 = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, ConstantNode, 30)
    const nodeSetValue3 = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, ConstantNode, 'End')
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

    UnitHelper.initScript(world, unit, scriptComponent)

    const classCompiled = scriptComponent.getCompiledClass()
    OperationLogger.logStack(mouseEventCompiled.getStack())
    console.log(world.getCompiledClassRegistry().getInstance('classScript').getCode())
    console.log = jest.fn()
    classCompiled.OnMouseClick()
    expect(console.log).toHaveBeenCalledWith(50)
    expect(console.log).toHaveBeenCalledWith('End')
})

test('Create and compile class flow (with get variables)', function () {
    const world = World.get()
    const functionRegistry = world.getFunctionRegistry()
    const scene = new Scene('Game6')
    world.getSceneManager().tryAdd(scene)
    world.getSceneManager().activate(scene)
    const unit = world.createUnitInstant(AssetUnitInstant, new Vector(), null, 'Empty')
    const scriptComponent = unit.createComponent(ScriptComponent)
    scriptComponent.setScript('classScript')

    functionRegistry.init()

    const script = new ClassScript('classScript')
    const scriptFunction = new FunctionScript('main')
    const scriptVariable = new VariableScript('var', TYPES.STRING)
    script.addFunction(scriptFunction)
    script.addVariable(scriptVariable)

    const nodeLog = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, FunctionNode, 'Log')
    const nodeVar = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, GetClassVarNode, 'Get classScript.var')
    const nodeEvent = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, FunctionNode, 'OnMouseClick')

    nodeLog.attachResultOutput(nodeVar, 'value')
    nodeLog.attachPrevNode(nodeEvent)

    script.compile(world)

    const mouseEventCompiled = functionRegistry.getInstance('classScript.main.OnMouseClick.2')
    expect(functionRegistry.getInstance('classScript')).toBe(undefined)
    expect(mouseEventCompiled).toBeDefined()
    expect(mouseEventCompiled.constructor).toEqual(OnMouseClickEvent)

    scriptComponent.setVarsAttributes([new DynamicAttribute('var', TYPES.STRING, 'test')])

    UnitHelper.initScript(world, unit, scriptComponent)

    const classCompiled = scriptComponent.getCompiledClass()
    OperationLogger.logStack(mouseEventCompiled.getStack())
    console.log(world.getCompiledClassRegistry().getInstance('classScript').getCode())
    console.log = jest.fn()
    classCompiled.OnMouseClick()
    expect(console.log).toHaveBeenCalledWith('test')
})

test('Create and compile class flow (with set variables)', function () {
    const world = World.get()
    const functionRegistry = world.getFunctionRegistry()
    const scene = new Scene('Game9')
    world.getSceneManager().tryAdd(scene)
    world.getSceneManager().activate(scene)
    const unit = world.createUnitInstant(AssetUnitInstant, new Vector(), null, 'Empty')
    const scriptComponent = unit.createComponent(ScriptComponent)
    scriptComponent.setScript('classScript')

    functionRegistry.init()

    const script = new ClassScript('classScript')
    const scriptFunction = new FunctionScript('main')
    const scriptVariable = new VariableScript('var', TYPES.STRING)
    script.addFunction(scriptFunction)
    script.addVariable(scriptVariable)

    const nodeLog = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, FunctionNode, 'Log')
    const nodeSetValue = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, ConstantNode, 'toto')
    const nodeGetVar = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, GetClassVarNode, 'Get classScript.var')
    const nodeSetVar = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, SetClassVarNode, 'Set classScript.var')
    const nodeEvent = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, FunctionNode, 'OnMouseClick')

    nodeSetVar.attachResultOutput(nodeSetValue, 'value')
    nodeLog.attachResultOutput(nodeGetVar, 'value')
    nodeLog.attachPrevNode(nodeSetVar)
    nodeSetVar.attachPrevNode(nodeEvent)

    script.compile(world)

    const mouseEventCompiled = functionRegistry.getInstance('classScript.main.OnMouseClick.4')
    expect(functionRegistry.getInstance('classScript')).toBe(undefined)
    expect(mouseEventCompiled).toBeDefined()
    expect(mouseEventCompiled.constructor).toEqual(OnMouseClickEvent)

    scriptComponent.setVarsAttributes([new DynamicAttribute('var', TYPES.STRING, 'test')])

    UnitHelper.initScript(world, unit, scriptComponent)

    const classCompiled = scriptComponent.getCompiledClass()
    OperationLogger.logStack(mouseEventCompiled.getStack())
    console.log(world.getCompiledClassRegistry().getInstance('classScript').getCode())
    console.log = jest.fn()
    classCompiled.OnMouseClick()
    expect(console.log).toHaveBeenCalledWith('toto')
})

test('Create and compile class flow (with set variables)', function () {
    const world = World.get()
    const functionRegistry = world.getFunctionRegistry()
    const scene = new Scene('Game7')
    world.getSceneManager().tryAdd(scene)
    world.getSceneManager().activate(scene)
    const unit = world.createUnitInstant(AssetUnitInstant, new Vector(), null, 'Empty')
    const scriptComponent = unit.createComponent(ScriptComponent)
    scriptComponent.setScript('classScript')

    functionRegistry.init()

    const script = new ClassScript('classScript')
    const scriptFunction = new FunctionScript('main')
    const scriptVariable = new VariableScript('var', TYPES.STRING)
    script.addFunction(scriptFunction)
    script.addVariable(scriptVariable)

    const nodeLog = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, FunctionNode, 'Log')
    const nodeSetValue = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, ConstantNode, 'toto')
    const nodeGetVar = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, GetClassVarNode, 'Get classScript.var')
    const nodeSetVar = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, SetClassVarNode, 'Set classScript.var')
    const nodeEvent = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, FunctionNode, 'OnMouseClick')

    nodeSetVar.attachResultOutput(nodeSetValue, 'value')
    nodeLog.attachResultOutput(nodeGetVar, 'value')
    nodeLog.attachPrevNode(nodeSetVar)
    nodeSetVar.attachPrevNode(nodeEvent)

    script.compile(world)

    const mouseEventCompiled = functionRegistry.getInstance('classScript.main.OnMouseClick.4')
    expect(functionRegistry.getInstance('classScript')).toBe(undefined)
    expect(mouseEventCompiled).toBeDefined()
    expect(mouseEventCompiled.constructor).toEqual(OnMouseClickEvent)

    scriptComponent.setVarsAttributes([new DynamicAttribute('var', TYPES.STRING, 'test')])

    UnitHelper.initScript(world, unit, scriptComponent)

    const classCompiled = scriptComponent.getCompiledClass()
    OperationLogger.logStack(mouseEventCompiled.getStack())
    console.log(world.getCompiledClassRegistry().getInstance('classScript').getCode())
    console.log = jest.fn()
    classCompiled.OnMouseClick()
    expect(console.log).toHaveBeenCalledWith('toto')
})

test('Create and compile class flow (with public variables)', function () {
    const world = World.get()
    const functionRegistry = world.getFunctionRegistry()
    const scene = new Scene('Game8')
    world.getSceneManager().tryAdd(scene)
    world.getSceneManager().activate(scene)
    const unit = world.createUnitInstant(AssetUnitInstant, new Vector(), null, 'Empty')
    const scriptComponent = unit.createComponent(ScriptComponent)
    scriptComponent.setScript('classScript')

    functionRegistry.init()

    const script = new ClassScript('classScript')
    const scriptFunction = new FunctionScript('main')
    const scriptVariable = new VariableScript('var', TYPES.STRING)
    script.addFunction(scriptFunction)
    script.addVariable(scriptVariable)

    const nodeLog = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, FunctionNode, 'Log')
    const nodeSetValue = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, ConstantNode, 'toto')
    const nodeUnit = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, SelfNode, '')
    const nodeGetVar = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, GetAttrClassNameNode, 'Get classScript.var (public)')
    const nodeSetVar = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, SetAttrClassNameNode, 'Set classScript.var (public)')
    const nodeEvent = ScriptHelper.createNodeByClass(functionRegistry, scriptFunction, FunctionNode, 'OnMouseClick')

    nodeSetVar.attachResultOutput(nodeSetValue, 'value')
    nodeSetVar.attachResultOutput(nodeUnit, 'target')
    nodeGetVar.attachResultOutput(nodeUnit, 'target')
    nodeLog.attachResultOutput(nodeGetVar, 'value')
    nodeLog.attachPrevNode(nodeSetVar)
    nodeSetVar.attachPrevNode(nodeEvent)

    script.compile(world)

    const mouseEventCompiled = functionRegistry.getInstance('classScript.main.OnMouseClick.5')
    expect(functionRegistry.getInstance('classScript')).toBe(undefined)
    expect(mouseEventCompiled).toBeDefined()
    expect(mouseEventCompiled.constructor).toEqual(OnMouseClickEvent)

    scriptComponent.setVarsAttributes([new DynamicAttribute('var', TYPES.STRING, 'test')])

    UnitHelper.initScript(world, unit, scriptComponent)

    const classCompiled = scriptComponent.getCompiledClass()
    OperationLogger.logStack(mouseEventCompiled.getStack())
    console.log(world.getCompiledClassRegistry().getInstance('classScript').getCode())
    console.log = jest.fn()
    classCompiled.OnMouseClick()
    expect(console.log).toHaveBeenCalledWith('toto')
})