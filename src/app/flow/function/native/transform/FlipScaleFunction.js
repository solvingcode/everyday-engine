import {TYPES} from '../../../../pobject/AttributeType.js'
import ANativeFunction from '../ANativeFunction.js'

export default class FlipScaleFunction extends ANativeFunction {

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