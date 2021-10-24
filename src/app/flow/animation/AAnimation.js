import AEmptyStackFunction from '../function/AEmptyStackFunction.js'
import StackOperation, {OPERATIONS} from '../../operation/StackOperation.js'
import {CONSTANTS} from '../../operation/StackRegister.js'
import {TYPES} from '../../pobject/AttributeType.js'

export default class AAnimation extends AEmptyStackFunction{

    /**
     * @param {string} value
     */
    constructor(value) {
        super('Animation')
        this.stack = [new StackOperation(OPERATIONS.PUSH, CONSTANTS.RESULT, `${value}`)]
        this.setName(`${value}`)
        this.addOutput(TYPES.NUMBER)
    }

}