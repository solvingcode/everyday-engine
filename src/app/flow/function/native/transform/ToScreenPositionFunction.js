import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'

export default class ToScreenPositionFunction extends AFunction{

    constructor() {
        super('ToScreenPosition')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('position', TYPES.VECTOR, 0)
        this.addOutput(TYPES.VECTOR)
    }
}