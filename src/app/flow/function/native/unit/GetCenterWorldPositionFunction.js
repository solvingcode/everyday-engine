import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'

export default class GetCenterWorldPositionFunction extends AFunction{

    constructor() {
        super('GetCenterWorldPosition')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('target', TYPES.UNIT, 0)
        this.addOutput(TYPES.VECTOR)
    }
}