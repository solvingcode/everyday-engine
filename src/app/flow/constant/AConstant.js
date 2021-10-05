import AStackFunction from '../function/AStackFunction.js'
import StackOperation, {OPERATIONS} from '../../operation/StackOperation.js'
import {CONSTANTS} from '../../operation/StackRegister.js'

export default class AConstant extends AStackFunction{

    /**
     * @param {number|string|boolean} value
     * @param {string} type
     */
    constructor(type, value) {
        super('Constant')
        this.stack = [new StackOperation(OPERATIONS.PUSH, CONSTANTS.RESULT, value)]
        this.setName(`[${value}]`)
        this.addOutput(type)
    }

    createStack() {
    }

    initAttributes() {
    }
}