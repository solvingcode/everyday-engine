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
import GetAnimationFunction from '../../function/native/animation/GetAnimationFunction.js'

export default class AnimationTypeCompiler extends FunctionTypeCompiler {

    stepTwo(contextCompiler) {
        const {node, stackFunction, element, scriptFunction, functionName, world} = contextCompiler
        const onAnyAnimation = new OnAnyAnimationStartEvent()
        const isAnimationPlaying = new IsAnimationPlayingFunction()
        const getAnimation = new GetAnimationFunction()
        const startAnimation = new StartAnimationFunction()
        const animation = world.getAnimationManager().findByName(ScriptHelper.extractNameFromPublicAnimation(element.getName()))
        const not = new NotFunction()
        stackFunction.getStack().push(...[
            new StackOperation(OPERATIONS.PUSH, this.getScopedAttributedName(functionName, 'id'), `${animation.getId()}`),
            new StackOperation(OPERATIONS.CALL, getAnimation.getName(), functionName),
            new StackOperation(OPERATIONS.PUSH, this.getScopedAttributedName(functionName, 'target'), CONSTANTS.RESULT),
            new StackOperation(OPERATIONS.CALL, isAnimationPlaying.getName(), functionName),
            new StackOperation(OPERATIONS.PUSH, this.getScopedAttributedName(functionName, 'value'), CONSTANTS.RESULT),
            new StackOperation(OPERATIONS.CALL, not.getName(), functionName),
            new StackOperation(OPERATIONS.JUMP, CONSTANTS.RESULT, '[NEXT]start_animation'),
            new StackOperation(OPERATIONS.PUSH, this.getScopedAttributedName(functionName, 'id'), `${animation.getId()}`),
            new StackOperation(OPERATIONS.CALL, getAnimation.getName(), functionName),
            new StackOperation(OPERATIONS.PUSH, this.getScopedAttributedName(functionName, 'target'), CONSTANTS.RESULT),
            new StackOperation(OPERATIONS.CALL, startAnimation.getName(), functionName),
            new StackOperation(OPERATIONS.JUMP_TO, '[NEXT]start_animation')
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