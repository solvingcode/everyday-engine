import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'

export default class GetWorldPositionFunction extends AFunction{

    constructor() {
        super('GetWorldPosition')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('target', TYPES.UNIT, 0)
        this.addOutput(TYPES.VECTOR)
    }
}