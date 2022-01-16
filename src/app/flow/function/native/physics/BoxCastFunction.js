import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'
import World from '../../../../world/World.js'

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

    /**
     * @override
     */
    execute() {
        const world = World.get()
        const physicsManager = world.getPhysicsManager()
        const colliderComponent = this.getInputValue('collider')
        const distance = this.getInputValue('distance')
        const unit = this.getInputValue('target')
        const maskGroup = this.getInputValue('maskGroup')
        this.setOutputValue(physicsManager
            .boxCast(world, unit, colliderComponent, distance, maskGroup)
            .map(pColliderComponent => pColliderComponent.getId()))
    }
}