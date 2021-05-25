import ComponentExecutor from './ComponentExecutor.js'
import World from '../../world/World.js'
import ColliderComponent from '../../component/internal/ColliderComponent.js'
import RigidBodyComponent from '../../component/internal/RigidBodyComponent.js'

export default class ColliderExecutor extends ComponentExecutor {

    constructor() {
        super([ColliderComponent])
    }

    /**
     * @override
     */
    execute(unit, executionContext) {
        const world = World.get()
        const physicsManager = world.getPhysicsManager()
        if(!unit.hasComponents([RigidBodyComponent])){
            physicsManager.addBody(unit, true)
        }
    }

}