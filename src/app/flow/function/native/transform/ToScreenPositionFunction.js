import {TYPES} from '../../../../pobject/AttributeType.js'
import ANativeFunction from '../ANativeFunction.js'

export default class ToScreenPositionFunction extends ANativeFunction{

    constructor() {
        super('ToScreenPosition')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('position', TYPES.VECTOR, 0)
        this.addOutput(TYPES.VECTOR)
    }
}