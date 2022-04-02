import {TYPES} from '../../../../pobject/AttributeType.js'
import ANativeFunction from '../ANativeFunction.js'

export default class VectorFunction extends ANativeFunction{

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