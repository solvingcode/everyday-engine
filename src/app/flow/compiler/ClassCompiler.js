import StackOperation, {OPERATIONS} from '../../operation/StackOperation.js'
import {CONSTANTS} from '../../operation/StackRegister.js'
import AEmptyStackFunction from '../function/AEmptyStackFunction.js'
import AEvent from '../event/AEvent.js'
import FunctionRegistry from '../function/FunctionRegistry.js'
import Compiler from './Compiler.js'
import ClassFlow from '../ClassFlow.js'
import EventRegistry from '../event/EventRegistry.js'
import AFunction from '../function/AFunction.js'
import AConstant from '../constant/AConstant.js'
import DynamicAttributeHelper from '../../utils/DynamicAttributeHelper.js'

export default class ClassCompiler extends Compiler {

    /**
     * @override
     */
    run(flow) {
        if (!(flow instanceof ClassFlow)) {
            throw new TypeError(`The given flow is not correct (must be a Class flow)`)
        }
        const nodes = flow.getNodes()

        nodes.forEach((node) => {
            if (node.getInputs().length) {
                const stack = []
                const element = node.getElement()
                const functionName = this.generateFunctionName(flow, node)
                const stackFunction = new AEmptyStackFunction(functionName)
                if(element.getOutput()){
                    stackFunction.setOutput(element.getOutput().getAttrType())
                }
                node.getInputs().forEach(input => {
                    const {targetId, sourceNode} = input
                    if (sourceNode) {
                        const sourceElement = sourceNode.getElement()
                        if (sourceElement instanceof AEvent) {
                            const eventClass = sourceElement.constructor
                            const newEvent = new eventClass(`${flow.getName()}.${sourceElement.getName()}`)
                            newEvent.setStack([new StackOperation(OPERATIONS.CALL, functionName)])
                            EventRegistry.get().register(newEvent)
                        } else if (sourceElement instanceof AFunction) {
                            const targetInput = node.getElement().findInputById(targetId)
                            stack.push(new StackOperation(OPERATIONS.CALL, this.generateFunctionName(flow, sourceNode)))
                            stack.push(new StackOperation(OPERATIONS.PUSH, targetInput.getAttrName(), CONSTANTS.RESULT))
                        }else if(!_.isObject(sourceElement)){
                            const constant = new AConstant(DynamicAttributeHelper.findTypeOfValue(sourceElement), sourceElement)
                            FunctionRegistry.get().register(constant)
                            const targetInput = node.getElement().findInputById(targetId)
                            stack.push(new StackOperation(OPERATIONS.CALL, constant.getName()))
                            stack.push(new StackOperation(OPERATIONS.PUSH, targetInput.getAttrName(), CONSTANTS.RESULT))
                        } else if (element) {
                            throw new TypeError(`Class compiler: ${element.constructor.name} not supported`)
                        }
                    }
                })
                stack.push(new StackOperation(OPERATIONS.CALL, node.getElement().getName()))
                stackFunction.setStack(stack)
                FunctionRegistry.get().register(stackFunction)
            }
        })
    }

    /**
     * @param {AFlow} flow
     * @param {ANode} node
     * @return {string}
     */
    generateFunctionName(flow, node) {
        const nodeIndex = flow.getNodes().findIndex(pNode => pNode === node)
        if (node.getInputs().length) {
            return `${flow.getName()}.${node.getElement().getName()}${nodeIndex}`
        } else {
            return node.getElement().getName()
        }
    }
}