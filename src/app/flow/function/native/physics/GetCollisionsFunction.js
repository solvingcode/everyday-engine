import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'

export default class GetCollisionsFunction extends AFunction {

    constructor() {
        super('GetCollisions')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('target', TYPES.UNIT)
        this.addInput('collider', TYPES.COMPONENT_INSTANCE)
        this.addOutput(TYPES.ARRAY | TYPES.COMPONENT_INSTANCE)
    }
}