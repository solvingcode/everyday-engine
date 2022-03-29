import {TYPES} from '../../../../pobject/AttributeType.js'
import ANativeFunction from '../ANativeFunction.js'

export default class GetValueFunction extends ANativeFunction{

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