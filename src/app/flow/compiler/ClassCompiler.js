import StackOperation, {OPERATIONS} from '../../operation/StackOperation.js'
import {CONSTANTS} from '../../operation/StackRegister.js'
import AEmptyStackFunction from '../function/AEmptyStackFunction.js'
import AEvent from '../event/AEvent.js'
import Compiler from './Compiler.js'
import ClassScript from '../ClassScript.js'
import AFunction from '../function/AFunction.js'
import AConstant from '../constant/AConstant.js'
import World from '../../world/World.js'

export default class ClassCompiler extends Compiler {

    /**
     * @override
     */
    run(script) {
        if (!(script instanceof ClassScript)) {
            throw new TypeError(`The given flow is not correct (must be a Class flow)`)
        }
        const nodes = script.getNodes()
        const world = World.get()
        const functionRegistry = world.getFunctionRegistry()

        nodes.forEach((node) => {
            if (node.getInputs().length) {
                const stack = []
                const element = functionRegistry.getInstanceById(node.getSourceId())
                const functionName = this.generateFunctionName(script, node, functionRegistry)
                const stackFunction = new AEmptyStackFunction(functionName)
                if(element.getOutput()){
                    stackFunction.addOutput(element.getOutput().getAttrType())
                }
                node.getInputs().forEach(input => {
                    const sourceNode = script.findNodeById(input.getSourceNodeId())
                    const targetId = input.getTargetId()
                    if (sourceNode) {
                        const sourceElement = functionRegistry.getInstanceById(sourceNode.getSourceId())
                        if (sourceElement instanceof AEvent) {
                            const eventClass = sourceElement.constructor
                            const newEvent = new eventClass(`${script.getName()}.${sourceElement.getName()}`)
                            newEvent.setStack([new StackOperation(OPERATIONS.CALL, functionName)])
                            world.getFunctionRegistry().register(newEvent)
                        } else if (sourceElement instanceof AFunction) {
                            const targetInput = element.findInputById(targetId)
                            stack.push(new StackOperation(OPERATIONS.CALL, this.generateFunctionName(script, sourceNode, functionRegistry)))
                            stack.push(new StackOperation(OPERATIONS.PUSH, targetInput.getAttrName(), CONSTANTS.RESULT))
                        } else if (sourceElement instanceof AConstant) {
                            const targetInput = element.findInputById(targetId)
                            stack.push(new StackOperation(OPERATIONS.CALL, sourceElement.getName()))
                            stack.push(new StackOperation(OPERATIONS.PUSH, targetInput.getAttrName(), CONSTANTS.RESULT))
                        } else if (element) {
                            throw new TypeError(`Class compiler: ${element.constructor.name} not supported`)
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
}