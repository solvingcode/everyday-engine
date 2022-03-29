import {TYPES} from '../../../../pobject/AttributeType.js'
import ANativeFunction from '../ANativeFunction.js'

export default class GetComponentFunction extends ANativeFunction {

    constructor() {
        super('GetComponent')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('target', TYPES.UNIT)
        this.addInput('name', TYPES.STRING)
        this.addOutput(TYPES.COMPONENT_INSTANCE)
    }
}