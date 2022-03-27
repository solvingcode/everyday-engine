import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'

export default class ScaleMeshFunction extends AFunction {

    constructor() {
        super('ScaleMesh')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('target', TYPES.UNIT, 0)
        this.addInput('scale', TYPES.VECTOR, 0)
    }
}