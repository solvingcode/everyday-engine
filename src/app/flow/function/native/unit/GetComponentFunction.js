import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'

export default class GetComponentFunction extends AFunction {

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