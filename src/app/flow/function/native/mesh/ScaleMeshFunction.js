import {TYPES} from '../../../../pobject/AttributeType.js'
import ANativeFunction from '../ANativeFunction.js'

export default class ScaleMeshFunction extends ANativeFunction {

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