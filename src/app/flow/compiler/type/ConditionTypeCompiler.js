import FunctionTypeCompiler from './FunctionTypeCompiler.js'
import StackOperation, {OPERATIONS} from '../../../operation/StackOperation.js'
import {CONSTANTS} from '../../../operation/StackRegister.js'
import AAnimation from '../../animation/AAnimation.js'
import AReference from '../../reference/AReference.js'
import GetCurrentAnimationFunction from '../../function/native/animation/GetCurrentAnimationFunction.js'
import StopAnimationFunction from '../../function/native/animation/StopAnimationFunction.js'
import {TYPES} from '../../../pobject/AttributeType.js'

export default class ConditionTypeCompiler extends FunctionTypeCompiler {

    stepTwo(contextCompiler) {
        const {stackFunction, element} = contextCompiler
        const functionName = stackFunction.getName()
        stackFunction.getStack().push(...[
            new StackOperation(OPERATIONS.CALL, element.getName(), functionName),
            new StackOperation(OPERATIONS.JUMP, CONSTANTS.RESULT, `[NEXT]end_condition_${functionName}`)
        ])
    }

    stepFour(contextCompiler) {
        const {node, input, element, functionName, sourceStackFunction} = contextCompiler
        if (node.isResultToBaseConnection(input)) {
            if (element instanceof AAnimation || element instanceof AReference) {
                const getCurrentAnimation = new GetCurrentAnimationFunction()
                const stopAnimation = new StopAnimationFunction()
                sourceStackFunction.getStack().push(...[
                    new StackOperation(OPERATIONS.SELF, `${TYPES.UNIT}`),
                    new StackOperation(OPERATIONS.PUSH, this.getScopedAttributedName(functionName, 'unit'), CONSTANTS.RESULT),
                    new StackOperation(OPERATIONS.CALL, getCurrentAnimation.getName(), functionName),
                    new StackOperation(OPERATIONS.SELF, `${TYPES.UNIT}`),
                    new StackOperation(OPERATIONS.PUSH, this.getScopedAttributedName(functionName, 'unit'), CONSTANTS.RESULT),
                    new StackOperation(OPERATIONS.CALL, stopAnimation.getName(), functionName)
                ])
            }
            sourceStackFunction.getStack().push(...[
                new StackOperation(OPERATIONS.CALL, functionName),
                new StackOperation(OPERATIONS.JUMP_TO, `[NEXT]end_condition_${sourceStackFunction.getName()}`)
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