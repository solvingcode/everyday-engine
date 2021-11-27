import AEvent from '../event/AEvent.js'
import EventTypeCompiler from './type/EventTypeCompiler.js'
import SystemError from '../../exception/type/SystemError.js'
import AGetVariable from '../variable/AGetVariable.js'
import GetVariableTypeCompiler from './type/GetVariableTypeCompiler.js'
import ASelf from '../unit/ASelf.js'
import SelfTypeCompiler from './type/SelfTypeCompiler.js'
import ALoop from '../loop/ALoop.js'
import LoopTypeCompiler from './type/LoopTypeCompiler.js'
import AThen from '../promise/AThen.js'
import ThenTypeCompiler from './type/ThenTypeCompiler.js'
import AFunctionInput from '../io/AFunctionInput.js'
import FunctionInputTypeCompiler from './type/FunctionInputTypeCompiler.js'
import ACustomFunction from '../function/custom/ACustomFunction.js'
import CustomTypeCompiler from './type/CustomTypeCompiler.js'
import AFunction from '../function/AFunction.js'
import OtherTypeCompiler from './type/OtherTypeCompiler.js'
import AAnimation from '../animation/AAnimation.js'
import AnimationTypeCompiler from './type/AnimationTypeCompiler.js'
import ACondition from '../condition/ACondition.js'
import ConditionTypeCompiler from './type/ConditionTypeCompiler.js'
import AFunctionOutput from '../io/AFunctionOutput.js'
import FunctionOutputTypeCompiler from './type/FunctionOutputTypeCompiler.js'
import AConstant from '../constant/AConstant.js'
import ConstantTypeCompiler from './type/ConstantTypeCompiler.js'
import AReference from '../reference/AReference.js'
import ReferenceTypeCompiler from './type/ReferenceTypeCompiler.js'

export default class FunctionCompiler {

    /**
     * @param {AFunction} aFunction
     * @param {ContextCompiler} contextCompiler
     * @param {string} step
     */
    run(aFunction, contextCompiler, step) {
        const typeCompiler = this.getFunctionTypeCompiler(aFunction).get()
        switch (step) {
            case STEPS.ZERO:
                typeCompiler.stepZero(contextCompiler)
                break
            case STEPS.ONE:
                typeCompiler.stepOne(contextCompiler)
                break
            case STEPS.TWO:
                typeCompiler.stepTwo(contextCompiler)
                break
            case STEPS.THREE:
                typeCompiler.stepThree(contextCompiler)
                break
            case STEPS.FOUR:
                typeCompiler.stepFour(contextCompiler)
                break
            case STEPS.FIVE:
                typeCompiler.stepFive(contextCompiler)
                break
            default:
                throw new SystemError(`Compilation step not supported "${step}"`)
        }
    }

    /**
     * @private
     * @param {AFunction} aFunction
     */
    getFunctionTypeCompiler(aFunction) {
        if (aFunction instanceof AEvent) {
            return EventTypeCompiler
        } else if (aFunction instanceof AGetVariable) {
            return GetVariableTypeCompiler
        } else if (aFunction instanceof ASelf) {
            return SelfTypeCompiler
        } else if (aFunction instanceof ALoop) {
            return LoopTypeCompiler
        } else if (aFunction instanceof AThen) {
            return ThenTypeCompiler
        } else if (aFunction instanceof AFunctionInput) {
            return FunctionInputTypeCompiler
        } else if (aFunction instanceof AFunctionOutput) {
            return FunctionOutputTypeCompiler
        } else if (aFunction instanceof ACustomFunction) {
            return CustomTypeCompiler
        } else if (aFunction instanceof AAnimation) {
            return AnimationTypeCompiler
        } else if (aFunction instanceof AReference) {
            return ReferenceTypeCompiler
        } else if (aFunction instanceof ACondition) {
            return ConditionTypeCompiler
        } else if (aFunction instanceof AConstant) {
            return ConstantTypeCompiler
        } else if (aFunction instanceof AFunction) {
            return OtherTypeCompiler
        } else {
            throw new SystemError(`Function type not supported "${aFunction.constructor.name}"`)
        }
    }

    /**
     * @return {FunctionCompiler}
     */
    static get() {
        if (!this.instance) {
            this.instance = new this()
        }
        return this.instance
    }

}

export const STEPS = {
    ZERO: 'zero',
    ONE: 'one',
    TWO: 'two',
    THREE: 'three',
    FOUR: 'four',
    FIVE: 'five'
}