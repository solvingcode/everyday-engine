import StackOperation, {OPERATIONS} from '../../operation/StackOperation.js'
import {CONSTANTS} from '../../operation/StackRegister.js'
import AEmptyStackFunction from '../function/AEmptyStackFunction.js'
import AEvent from '../event/AEvent.js'
import Compiler from './Compiler.js'
import ClassScript from '../ClassScript.js'
import AFunction from '../function/AFunction.js'
import AConstant from '../constant/AConstant.js'
import World from '../../world/World.js'
import ACondition from '../condition/ACondition.js'
import SystemError from '../../exception/type/SystemError.js'
import ClientError from '../../exception/type/ClientError.js'
import AKeyCode from '../keycode/AKeyCode.js'
import AVariable from '../variable/AVariable.js'

export default class ClassCompiler extends Compiler {

    /**
     * @override
     */
    run(script) {
        if (!(script instanceof ClassScript)) {
            throw new SystemError(`The given flow is not correct (must be a Class flow)`)
        }
        const nodes = script.getNodes()
        const world = World.get()
        const functionRegistry = world.getFunctionRegistry()
        functionRegistry.removeInstancesByClass(script.getName())

        nodes.forEach((node) => {
            if (node.getInputs().length) {
                const stack = []
                const element = functionRegistry.getInstanceById(node.getSourceId())
                if (!element) {
                    throw new ClientError(`Class Compiler Error: cannot find function ${node.getSourceId()}`)
                }
                const functionName = this.generateFunctionName(script, node, functionRegistry)
                const stackFunction = new AEmptyStackFunction(functionName)
                if (element.getOutput()) {
                    stackFunction.addOutput(element.getOutput().getAttrType())
                }
                node.getInputs().forEach(input => {
                    const sourceNode = script.findNodeById(input.getSourceNodeId())
                    const targetId = input.getTargetId()
                    if (sourceNode) {
                        const sourceElement = functionRegistry.getInstanceById(sourceNode.getSourceId())
                        if (sourceElement instanceof AEvent) {
                            const eventClass = sourceElement.constructor
                            const eventName = this.generateEventName(script, sourceNode, functionRegistry)
                            let sourceEvent = functionRegistry.getInstance(eventName) || new eventClass(eventName)
                            let functionNameCallee = functionName
                            if (element instanceof ACondition) {
                                functionNameCallee = `${functionNameCallee}.Block`
                            }
                            sourceEvent.setStack(sourceEvent.getStack()
                                .concat([new StackOperation(OPERATIONS.CALL, functionNameCallee)]))
                            functionRegistry.register(sourceEvent)
                        } else if (sourceElement instanceof ACondition) {
                            const conditionName = this.generateFunctionName(script, sourceNode, functionRegistry)
                            const newConditionBlock = new AEmptyStackFunction(`${conditionName}.Block`)
                            newConditionBlock.setStack([
                                new StackOperation(OPERATIONS.CALL, conditionName),
                                new StackOperation(OPERATIONS.EXIT, CONSTANTS.RESULT),
                                new StackOperation(OPERATIONS.CALL, functionName)
                            ])
                            functionRegistry.register(newConditionBlock)
                        } else if (sourceElement instanceof AConstant || sourceElement instanceof AKeyCode) {
                            const targetInput = element.findInputById(targetId)
                            stack.push(new StackOperation(OPERATIONS.CALL, sourceElement.getName()))
                            stack.push(new StackOperation(OPERATIONS.PUSH, targetInput.getAttrName(), CONSTANTS.RESULT))
                        } else if (sourceElement instanceof AVariable) {
                            const targetInput = element.findInputById(targetId)
                            stack.push(new StackOperation(OPERATIONS.VAR, sourceElement.getName()))
                            stack.push(new StackOperation(OPERATIONS.PUSH, targetInput.getAttrName(), CONSTANTS.RESULT))
                        }
                        // must be the last condition
                        else if (sourceElement instanceof AFunction) {
                            const targetInput = element.findInputById(targetId)
                            stack.push(new StackOperation(OPERATIONS.CALL, this.generateFunctionName(script, sourceNode, functionRegistry)))
                            stack.push(new StackOperation(OPERATIONS.PUSH, targetInput.getAttrName(), CONSTANTS.RESULT))
                        } else if (element) {
                            throw new SystemError(`Class compiler: ${element.constructor.name} not supported`)
                        }
                    }
                })
                stack.push(new StackOperation(OPERATIONS.CALL, element.getName()))
                stackFunction.setStack(stack)
                world.getFunctionRegistry().register(stackFunction)
            }
        })

        return true
    }

    /**
     * @param {AScript} script
     * @param {ANode} node
     * @param {FunctionRegistry} functionRegistry
     * @return {string}
     */
    generateFunctionName(script, node, functionRegistry) {
        const nodeIndex = script.getNodes().findIndex(pNode => pNode === node)
        const element = functionRegistry.getInstanceById(node.getSourceId())
        if (node.getInputs().length) {
            return `${script.getName()}.${element.getName()}${nodeIndex}`
        } else {
            return element.getName()
        }
    }

    /**
     * @param {AScript} script
     * @param {ANode} node
     * @param {FunctionRegistry} functionRegistry
     * @return {string}
     */
    generateEventName(script, node, functionRegistry){
        const element = functionRegistry.getInstanceById(node.getSourceId())
        return `${script.getName()}.${element.getName()}`
    }
}