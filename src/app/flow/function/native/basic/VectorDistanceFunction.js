import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'

export default class VectorDistanceFunction extends AFunction{

    constructor() {
        super('VectorDistance')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('vectorA', TYPES.VECTOR, 0)
        this.addInput('vectorB', TYPES.VECTOR, 0)
        this.addOutput(TYPES.NUMBER)
    }
}