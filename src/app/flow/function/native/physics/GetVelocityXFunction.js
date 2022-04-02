import {TYPES} from '../../../../pobject/AttributeType.js'
import ANativeFunction from '../ANativeFunction.js'

export default class GetVelocityXFunction extends ANativeFunction{

    constructor() {
        super('GetVelocityX')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('target', TYPES.UNIT, 0)
        this.addOutput(TYPES.NUMBER)
    }
}