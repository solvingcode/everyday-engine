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
        if (!rigidBodyComponent.isCreated()) {
            physicsManager.deleteUnit(unit)
        }
        options.isStatic = false
        options.freezeRotation = rigidBodyComponent.isFreezeRotation()
        options.velocity = rigidBodyComponent.getVelocity()
        physicsManager.addBody(unit, options)
        physicsManager.setFriction(unit, rigidBodyComponent.getFriction())
        rigidBodyComponent.setCreated(true)
    }

}