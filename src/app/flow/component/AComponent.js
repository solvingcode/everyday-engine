import AStackFunction from '../function/AStackFunction.js'
import StackOperation, {OPERATIONS} from '../../operation/StackOperation.js'
import {CONSTANTS} from '../../operation/StackRegister.js'
import {TYPES} from '../../pobject/AttributeType.js'

export default class AComponent extends AStackFunction{

    /**
     * @param {string} value
     */
    constructor(value) {
        super('Component')
        this.stack = [new StackOperation(OPERATIONS.PUSH, CONSTANTS.RESULT, `${value}`)]
        this.setName(`${value}`)
        this.addOutput(TYPES.STRING)
    }

    createStack() {
    }

    initAttributes() {
    }
}