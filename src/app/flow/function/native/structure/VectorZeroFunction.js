import {TYPES} from '../../../../pobject/AttributeType.js'
import ANativeFunction from '../ANativeFunction.js'

export default class VectorZeroFunction extends ANativeFunction{

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