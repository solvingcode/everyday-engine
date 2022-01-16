import FunctionTypeCompiler from './FunctionTypeCompiler.js'
import StackOperation, {OPERATIONS} from '../../../operation/StackOperation.js'
import {CONSTANTS} from '../../../operation/StackRegister.js'
import AAnimation from '../../animation/AAnimation.js'
import AReference from '../../reference/AReference.js'
import GetCurrentAnimationFunction from '../../function/native/animation/GetCurrentAnimationFunction.js'
import StopAnimationFunction from '../../function/native/animation/StopAnimationFunction.js'

export default class BranchTypeCompiler extends FunctionTypeCompiler {

    stepTwo(contextCompiler) {
        const {stackFunction, element} = contextCompiler
        const functionName = stackFunction.getName()
        stackFunction.getStack().push(...[
            new StackOperation(OPERATIONS.CALL, element.getName(), functionName)
        ])
    }

    stepFour(contextCompiler) {
        const {node, input, element, functionName, sourceStackFunction} = contextCompiler
        if (node.isCustomToBaseConnection(input.getSourceName(), input)) {
            sourceStackFunction.getStack().push(...[
                new StackOperation(OPERATIONS.JUMP, `${CONSTANTS.RESULT}_${input.getSourceName()}`,
                    `[NEXT]${input.getSourceName()}_end_condition_${sourceStackFunction.getName()}`)
            ])
            if (element instanceof AAnimation || element instanceof AReference) {
                const getCurrentAnimation = new GetCurrentAnimationFunction()
                const stopAnimation = new StopAnimationFunction()
                sourceStackFunction.getStack().push(...[
                    new StackOperation(OPERATIONS.CALL, getCurrentAnimation.getName()),
                    new StackOperation(OPERATIONS.CALL, stopAnimation.getName())
                ])
            }
            sourceStackFunction.getStack().push(...[
                new StackOperation(OPERATIONS.CALL, functionName),
                new StackOperation(OPERATIONS.JUMP_TO,
                    `[NEXT]${input.getSourceName()}_end_condition_${sourceStackFunction.getName()}`)
            ])
        }
    }

    stepFive(contextCompiler) {
        const {node, input, functionName, sourceStackFunction} = contextCompiler
        if (node.isOrderConnection(input)) {
            sourceStackFunction.getStack().push(...[
                new StackOperation(OPERATIONS.CALL, functionName)
            ])
        }
    }

}