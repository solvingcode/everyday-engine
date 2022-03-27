import AFunction from '../../AFunction.js'
import {TYPES} from '../../../../pobject/AttributeType.js'

export default class DestroyUnitFunction extends AFunction{

    constructor() {
        super('DestroyUnit')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('target', TYPES.UNIT, 0)
    }
}