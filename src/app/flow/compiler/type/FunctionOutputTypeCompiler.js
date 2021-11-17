import FunctionTypeCompiler from './FunctionTypeCompiler.js'
import NodeHelper from '../../../utils/NodeHelper.js'
import StackOperation, {OPERATIONS} from '../../../operation/StackOperation.js'
import {CONSTANTS} from '../../../operation/StackRegister.js'

export default class FunctionOutputTypeCompiler extends FunctionTypeCompiler {

    stepThree(contextCompiler) {
        const {node, input, scriptFunctionName, sourceStackFunction} = contextCompiler
        NodeHelper.validateResultToBaseConnection(node, input)
        sourceStackFunction.getStack().push(...[
            new StackOperation(OPERATIONS.PUSH,
                `[MEM]${scriptFunctionName}.${CONSTANTS.RESULT}`, CONSTANTS.RESULT)
        ])
    }

}