import AStackFunction from '../function/AStackFunction.js'
import StackOperation, {OPERATIONS} from '../../operation/StackOperation.js'
import {CONSTANTS} from '../../operation/StackRegister.js'
import {TYPES} from '../../pobject/AttributeType.js'

export default class AUnit extends AStackFunction{

    /**
     * @param {number|string} value
     */
    constructor(value) {
        super('Unit')
        this.stack = [new StackOperation(OPERATIONS.PUSH, CONSTANTS.RESULT, `${value}`)]
        this.setName(`${value}`)
        this.addOutput(TYPES.NUMBER)
    }

    createStack() {
    }

    initAttributes() {
    }
}