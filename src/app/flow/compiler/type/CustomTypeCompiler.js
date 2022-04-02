import FunctionTypeCompiler from './FunctionTypeCompiler.js'
import NodeHelper from '../../../utils/NodeHelper.js'
import StackOperation, {OPERATIONS} from '../../../operation/StackOperation.js'
import ACustomFunction from '../../function/custom/ACustomFunction.js'
import {CONSTANTS} from '../../../operation/StackRegister.js'

export default class CustomTypeCompiler extends FunctionTypeCompiler {

    stepOne(contextCompiler) {
        const {node, input, stackFunction, world, element, sourceElement, sourceElementName, functionName} = contextCompiler
        if (node.isResultToInputConnection(input)) {
            const targetInput = NodeHelper.validateTargetInput(node, input, world)
            stackFunction.getStack().push(...[
                new StackOperation(OPERATIONS.CALL, sourceElementName)
            ])
            if (element instanceof ACustomFunction) {
                stackFunction.getStack().push(...[
                    new StackOperation(OPERATIONS.PUSH, `[MEM]${element.getName()}.${targetInput.getAttrName()}`,
                        `[MEM]${sourceElement.getName()}.${CONSTANTS.RESULT}`)
                ])
            } else {
                stackFunction.getStack().push(...[
                    new StackOperation(OPERATIONS.PUSH, this.getScopedAttributedName(functionName, targetInput.getAttrName()),
                        `[MEM]${sourceElement.getName()}.${CONSTANTS.RESULT}`)
                ])
            }
        }
    }

    stepTwo(contextCompiler) {
        const {stackFunction, element} = contextCompiler
        stackFunction.getStack().push(...[
            new StackOperation(OPERATIONS.PUSH, 'unit', `[MEM]${element.getName()}.unit`),
            new StackOperation(OPERATIONS.CALLFUNC, element.getName())
        ])
    }

}