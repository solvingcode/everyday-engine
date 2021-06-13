import AStackFunction from '../function/AStackFunction.js'
import StackOperation, {OPERATIONS} from '../../operation/StackOperation.js'
import {CONSTANTS} from '../../operation/StackRegister.js'
import ActivateAnimationFunction from '../function/native/animation/ActivateAnimationFunction.js'

export default class AAnimation extends AStackFunction{

    /**
     * @param {string} value
     */
    constructor(value) {
        super('Animation')
        const activateAnimationFunction = new ActivateAnimationFunction()
        this.stack = [
            new StackOperation(OPERATIONS.PUSH, CONSTANTS.RESULT, `${value}`),
            new StackOperation(OPERATIONS.PUSH, activateAnimationFunction.getInputs()[0].getAttrName(), CONSTANTS.RESULT),
            new StackOperation(OPERATIONS.CALL, activateAnimationFunction.getName())
        ]
        this.setName(`${value}`)
    }

    createStack() {
    }

    initAttributes() {
    }

}