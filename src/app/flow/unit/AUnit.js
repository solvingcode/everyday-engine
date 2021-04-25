import AStackFunction from '../function/AStackFunction.js'
import StackOperation, {OPERATIONS} from '../../operation/StackOperation.js'
import {CONSTANTS} from '../../operation/StackRegister.js'

export default class AUnit extends AStackFunction{

    /**
     * @param {number} value
     * @param {string} type
     */
    constructor(type, value) {
        super('Unit')
        this.stack = [new StackOperation(OPERATIONS.PUSH, CONSTANTS.RESULT, `${value}`)]
        this.setName(`${value}`)
        this.addOutput(type)
    }

    createStack() {
    }

    initAttributes() {
    }
}