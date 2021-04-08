import StackOperation, {OPERATIONS} from '../../operation/StackOperation.js'
import {CONSTANTS} from '../../operation/StackRegister.js'
import AEmptyStackFunction from '../function/AEmptyStackFunction.js'
import FunctionRegistry from '../function/FunctionRegistry.js'
import Compiler from './Compiler.js'
import FunctionFlow from '../FunctionFlow.js'

export default class FunctionCompiler extends Compiler{

    /**
     * @override
     */
    run(flow){
        if(!(flow instanceof FunctionFlow)){
            throw new TypeError(`The given flow is not correct (must be a Function flow)`)
        }
        const nodes = flow.getNodes()
        const stack = []
        let outputAttribute
        nodes.forEach(targetNode => {
            const targetInputs = targetNode.getElement().getInputs()
            targetInputs.forEach(targetInput => {
                const inputSourceNode = targetNode.getInputNodeAttached(targetInput.getId())
                if(inputSourceNode){
                    const element = inputSourceNode.sourceNode.getElement()
                    outputAttribute = element.getOutput()
                    stack.push(new StackOperation(OPERATIONS.CALL, element.getName()))
                    stack.push(new StackOperation(OPERATIONS.PUSH, targetInput.getAttrName(), CONSTANTS.RESULT))
                }
            })
            stack.push(new StackOperation(OPERATIONS.CALL, targetNode.getElement().getName()))
        })
        const aFunction = new AEmptyStackFunction(flow.getName())
        if(outputAttribute){
            aFunction.setOutput(outputAttribute.getAttrType())
        }
        aFunction.setStack(stack)
        FunctionRegistry.get().register(aFunction)
    }

}