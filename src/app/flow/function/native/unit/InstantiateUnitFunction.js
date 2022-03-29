import {TYPES} from '../../../../pobject/AttributeType.js'
import ANativeFunction from '../ANativeFunction.js'

export default class InstantiateUnitFunction extends ANativeFunction{

    constructor() {
        super('InstantiateUnit')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('target', TYPES.UNIT_INSTANT, 0)
        this.addOutput(TYPES.PROMISE)
    }
}