import AEmptyStackFunction from '../function/AEmptyStackFunction.js'
import {TYPES} from '../../pobject/AttributeType.js'

export default class AGetVariable extends AEmptyStackFunction{

    /**
     * @param {string} name
     */
    constructor(name) {
        super(name)
        this.addOutput(TYPES.ANY)
    }

}