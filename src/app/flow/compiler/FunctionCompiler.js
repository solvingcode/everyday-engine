import StackOperation, {OPERATIONS} from '../../operation/StackOperation.js'
import {CONSTANTS} from '../../operation/StackRegister.js'
import AEmptyStackFunction from '../function/AEmptyStackFunction.js'
import Compiler from './Compiler.js'
import FunctionScript from '../FunctionScript.js'
import World from '../../world/World.js'
import ClientError from '../../exception/type/ClientError.js'

export default class FunctionCompiler extends Compiler{

    /**
     * @override
     */
    run(script){
        if(!(script instanceof FunctionScript)){
            throw new ClientError(`The given script is not correct (must be a Function script)`)
        }
        const world = World.get()
        const functionRegistry = world.getFunctionRegistry()
        const nodes = script.getNodes()
        const stack = []
        let outputAttribute
        nodes.forEach(targetNode => {
            const targetNodeSource = functionRegistry.getInstance(targetNode.getSourceName())
            const targetInputs = targetNodeSource.getInputs()
            targetInputs.forEach(targetInput => {
                const inputSourceNode = targetNode.getInputNodeAttached(targetInput.getAttrName())
                if(inputSourceNode){
                    const sourceNode = script.findNodeById(inputSourceNode.getSourceNodeId())
                    let element = functionRegistry.getInstanceById(sourceNode.getSourceId())
                    outputAttribute = element.getOutput()
                    stack.push(new StackOperation(OPERATIONS.CALL, element.getName()))
                    stack.push(new StackOperation(OPERATIONS.PUSH, targetInput.getAttrName(), CONSTANTS.RESULT))
                }
            })
            stack.push(new StackOperation(OPERATIONS.CALL, targetNodeSource.getName()))
        })
        const aFunction = new AEmptyStackFunction(script.getName())
        if(outputAttribute){
            aFunction.addOutput(outputAttribute.getAttrType())
        }
        aFunction.setStack(stack)
        world.getFunctionRegistry().register(aFunction)
        return true
    }

}