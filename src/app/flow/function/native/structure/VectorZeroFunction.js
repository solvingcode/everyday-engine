import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'

export default class VectorZeroFunction extends AFunction{

    constructor() {
        super('VectorZero')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addOutput(TYPES.VECTOR)
    }
}