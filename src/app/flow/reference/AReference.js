import AStackFunction from '../function/AStackFunction.js'
import {TYPES} from '../../pobject/AttributeType.js'

export default class AReference extends AStackFunction{

    constructor() {
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