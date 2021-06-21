import AStackFunction from '../function/AStackFunction.js'
import {TYPES} from '../../pobject/AttributeType.js'

export default class AReference extends AStackFunction{

    /**
     * @param {string} value
     */
    constructor(value) {
        super('Reference')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('target', TYPES.STRING)
    }

    /**
     * @override
     */
    createStack() {
    }
}