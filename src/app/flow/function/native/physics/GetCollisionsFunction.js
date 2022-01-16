import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'
import World from '../../../../world/World.js'

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

    /**
     * @override
     */
    execute() {
        const world = World.get()
        const physicsManager = world.getPhysicsManager()
        const colliderComponent = this.getInputValue('collider')
        if (colliderComponent.isEnabled()) {
            const unit = this.getInputValue('target')
            const colliderComponents = physicsManager.getAllCollision(world, unit, colliderComponent, null)
            this.setOutputValue(colliderComponents)
        }
    }
}