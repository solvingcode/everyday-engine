import FunctionTypeCompiler from './FunctionTypeCompiler.js'
import StackOperation, {OPERATIONS} from '../../../operation/StackOperation.js'

export default class ReferenceTypeCompiler extends FunctionTypeCompiler {

    stepOne(contextCompiler) {
        const {node, input, sourceStackFunction} = contextCompiler
        const functionName = sourceStackFunction.getName()
        if (node.isResultToInputConnection(input)) {
            sourceStackFunction.getStack().push(...[
                new StackOperation(OPERATIONS.JUMP_TO, functionName)
            ])
        }
    }

}