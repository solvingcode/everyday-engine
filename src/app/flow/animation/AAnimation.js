import AStackFunction from '../function/AStackFunction.js'
import StackOperation, {OPERATIONS} from '../../operation/StackOperation.js'
import {CONSTANTS} from '../../operation/StackRegister.js'

export default class AAnimation extends AStackFunction{

    /**
     * @param {string} value
     */
    constructor(value) {
        super('Animation')
        this.stack = [
            new StackOperation(OPERATIONS.PUSH, CONSTANTS.RESULT, `${value}`)
        ]
        this.setName(`${value}`)
    }

    createStack() {
    }

    initAttributes() {
    }

}