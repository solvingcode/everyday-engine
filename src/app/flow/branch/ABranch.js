import {TYPES} from '../../pobject/AttributeType.js'
import AFunction from '../function/AFunction.js'

export default class ABranch extends AFunction{

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