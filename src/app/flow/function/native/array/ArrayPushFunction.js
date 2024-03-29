import ANativeFunction from '../ANativeFunction.js'
import {TYPES} from '../../../../pobject/AttributeType.js'

export default class ArrayPushFunction extends ANativeFunction{

    constructor() {
        super('ArrayPush')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('array', TYPES.ARRAY | TYPES.ANY, [])
        this.addInput('value', TYPES.ANY)
        this.addOutput(TYPES.ARRAY | TYPES.ANY)
    }
}