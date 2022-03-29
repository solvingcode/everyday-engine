import {TYPES} from '../../pobject/AttributeType.js'
import ANativeFunction from '../function/native/ANativeFunction.js'

export default class APromise extends ANativeFunction{

    constructor() {
        super('APromise')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('target', TYPES.ANY, [])
        this.addOutput(TYPES.PROMISE)
    }
}