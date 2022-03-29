import {TYPES} from '../../../../pobject/AttributeType.js'
import ANativeFunction from '../ANativeFunction.js'

export default class NormalizeVectorFunction extends ANativeFunction{

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
}