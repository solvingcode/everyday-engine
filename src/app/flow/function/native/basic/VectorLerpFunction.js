import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'

export default class VectorLerpFunction extends AFunction{

    constructor() {
        super('VectorLerp')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('vectorA', TYPES.VECTOR)
        this.addInput('vectorB', TYPES.VECTOR)
        this.addInput('constant', TYPES.NUMBER, 0)
        this.addOutput(TYPES.VECTOR)
    }
}