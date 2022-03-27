import AFunction from '../../AFunction.js'
import {TYPES} from '../../../../pobject/AttributeType.js'

export default class DisableUnitFunction extends AFunction{

    constructor() {
        super('DisableUnit')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('target', TYPES.UNIT, 0)
    }
}