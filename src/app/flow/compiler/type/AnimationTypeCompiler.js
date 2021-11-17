import FunctionTypeCompiler from './FunctionTypeCompiler.js'
import StackOperation, {OPERATIONS} from '../../../operation/StackOperation.js'
import {CONSTANTS} from '../../../operation/StackRegister.js'
import OnAnyAnimationStartEvent from '../../event/native/OnAnyAnimationStartEvent.js'
import IsAnimationPlayingFunction from '../../function/native/animation/IsAnimationPlayingFunction.js'
import StartAnimationFunction from '../../function/native/animation/StartAnimationFunction.js'
import NotFunction from '../../function/native/basic/NotFunction.js'
import ScriptHelper from '../../../utils/ScriptHelper.js'
import AAnimation from '../../animation/AAnimation.js'
import StopAnimationFunction from '../../function/native/animation/StopAnimationFunction.js'
import ACondition from '../../condition/ACondition.js'

export default class AnimationTypeCompiler extends FunctionTypeCompiler {

    stepTwo(contextCompiler) {
        const {node, stackFunction, element, scriptFunction} = contextCompiler
        const onAnyAnimation = new OnAnyAnimationStartEvent()
        const isAnimationPlaying = new IsAnimationPlayingFunction()
        const startAnimation = new StartAnimationFunction()
        const not = new NotFunction()
        stackFunction.getStack().push(...[
            new StackOperation(OPERATIONS.PUSH, isAnimationPlaying.getInputs()[0].getAttrName(), element.getName()),
            new StackOperation(OPERATIONS.CALL, isAnimationPlaying.getName()),
            new StackOperation(OPERATIONS.PUSH, not.getInputs()[0].getAttrName(), CONSTANTS.RESULT),
            new StackOperation(OPERATIONS.CALL, not.getName()),
            new StackOperation(OPERATIONS.JUMP, CONSTANTS.RESULT, 'start_animation'),
            new StackOperation(OPERATIONS.PUSH, startAnimation.getInputs()[0].getAttrName(), element.getName()),
            new StackOperation(OPERATIONS.CALL, startAnimation.getName()),
            new StackOperation(OPERATIONS.JUMP_TO, 'start_animation')
        ])
        if (!ScriptHelper.isNodeHasPredecessor(scriptFunction, node, onAnyAnimation.getName())) {
            stackFunction.getStack().push(new StackOperation(OPERATIONS.DISPATCH, onAnyAnimation.getName()))
        }
    }

    stepFour(contextCompiler) {
        const {node, input, element, functionName, sourceStackFunction} = contextCompiler
        if (node.isOrderConnection(input)) {
            if (element instanceof AAnimation) {
                const stopAnimation = new StopAnimationFunction()
                sourceStackFunction.getStack().push(...[
                    new StackOperation(OPERATIONS.CALL, stopAnimation.getName()),
                    new StackOperation(OPERATIONS.CALL, functionName)
                ])
            } else if (element instanceof ACondition) {
                sourceStackFunction.getStack().push(...[
                    new StackOperation(OPERATIONS.CALL, functionName)
                ])
            }
        }
    }

}