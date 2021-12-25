import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'
import Vector from '../../../../utils/Vector.js'

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

    /**
     * @override
     */
    execute() {
        this.setOutputValue(Vector.zero())
    }
}