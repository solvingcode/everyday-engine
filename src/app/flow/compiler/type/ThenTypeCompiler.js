import FunctionTypeCompiler from './FunctionTypeCompiler.js'
import NodeHelper from '../../../utils/NodeHelper.js'
import StackOperation, {OPERATIONS} from '../../../operation/StackOperation.js'
import ACustomFunction from '../../function/custom/ACustomFunction.js'
import {CONSTANTS} from '../../../operation/StackRegister.js'

export default class ThenTypeCompiler extends FunctionTypeCompiler {

    stepOne(contextCompiler) {
        const {node, input, stackFunction, world, element} = contextCompiler
        const functionName = stackFunction.getName()
        if (node.isResultToInputConnection(input)) {
            const targetInput = NodeHelper.validateTargetInput(node, input, world)
            if (element instanceof ACustomFunction) {
                stackFunction.getStack().push(...[
                    new StackOperation(OPERATIONS.PUSH, `[MEM]${element.getName()}.${targetInput.getAttrName()}`, `[MEM]${functionName}.promise.then`)
                ])
            } else {
                stackFunction.getStack().push(...[
                    new StackOperation(OPERATIONS.PUSH, targetInput.getAttrName(), `[MEM]${functionName}.promise.then`)
                ])
            }
        }
    }

    stepTwo(contextCompiler) {
        const {stackFunction} = contextCompiler
        stackFunction.getStack().push(...[
            new StackOperation(OPERATIONS.PUSH, `promise`, CONSTANTS.RESULT)
        ])
    }

    stepThree(contextCompiler) {
        const {node, input, sourceElement, functionName, sourceStackFunction} = contextCompiler
        NodeHelper.validateResultToBaseConnection(node, input)
        if (sourceElement instanceof ACustomFunction) {
            sourceStackFunction.getStack().push(...[
                new StackOperation(OPERATIONS.PUSH, CONSTANTS.RESULT,
                    `[MEM]${sourceElement.getName()}.${CONSTANTS.RESULT}`)
            ])
        }
        sourceStackFunction.getStack().push(...[
            new StackOperation(OPERATIONS.CALL, functionName)
        ])
    }

    stepFour(contextCompiler) {
        const {node, input, functionName, sourceStackFunction} = contextCompiler
        if (node.isOrderConnection(input)) {
            sourceStackFunction.getStack().push(...[
                new StackOperation(OPERATIONS.THEN, functionName)
            ])
        }
    }

}