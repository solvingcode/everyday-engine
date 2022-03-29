import {TYPES} from '../../pobject/AttributeType.js'
import ANativeFunction from '../function/native/ANativeFunction.js'

export default class ABranch extends ANativeFunction{

    constructor(name) {
        super(name || 'Branch')
    }

    /**
     * @override
     */
    initAttributes(params) {
        this.addInput('target', TYPES.BOOLEAN, false)
        this.addCustomOutput('true', TYPES.BOOLEAN)
        this.addCustomOutput('false', TYPES.BOOLEAN)
    }

}