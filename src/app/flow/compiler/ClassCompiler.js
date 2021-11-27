import StackOperation, {OPERATIONS} from '../../operation/StackOperation.js'
import AEvent from '../event/AEvent.js'
import Compiler from './Compiler.js'
import ClassScript from '../ClassScript.js'
import SystemError from '../../exception/type/SystemError.js'
import ClientError from '../../exception/type/ClientError.js'
import NodeHelper from '../../utils/NodeHelper.js'
import AStackFunction from '../function/AStackFunction.js'
import ScriptHelper from '../../utils/ScriptHelper.js'
import ACustomFunction from '../function/custom/ACustomFunction.js'
import FunctionInputNode from '../node/FunctionInputNode.js'
import FunctionOutputNode from '../node/FunctionOutputNode.js'
import DynamicAttribute from '../../pobject/DynamicAttribute.js'
import {TYPES} from '../../pobject/AttributeType.js'
import OnCallEvent from '../event/native/OnCallEvent.js'
import FunctionCompiler, {STEPS} from './FunctionCompiler.js'
import ContextCompiler from './ContextCompiler.js'
import OnInitEvent from '../event/native/OnInitEvent.js'
import GetVarValueFunction from '../function/native/component/GetVarValueFunction.js'
import AAnimation from '../animation/AAnimation.js'

export default class ClassCompiler extends Compiler {

    /**
     * @override
     */
    run(script, world) {
        if (!(script instanceof ClassScript)) {
            throw new SystemError(`The given script is not correct (must be a Class script)`)
        }
        const functionRegistry = world.getFunctionRegistry()
        functionRegistry.removeInstancesByClass(script.getName())
        const functionCompiler = FunctionCompiler.get()

        //clean and recreate function instance
        script.getFunctions().forEach(scriptFunction => {
            const scriptFunctionName = `${script.getName()}.${scriptFunction.getName()}`
            if (!scriptFunction.isMain()) {
                const nodeInputs = scriptFunction.findNodesByClass(FunctionInputNode)
                const nodeOutputs = scriptFunction.findNodesByClass(FunctionOutputNode)
                const functionInputs = [
                    new DynamicAttribute('unit', TYPES.UNIT),
                    ...nodeInputs.map(nodeInput => NodeHelper.getAttributeFromNodeFunctionInput(nodeInput, world))
                ]
                const functionOutput = !!nodeOutputs.length ? NodeHelper.getAttributeFromNodeFunctionOutput(nodeOutputs[0], world) : null
                const stackScriptFunction = new ACustomFunction(scriptFunctionName, functionInputs, functionOutput)
                stackScriptFunction.setAccess(scriptFunction.getAccess())
                stackScriptFunction.setClassName(script.getName())
                stackScriptFunction.setParentClassName(script.getParentName())
                stackScriptFunction.setStack([
                    new StackOperation(OPERATIONS.CALL, `${scriptFunctionName}.OnCall`)
                ])
                functionRegistry.tryRegister(stackScriptFunction)
            }
        })

        //create OnInitEvent
        const mainFunction = script.getMainFunction()
        const onInitEvent = new OnInitEvent(`${script.getName()}.${mainFunction.getName()}.OnInit`)
        const getVarValueFunction = new GetVarValueFunction()
        onInitEvent.setClassName(script.getName())
        const nodeVars = ScriptHelper.getScriptVars(script, world)
        nodeVars.forEach((variable) => {
            onInitEvent.getStack().push(...[
                new StackOperation(OPERATIONS.PUSH, 'variable', variable.getAttrName()),
                new StackOperation(OPERATIONS.CALL, getVarValueFunction.getName()),
                new StackOperation(OPERATIONS.SET, variable.getAttrName()),
            ])
        })
        functionRegistry.tryRegister(onInitEvent)

        //compile stack function
        script.getFunctions().forEach(scriptFunction => {
            const nodes = scriptFunction.getNodes()
            nodes.forEach((node) => {
                const element = NodeHelper.getSourceNode(node, world)
                if (!element) {
                    throw new ClientError(`Class Compiler Error: cannot find function ${node.getSourceName()}`)
                }
                if (!functionRegistry.getInstance(element.getName()) && !(element instanceof AStackFunction)) {
                    throw new ClientError(`Class Compiler Error: function ${node.getSourceName()} not a registered function nor stack function`)
                }
                const stackFunction = ScriptHelper.createStackFunction(script, scriptFunction, node, world)
                stackFunction.setScopeFunctionName(scriptFunction.getName())
                stackFunction.setClassName(script.getName())
                if (element.getOutput()) {
                    stackFunction.addOutput(element.getOutput().getAttrType())
                }
                functionRegistry.tryRegister(stackFunction)
            })
        })

        script.getFunctions().forEach(scriptFunction => {
            const nodes = scriptFunction.getNodes()
            const scriptFunctionName = `${script.getName()}.${scriptFunction.getName()}`

            //complete compiling function
            nodes.forEach((node) => {
                const element = NodeHelper.getSourceNode(node, world)
                const functionName = ScriptHelper.generateFunctionName(script, scriptFunction, node, world)
                const stackFunction = functionRegistry.getInstance(functionName)
                functionCompiler.run(element, new ContextCompiler(script, node, null, null,
                    element, stackFunction, null, world, scriptFunction, scriptFunctionName, null,
                    null, functionName),
                    STEPS.ZERO)
            })

            //compile associations
            scriptFunction.getInputs().forEach(input => {
                const node = scriptFunction.findNodeById(input.getNodeId())
                const functionName = ScriptHelper.generateFunctionName(script, scriptFunction, node, world)
                const element = NodeHelper.getSourceNode(node, world)
                const sourceNode = scriptFunction.findNodeById(input.getSourceNodeId())
                const stackFunction = functionRegistry.getInstance(functionName)
                if (sourceNode) {
                    const sourceElement = NodeHelper.getSourceNode(sourceNode, world)
                    const sourceElementName = ScriptHelper.generateFunctionName(script, scriptFunction, sourceNode, world)
                    const sourceStackFunction = functionRegistry.getInstance(sourceElementName)
                    functionCompiler.run(sourceElement, new ContextCompiler(script, node, input, sourceElement,
                        element, stackFunction, sourceNode, world, scriptFunction, scriptFunctionName, sourceElementName,
                        sourceStackFunction, functionName),
                        STEPS.ONE)
                }
            })

            //complete compiling function
            nodes.forEach((node) => {
                const element = NodeHelper.getSourceNode(node, world)
                const functionName = ScriptHelper.generateFunctionName(script, scriptFunction, node, world)
                const stackFunction = functionRegistry.getInstance(functionName)
                functionCompiler.run(element, new ContextCompiler(script, node, null, null,
                    element, stackFunction, null, world, scriptFunction, scriptFunctionName, null,
                    null, functionName),
                    STEPS.TWO)
            })

            //complete compiling associations
            scriptFunction.getInputs().forEach(input => {
                const node = scriptFunction.findNodeById(input.getNodeId())
                const element = NodeHelper.getSourceNode(node, world)
                const functionName = ScriptHelper.generateFunctionName(script, scriptFunction, node, world)
                const stackFunction = functionRegistry.getInstance(functionName)
                const sourceNode = scriptFunction.findNodeById(input.getSourceNodeId())
                if (sourceNode) {
                    const sourceElement = NodeHelper.getSourceNode(sourceNode, world)
                    const sourceElementName = ScriptHelper.generateFunctionName(script, scriptFunction, sourceNode, world)
                    const sourceStackFunction = functionRegistry.getInstance(sourceElementName)
                    functionCompiler.run(element, new ContextCompiler(script, node, input, sourceElement,
                        element, stackFunction, sourceNode, world, scriptFunction, scriptFunctionName, sourceElementName,
                        sourceStackFunction, functionName),
                        STEPS.THREE)
                }
            })

            //complete compiling associations
            scriptFunction.getInputs().forEach(input => {
                const node = scriptFunction.findNodeById(input.getNodeId())
                const element = NodeHelper.getSourceNode(node, world)
                const functionName = ScriptHelper.generateFunctionName(script, scriptFunction, node, world)
                const stackFunction = functionRegistry.getInstance(functionName)
                const sourceNode = scriptFunction.findNodeById(input.getSourceNodeId())
                if (sourceNode) {
                    const sourceElement = NodeHelper.getSourceNode(sourceNode, world)
                    const sourceElementName = ScriptHelper.generateFunctionName(script, scriptFunction, sourceNode, world)
                    const sourceStackFunction = functionRegistry.getInstance(sourceElementName)
                    functionCompiler.run(sourceElement, new ContextCompiler(script, node, input, sourceElement,
                        element, stackFunction, sourceNode, world, scriptFunction, scriptFunctionName, sourceElementName,
                        sourceStackFunction, functionName),
                        STEPS.FOUR)
                }
            })

            //complete compiling associations
            scriptFunction.getInputs().forEach(input => {
                const node = scriptFunction.findNodeById(input.getNodeId())
                const element = NodeHelper.getSourceNode(node, world)
                const functionName = ScriptHelper.generateFunctionName(script, scriptFunction, node, world)
                const stackFunction = functionRegistry.getInstance(functionName)
                const sourceNode = scriptFunction.findNodeById(input.getSourceNodeId())
                const sourceElement = NodeHelper.getSourceNode(sourceNode, world)
                if (sourceNode) {
                    const sourceElementName = ScriptHelper.generateFunctionName(script, scriptFunction, sourceNode, world)
                    const sourceStackFunction = functionRegistry.getInstance(sourceElementName)
                    functionCompiler.run(sourceElement, new ContextCompiler(script, node, input, sourceElement,
                        element, stackFunction, sourceNode, world, scriptFunction, scriptFunctionName, sourceElementName,
                        sourceStackFunction, functionName),
                        STEPS.FIVE)
                }
            })

        })

        this.optimize(script, world)

        return true
    }

    /**
     * @param {AScript} script
     * @param {World} world
     */
    optimize(script, world) {
        const functionRegistry = world.getFunctionRegistry()
        const classInstances = functionRegistry.getInstancesByClass(script.getName())
        const functionsToOptimize = [].concat(classInstances.filter(instance => instance instanceof AEvent))
            .concat(classInstances.filter(instance => instance instanceof ACustomFunction))
            .concat(classInstances.filter(instance => instance instanceof AAnimation))
        functionsToOptimize.forEach(event => {
            event.setStack(this.getOptimizedStack(event, world))
        })
        classInstances.filter(instance => (instance.isOptimized() || !instance.isValidated()) &&
            !(instance instanceof ACustomFunction))
            .forEach(instance => functionRegistry.removeInstance(instance))
    }

    /**
     * @param {AFunction} aFunction
     * @param {World} world
     * @return {StackOperation[]}
     */
    getOptimizedStack(aFunction, world) {
        const functionRegistry = world.getFunctionRegistry()
        aFunction.setValidated(true)
        return aFunction.getStack().reduce((optimizeStack, stackOperation) => {
            const operation = stackOperation.getOperation()
            const args = stackOperation.getArgs()
            if (operation === OPERATIONS.CALL || operation === OPERATIONS.THEN) {
                const calledFunctionName = args && args[0]
                const stackFunction = functionRegistry.getInstance(calledFunctionName)
                if (operation === OPERATIONS.CALL && ((stackFunction instanceof AStackFunction &&
                    !(stackFunction instanceof ACustomFunction) &&
                    !(stackFunction instanceof AAnimation))
                    || stackFunction instanceof OnCallEvent)) {
                    stackFunction.setOptimized(true)
                    return [...optimizeStack, ...this.getOptimizedStack(stackFunction, world)]
                } else if (operation === OPERATIONS.THEN) {
                    stackFunction.setValidated(true)
                }
            }
            return [...optimizeStack, stackOperation]
        }, [])
    }

}