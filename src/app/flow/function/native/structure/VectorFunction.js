import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'

export default class VectorFunction extends AFunction{

    constructor() {
        super('Vector')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('x', TYPES.NUMBER, 0)
        this.addInput('y', TYPES.NUMBER, 0)
        this.addInput('z', TYPES.NUMBER, 0)
        this.addOutput(TYPES.VECTOR)
    }
}