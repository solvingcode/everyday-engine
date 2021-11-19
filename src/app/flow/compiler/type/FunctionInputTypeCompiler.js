import FunctionTypeCompiler from './FunctionTypeCompiler.js'
import NodeHelper from '../../../utils/NodeHelper.js'
import StackOperation, {OPERATIONS} from '../../../operation/StackOperation.js'
import ACustomFunction from '../../function/custom/ACustomFunction.js'
import Maths from '../../../utils/Maths.js'
import ScriptHelper from '../../../utils/ScriptHelper.js'
import IsFunctionDefinedFunction from '../../function/native/basic/IsFunctionDefinedFunction.js'
import {CONSTANTS} from '../../../operation/StackRegister.js'

export default class FunctionInputTypeCompiler extends FunctionTypeCompiler {

    stepOne(contextCompiler) {
        const {script, sourceNode, node, input, stackFunction, world, element, scriptFunction,
            scriptFunctionName, functionName} = contextCompiler
        const targetName = input.getTargetName()
        NodeHelper.validateResultToInputConnection(node, input)
        const targetInput = element.findInputByName(targetName)
        if (targetInput) {
            const attribute = NodeHelper.getAttributeFromNodeFunctionInput(sourceNode, world)
            const jumpTo = `[NEXT]set_input_${functionName}_${attribute.getAttrName()}${Maths.generateId()}`
            const parentClassNames = ScriptHelper.getParentClassNames(world, script).reverse()
            if (parentClassNames.length > 0) {
                const isFunctionDefinedFunction = new IsFunctionDefinedFunction()
                parentClassNames.forEach(parentClassName => {
                    const scriptFunctionAbstractName = `${parentClassName}.${scriptFunction.getName()}`
                    stackFunction.getStack().push(...[
                        new StackOperation(OPERATIONS.PUSH, 'functionName', scriptFunctionAbstractName),
                        new StackOperation(OPERATIONS.CALL, isFunctionDefinedFunction.getName()),
                        new StackOperation(OPERATIONS.JUMP, CONSTANTS.RESULT, jumpTo),
                        new StackOperation(OPERATIONS.PUSH,
                            `[MEM]${scriptFunctionName}.${attribute.getAttrName()}`,
                            `[MEM]${scriptFunctionAbstractName}.${attribute.getAttrName()}`)
                    ])
                })
            }
            if (element instanceof ACustomFunction) {
                stackFunction.getStack().push(...[
                    new StackOperation(OPERATIONS.JUMP_TO, jumpTo),
                    new StackOperation(OPERATIONS.PUSH,
                        `[MEM]${element.getName()}.${targetInput.getAttrName()}`,
                        `[MEM]${scriptFunctionName}.${attribute.getAttrName()}`)
                ])
            } else {
                stackFunction.getStack().push(...[
                    new StackOperation(OPERATIONS.JUMP_TO, jumpTo),
                    new StackOperation(OPERATIONS.PUSH, this.getScopedAttributedName(functionName, targetInput.getAttrName()),
                        `[MEM]${scriptFunctionName}.${attribute.getAttrName()}`)
                ])
            }
        }
    }

}