import FunctionTypeCompiler from './FunctionTypeCompiler.js'
import StackOperation, {OPERATIONS} from '../../../operation/StackOperation.js'
import IsArrayEmptyFunction from '../../function/native/array/IsArrayEmptyFunction.js'
import NotFunction from '../../function/native/basic/NotFunction.js'
import {CONSTANTS} from '../../../operation/StackRegister.js'
import {COMPILER} from '../../../constant/ScriptConstant.js'

export default class LoopTypeCompiler extends FunctionTypeCompiler {

    stepTwo(contextCompiler) {
        const {element, stackFunction, functionName} = contextCompiler
        const isArrayEmpty = new IsArrayEmptyFunction()
        const not = new NotFunction()
        stackFunction.getStack().push(...[
            new StackOperation(OPERATIONS.PUSH, this.getScopedAttributedName(functionName, 'array'), '[MEM]array'),
            new StackOperation(OPERATIONS.CALL, isArrayEmpty.getName(), functionName),
            new StackOperation(OPERATIONS.PUSH, this.getScopedAttributedName(functionName, 'value'), CONSTANTS.RESULT),
            new StackOperation(OPERATIONS.CALL, not.getName(), functionName),
            new StackOperation(OPERATIONS.EXIT, CONSTANTS.RESULT),
            new StackOperation(OPERATIONS.PUSH, this.getScopedAttributedName(functionName, 'index'), '0'),
            new StackOperation(OPERATIONS.JUMP_TO, 'start_loop'),
            new StackOperation(OPERATIONS.PUSH, this.getScopedAttributedName(functionName, 'array'), '[MEM]array'),
            new StackOperation(OPERATIONS.CALL, element.getName(), functionName)
        ])
    }

    stepFour(contextCompiler) {
        const {node, input, functionName, sourceStackFunction} = contextCompiler
        if (input.getSourceName() === COMPILER.LOOP_BODY
            && node.isCustomToBaseConnection(input.getSourceName(), input)) {
            sourceStackFunction.getStack().push(...[
                new StackOperation(OPERATIONS.PUSH,
                    this.getScopedAttributedName(sourceStackFunction.getName(), 'index'),
                    `${CONSTANTS.RESULT}_index`),
                new StackOperation(OPERATIONS.JUMP, `${CONSTANTS.RESULT}_ended`, 'start_loop')
            ])
        } else if (node.isOrderConnection(input)) {
            sourceStackFunction.getStack().push(...[
                new StackOperation(OPERATIONS.CALL, functionName)
            ])
        }
    }

}