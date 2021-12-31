import AStackFunction from '../../function/AStackFunction.js'
import StackOperation, {OPERATIONS} from '../../../operation/StackOperation.js'
import ACustomFunction from '../../function/custom/ACustomFunction.js'
import NodeHelper from '../../../utils/NodeHelper.js'
import {CONSTANTS} from '../../../operation/StackRegister.js'
import AReference from '../../reference/AReference.js'
import ALoop from '../../loop/ALoop.js'
import {COMPILER} from '../../../constant/ScriptConstant.js'

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
        const {node, input, stackFunction, element, sourceElementName, functionName, sourceElement} = contextCompiler
        const targetName = input.getTargetName()
        const sourceName = input.getSourceName()
        const targetInput = element.findInputByName(targetName)
        if (targetInput) {
            const resultRegister = `${CONSTANTS.RESULT}${sourceName === CONSTANTS.RESULT ? '' : `_${sourceName}`}`
            if (!(sourceElement instanceof ALoop)) {
                stackFunction.getStack().push(...[
                    new StackOperation(OPERATIONS.CALL, sourceElementName)
                ])
            }
            if (element instanceof ACustomFunction) {
                NodeHelper.validateResultToInputOrOrderConnection(node, input)
                stackFunction.getStack().push(...[
                    new StackOperation(OPERATIONS.PUSH,
                        `[MEM]${element.getName()}.${targetInput.getAttrName()}`, resultRegister)
                ])
            } else if (!(element instanceof AReference)) {
                stackFunction.getStack().push(...[
                    new StackOperation(OPERATIONS.PUSH,
                        this.getScopedAttributedName(functionName, targetInput.getAttrName()), resultRegister)
                ])
                if(element instanceof ALoop && targetInput.getAttrName() === 'array'){
                    stackFunction.getStack().push(...[
                        new StackOperation(OPERATIONS.PUSH, `[MEM]${targetInput.getAttrName()}`, resultRegister)
                    ])
                }
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
        const {input, functionName, sourceStackFunction, sourceElement} = contextCompiler
        const sourceName = input.getSourceName()
        if (sourceElement instanceof ALoop && sourceName === COMPILER.LOOP_BODY) {
            sourceStackFunction.getStack().push(...[
                new StackOperation(OPERATIONS.CALL, functionName)
            ])
        }
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