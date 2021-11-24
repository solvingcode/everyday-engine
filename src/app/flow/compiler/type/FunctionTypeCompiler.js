import AStackFunction from '../../function/AStackFunction.js'
import StackOperation, {OPERATIONS} from '../../../operation/StackOperation.js'
import ACustomFunction from '../../function/custom/ACustomFunction.js'
import NodeHelper from '../../../utils/NodeHelper.js'
import {CONSTANTS} from '../../../operation/StackRegister.js'
import AReference from '../../reference/AReference.js'

/**
 * @abstract
 */
export default class FunctionTypeCompiler {

    /**
     * @param {string} functionName
     * @param {string} inputName
     * @return {string}
     */
    getScopedAttributedName(functionName, inputName) {
        return `${functionName}.${inputName}`
    }

    /**
     * @param {ContextCompiler} contextCompiler
     */
    stepZero(contextCompiler) {
        const {stackFunction, functionName} = contextCompiler
        stackFunction.getStack().push(...[
            new StackOperation(OPERATIONS.JUMP_TO, functionName)
        ])
    }

    /**
     * @param {ContextCompiler} contextCompiler
     */
    stepOne(contextCompiler) {
        const {node, input, stackFunction, element, sourceElementName, functionName} = contextCompiler
        const targetName = input.getTargetName()
        const targetInput = element.findInputByName(targetName)
        if (targetInput) {
            stackFunction.getStack().push(...[
                new StackOperation(OPERATIONS.CALL, sourceElementName)
            ])
            if (element instanceof ACustomFunction) {
                NodeHelper.validateResultToInputOrOrderConnection(node, input)
                stackFunction.getStack().push(...[
                    new StackOperation(OPERATIONS.PUSH,
                        `[MEM]${element.getName()}.${targetInput.getAttrName()}`, CONSTANTS.RESULT)
                ])
            } else if (!(element instanceof AReference)) {
                stackFunction.getStack().push(...[
                    new StackOperation(OPERATIONS.PUSH,
                        this.getScopedAttributedName(functionName, targetInput.getAttrName()), CONSTANTS.RESULT)
                ])
            }
        }
    }

    /**
     * @param {ContextCompiler} contextCompiler
     */
    stepTwo(contextCompiler) {
        const {element, stackFunction, world, functionName} = contextCompiler
        const functionRegistry = world.getFunctionRegistry()
        if (functionRegistry.getInstance(element.getName())) {
            stackFunction.getStack().push(new StackOperation(OPERATIONS.CALL, element.getName(), functionName))
        } else if (element instanceof AStackFunction) {
            stackFunction.getStack().push(...element.getStack())
        }
    }

    /**
     * @param {ContextCompiler} contextCompiler
     */
    stepThree(contextCompiler) {
    }

    /**
     * @param {ContextCompiler} contextCompiler
     */
    stepFour(contextCompiler) {
        const {node, input, functionName, sourceStackFunction} = contextCompiler
        if (node.isOrderConnection(input)) {
            sourceStackFunction.getStack().push(...[
                new StackOperation(OPERATIONS.CALL, functionName)
            ])
        }
    }

    /**
     * @param {ContextCompiler} contextCompiler
     */
    stepFive(contextCompiler) {
    }

    /**
     * @return {FunctionTypeCompiler}
     */
    static get() {
        if (!this.instance) {
            this.instance = new this()
        }
        return this.instance
    }

}