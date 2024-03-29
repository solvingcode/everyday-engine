import {TYPES} from '../../../../pobject/AttributeType.js'
import ANativeFunction from '../ANativeFunction.js'

export default class IsGroundedFunction extends ANativeFunction{

    constructor() {
        super('IsGrounded')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('target', TYPES.UNIT, 0)
        this.addInput('component', TYPES.COMPONENT_INSTANCE, 0)
        this.addOutput(TYPES.BOOLEAN)
    }
}