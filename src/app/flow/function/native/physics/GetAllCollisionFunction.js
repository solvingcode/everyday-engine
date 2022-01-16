import {TYPES} from '../../../../pobject/AttributeType.js'
import AFunction from '../../AFunction.js'
import World from '../../../../world/World.js'

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

    /**
     * @override
     */
    execute() {
        const world = World.get()
        const physicsManager = world.getPhysicsManager()
        const colliderComponent = this.getInputValue('collider')
        if(colliderComponent.isEnabled()){
            const unit = this.getInputValue('target')
            const maskGroup = this.getInputValue('maskGroup')
            const colliderComponents = physicsManager.getAllCollision(world, unit, colliderComponent, maskGroup)
            this.setOutputValue(colliderComponents)
        }
    }
}