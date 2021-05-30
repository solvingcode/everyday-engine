import ComponentExecutor from './ComponentExecutor.js'
import World from '../../world/World.js'
import ColliderComponent from '../../component/internal/ColliderComponent.js'
import RigidBodyComponent from '../../component/internal/RigidBodyComponent.js'
import TransformComponent from '../../component/internal/TransformComponent.js'
import MeshComponent from '../../component/internal/MeshComponent.js'
import RigidBodyOptions from '../../pobject/RigidBodyOptions.js'

export default class ColliderExecutor extends ComponentExecutor {

    constructor() {
        super([TransformComponent, MeshComponent, ColliderComponent])
    }

    /**
     * @override
     */
    execute(unit, executionContext) {
        const world = World.get()
        const physicsManager = world.getPhysicsManager()
        if(!unit.hasComponents([RigidBodyComponent])){
            const options = new RigidBodyOptions()
            options.isStatic = true
            physicsManager.addBody(unit, options)
        }
    }

}