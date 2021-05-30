import ComponentExecutor from './ComponentExecutor.js'
import World from '../../world/World.js'
import RigidBodyComponent from '../../component/internal/RigidBodyComponent.js'
import TransformComponent from '../../component/internal/TransformComponent.js'
import MeshComponent from '../../component/internal/MeshComponent.js'

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
        physicsManager.addBody(unit, false)
    }

}