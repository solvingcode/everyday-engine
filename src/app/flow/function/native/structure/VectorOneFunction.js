import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'

export default class VectorOneFunction extends AFunction{

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