import AStackFunction from '../function/AStackFunction.js'
import StackOperation, {OPERATIONS} from '../../operation/StackOperation.js'
import {CONSTANTS} from '../../operation/StackRegister.js'
import {KeyCode} from '../../core/Keyboard.js'
import {TYPES} from '../../pobject/AttributeType.js'

export default class AKeyCode extends AStackFunction{

    /**
     * @param {string} value
     */
    constructor(value) {
        super('KeyCode')
        this.stack = [new StackOperation(OPERATIONS.PUSH, CONSTANTS.RESULT, `${KeyCode[value]}`)]
        this.setName(`${value}`)
        this.addOutput(TYPES.NUMBER)
    }

    createStack() {
    }

    initAttributes() {
    }

}