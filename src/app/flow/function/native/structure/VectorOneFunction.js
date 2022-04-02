import {TYPES} from '../../../../pobject/AttributeType.js'
import ANativeFunction from '../ANativeFunction.js'

export default class VectorOneFunction extends ANativeFunction{

    constructor() {
        super('VectorOne')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addOutput(TYPES.VECTOR)
    }
}