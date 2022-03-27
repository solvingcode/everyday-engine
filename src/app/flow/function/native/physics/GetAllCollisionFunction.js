import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'

export default class GetAllCollisionFunction extends AFunction{

    constructor() {
        super('GetAllCollision')
    }

    /**
     * @override
     */d
    initAttributes() {
        this.addInput('target', TYPES.UNIT)
        this.addInput('collider', TYPES.COMPONENT_INSTANCE)
        this.addInput('maskGroup', TYPES.MASK_GROUP_INSTANCE)
        this.addOutput(TYPES.ARRAY | TYPES.COMPONENT_INSTANCE)
    }
}