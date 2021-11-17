import FunctionTypeCompiler from './FunctionTypeCompiler.js'
import NodeHelper from '../../../utils/NodeHelper.js'
import StackOperation, {OPERATIONS} from '../../../operation/StackOperation.js'
import ACustomFunction from '../../function/custom/ACustomFunction.js'
import {CONSTANTS} from '../../../operation/StackRegister.js'

export default class SelfTypeCompiler extends FunctionTypeCompiler {

    stepOne(contextCompiler) {
        const {node, input, element, stackFunction} = contextCompiler
        const targetName = input.getTargetName()
        NodeHelper.validateResultToInputConnection(node, input)
        const targetInput = element.findInputByName(targetName)
        stackFunction.getStack().push(...[
            new StackOperation(OPERATIONS.SELF, `${targetInput.getAttrType()}`)
        ])
        if (element instanceof ACustomFunction) {
            stackFunction.getStack().push(...[
                new StackOperation(OPERATIONS.PUSH,
                    `[MEM]${element.getName()}.${targetInput.getAttrName()}`, CONSTANTS.RESULT)
            ])
        } else {
            stackFunction.getStack().push(...[
                new StackOperation(OPERATIONS.PUSH, targetInput.getAttrName(), CONSTANTS.RESULT)
            ])
        }
    }

}