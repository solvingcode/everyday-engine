import AStackFunction from '../function/AStackFunction.js'
import {TYPES} from '../../pobject/AttributeType.js'

export default class AThen extends AStackFunction{

    constructor(name) {
        super(name || 'Then')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addOutput(TYPES.ANY)
    }

    /**
     * @override
     */
    createStack() {
    }

}