import FunctionTypeCompiler from './FunctionTypeCompiler.js'
import NodeHelper from '../../../utils/NodeHelper.js'
import StackOperation, {OPERATIONS} from '../../../operation/StackOperation.js'
import IsArrayEmptyFunction from '../../function/native/array/IsArrayEmptyFunction.js'
import NotFunction from '../../function/native/basic/NotFunction.js'
import {CONSTANTS} from '../../../operation/StackRegister.js'
import GetValueFunction from '../../function/native/object/GetValueFunction.js'

export default class LoopTypeCompiler extends FunctionTypeCompiler {

    stepOne(contextCompiler) {
        const {node, input, stackFunction, world} = contextCompiler
        if (node.isResultToInputConnection(input)) {
            const targetInput = NodeHelper.validateTargetInput(node, input, world)
            stackFunction.getStack().push(...[
                new StackOperation(OPERATIONS.PUSH, targetInput.getAttrName(), '[MEM]attributes')
            ])
        }
    }

    stepTwo(contextCompiler) {
        const {element, stackFunction} = contextCompiler
        const isArrayEmpty = new IsArrayEmptyFunction()
        const not = new NotFunction()
        stackFunction.getStack().push(...[
            new StackOperation(OPERATIONS.PUSH, '[MEM]array', CONSTANTS.RESULT),
            new StackOperation(OPERATIONS.PUSH, 'array', CONSTANTS.RESULT),
            new StackOperation(OPERATIONS.CALL, isArrayEmpty.getName()),
            new StackOperation(OPERATIONS.PUSH, not.getInputs()[0].getAttrName(), CONSTANTS.RESULT),
            new StackOperation(OPERATIONS.CALL, not.getName()),
            new StackOperation(OPERATIONS.EXIT, CONSTANTS.RESULT),
            new StackOperation(OPERATIONS.PUSH, 'index', '0'),
            new StackOperation(OPERATIONS.JUMP_TO, 'start_loop'),
            new StackOperation(OPERATIONS.PUSH, 'array', '[MEM]array'),
            new StackOperation(OPERATIONS.CALL, element.getName()),
            new StackOperation(OPERATIONS.PUSH, '[MEM]attributes', CONSTANTS.RESULT)
        ])
    }

    stepFour(contextCompiler) {
        const {node, input, functionName, sourceStackFunction} = contextCompiler
        if (node.isResultToBaseConnection(input)) {
            const getValueFunction = new GetValueFunction()
            sourceStackFunction.getStack().push(...[
                new StackOperation(OPERATIONS.CALL, functionName),
                new StackOperation(OPERATIONS.PUSH, 'attributes', '[MEM]attributes'),
                new StackOperation(OPERATIONS.PUSH, 'name', 'index'),
                new StackOperation(OPERATIONS.CALL, getValueFunction.getName()),
                new StackOperation(OPERATIONS.PUSH, 'attributes', '[MEM]attributes'),
                new StackOperation(OPERATIONS.PUSH, 'index', CONSTANTS.RESULT),
                new StackOperation(OPERATIONS.PUSH, 'name', 'ended'),
                new StackOperation(OPERATIONS.CALL, getValueFunction.getName()),
                new StackOperation(OPERATIONS.JUMP, CONSTANTS.RESULT, 'start_loop')
            ])
        } else if (node.isOrderConnection(input)) {
            sourceStackFunction.getStack().push(...[
                new StackOperation(OPERATIONS.CALL, functionName)
            ])
        }
    }

}