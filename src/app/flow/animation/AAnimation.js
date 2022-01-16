import AEmptyStackFunction from '../function/AEmptyStackFunction.js'
import StackOperation, {OPERATIONS} from '../../operation/StackOperation.js'
import {CONSTANTS} from '../../operation/StackRegister.js'
import {TYPES} from '../../pobject/AttributeType.js'

export default class AAnimation extends AEmptyStackFunction{

    /**
     * @param {string} name
     * @param {number} id
     */
    constructor(name, id) {
        super(name)
        this.stack = [new StackOperation(OPERATIONS.PUSH, CONSTANTS.RESULT, `${id}`)]
        this.addOutput(TYPES.ANIMATION)
    }

}