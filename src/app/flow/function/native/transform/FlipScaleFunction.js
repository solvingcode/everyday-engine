import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'

export default class FlipScaleFunction extends AFunction {

    constructor() {
        super('FlipScale')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('target', TYPES.UNIT, 0)
        this.addInput('scaleFactor', TYPES.VECTOR, 0)
    }
}