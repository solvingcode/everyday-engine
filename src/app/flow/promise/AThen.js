import {TYPES} from '../../pobject/AttributeType.js'
import ANativeStackFunction from '../function/native/ANativeStackFunction.js'

export default class AThen extends ANativeStackFunction{

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