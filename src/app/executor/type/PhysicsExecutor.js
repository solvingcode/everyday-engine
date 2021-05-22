import ComponentExecutor from './ComponentExecutor.js'
import World from '../../world/World.js'
import RigidBodyComponent from '../../component/internal/RigidBodyComponent.js'

export default class PhysicsExecutor extends ComponentExecutor {

    constructor() {
        super([RigidBodyComponent])
    }

    /**
     * @override
     */
    execute(unit, executionContext) {
        const world = World.get()
        const physicsManager = world.getPhysicsManager()
        physicsManager.addUnit(unit)
    }

}