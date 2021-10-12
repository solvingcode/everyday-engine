import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'
import Vector from '../../../../utils/Vector.js'

export default class NormalizeVectorFunction extends AFunction{

    constructor() {
        super('VectorNormalize')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('vector', TYPES.VECTOR, 0)
        this.addOutput(TYPES.VECTOR)
    }

    /**
     * @override
     */
    execute() {
        const vector = this.getInputValue('vector')
        this.setOutputValue(Vector.normalize(vector))
    }
}