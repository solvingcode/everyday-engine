import AFunction from '../../AFunction.js'
import {TYPES} from '../../../../pobject/AttributeType.js'

export default class SetParentUnitFunction extends AFunction{

    constructor() {
        super('SetParentUnit')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('target', TYPES.UNIT, 0)
        this.addInput('parent', TYPES.UNIT, 0)
    }
}