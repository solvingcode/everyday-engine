import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'

export default class GetValueFunction extends AFunction{

    constructor() {
        super('GetValue')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('attributes', TYPES.ARRAY | TYPES.DYNAMIC_ATTRIBUTE, [])
        this.addInput('name', TYPES.STRING)
        this.addOutput(TYPES.ANY)
    }
}