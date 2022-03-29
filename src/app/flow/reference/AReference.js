import {TYPES} from '../../pobject/AttributeType.js'
import ANativeStackFunction from '../function/native/ANativeStackFunction.js'

export default class AReference extends ANativeStackFunction{

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