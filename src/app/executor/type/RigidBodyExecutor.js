import ComponentExecutor from './ComponentExecutor.js'
import World from '../../world/World.js'
import RigidBodyComponent from '../../component/internal/RigidBodyComponent.js'
import TransformComponent from '../../component/internal/TransformComponent.js'
import MeshComponent from '../../component/internal/MeshComponent.js'
import RigidBodyOptions from '../../pobject/RigidBodyOptions.js'

export default class RigidBodyExecutor extends ComponentExecutor {

    constructor() {
        super([TransformComponent, MeshComponent, RigidBodyComponent])
    }

    /**
     * @override
     */
    execute(unit, executionContext) {
        const world = World.get()
        const physicsManager = world.getPhysicsManager()
        const rigidBodyComponent = unit.getComponent(RigidBodyComponent)
        const options = new RigidBodyOptions()
        options.isStatic = false
        options.freezeRotation = rigidBodyComponent.isFreezeRotation()
        physicsManager.addBody(unit, options)
        if(rigidBodyComponent.isFrictionOnGround()){
            if(physicsManager.isGrounded(unit)){
                physicsManager.setFriction(unit, 1)
            }else{
                physicsManager.setFriction(unit, 0)
            }
        }
    }

}