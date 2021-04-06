import StackOperation, {OPERATIONS} from '../../operation/StackOperation.js'
import {CONSTANTS} from '../../operation/StackRegister.js'
import AEmptyStackFunction from '../function/AEmptyStackFunction.js'

export default class Compiler {

    static instance

    /**
     * @param {AFlow} flow
     * @return {AFunction}
     */
    run(flow){
        const nodes = flow.getNodes()
        const stack = []
        let outputAttribute
        nodes.forEach(targetNode => {
            const targetInputs = targetNode.getElement().getInputs()
            targetInputs.forEach(targetInput => {
                const inputSourceNode = targetNode.getInputNodeAttached(targetInput.getId())
                if(inputSourceNode){
                    const element = inputSourceNode.nodeSource.getElement()
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
        return aFunction
    }

    /**
     * @return {Compiler}
     */
    static get() {
        if (!this.instance) {
            this.instance = new this()
        }
        return this.instance
    }

}