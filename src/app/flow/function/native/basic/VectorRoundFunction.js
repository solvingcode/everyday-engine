import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'

export default class VectorRoundFunction extends AFunction{

    constructor() {
        super('VectorRound')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('vector', TYPES.VECTOR, 0)
        this.addInput('digits', TYPES.NUMBER, 0)
        this.addOutput(TYPES.VECTOR)
    }
}