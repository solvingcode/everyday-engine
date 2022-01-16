import FunctionTypeCompiler from './FunctionTypeCompiler.js'
import NodeHelper from '../../../utils/NodeHelper.js'
import VariableNode from '../../node/variable/VariableNode.js'
import ClientError from '../../../exception/type/ClientError.js'
import StackOperation, {OPERATIONS} from '../../../operation/StackOperation.js'
import ACustomFunction from '../../function/custom/ACustomFunction.js'
import {CONSTANTS} from '../../../operation/StackRegister.js'
import ToggleVariableNode from '../../node/variable/ToggleVariableNode.js'

export default class GetVariableTypeCompiler extends FunctionTypeCompiler {

    stepOne(contextCompiler) {
        const {script, node, input, sourceElement, element, stackFunction, sourceNode, functionName} = contextCompiler
        const targetName = input.getTargetName()
        NodeHelper.validateResultToInputConnection(node, input)
        const variableExists = script.getMainFunction().findNodeByNameClass(sourceElement.getName(), VariableNode)
        if (!variableExists) {
            throw new ClientError(`Variable ${sourceElement.getName()} not defined`)
        }
        const targetInput = element.findInputByName(targetName)
        stackFunction.getStack().push(...[
            new StackOperation(OPERATIONS.GET, sourceNode.getSourceName())
        ])
        if (element instanceof ACustomFunction) {
            stackFunction.getStack().push(...[
                new StackOperation(OPERATIONS.PUSH,
                    `[MEM]${element.getName()}.${targetInput.getAttrName()}`, CONSTANTS.RESULT)
            ])
        } else {
            stackFunction.getStack().push(...[
                new StackOperation(OPERATIONS.PUSH,
                    this.getScopedAttributedName(functionName, targetInput.getAttrName()), CONSTANTS.RESULT)
            ])
        }
        if (variableExists instanceof ToggleVariableNode) {
            stackFunction.getStack().push(...[
                new StackOperation(OPERATIONS.PUSH, CONSTANTS.RESULT, ''),
                new StackOperation(OPERATIONS.SET, sourceNode.getSourceName())
            ])
        }
    }

}