import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'

export default class InstantiateUnitFunction extends AFunction{

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