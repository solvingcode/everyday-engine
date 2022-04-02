import {TYPES} from '../../../../pobject/AttributeType.js'
import ANativeFunction from '../ANativeFunction.js'
import Vector from '../../../../utils/Vector.js'

export default class SetWorldPositionFunction extends ANativeFunction{

    constructor() {
        super('SetWorldPosition')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('target', TYPES.UNIT, 0)
        this.addInput('vector', TYPES.VECTOR, new Vector())
    }
}