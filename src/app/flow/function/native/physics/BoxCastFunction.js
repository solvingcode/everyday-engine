import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'

export default class BoxCastFunction extends AFunction{

    constructor() {
        super('BoxCast')
    }

    /**
     * @override
     */
    initAttributes() {
        this.addInput('target', TYPES.UNIT)
        this.addInput('collider', TYPES.COMPONENT_INSTANCE)
        this.addInput('distance', TYPES.VECTOR)
        this.addInput('maskGroup', TYPES.MASK_GROUP_INSTANCE)
        this.addOutput(TYPES.ARRAY | TYPES.COMPONENT_INSTANCE)
    }
}