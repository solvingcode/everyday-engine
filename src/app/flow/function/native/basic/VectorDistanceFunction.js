import {TYPES} from '../../../../pobject/AttributeType.js'
import ANativeFunction from '../ANativeFunction.js'

export default class VectorDistanceFunction extends ANativeFunction{

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