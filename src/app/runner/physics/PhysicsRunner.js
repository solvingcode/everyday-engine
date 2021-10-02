import Runner from '../Runner.js'
import World from '../../world/World.js'
import RigidBodyComponent from '../../component/internal/RigidBodyComponent.js'
import ColliderComponent from '../../component/internal/ColliderComponent.js'

export class PhysicsRunner extends Runner {

    /**
     * @type {PhysicsRunner}
     */
    static instance = null

    /**
     * @override
     */
    isHandle(window) {
        return true
    }

    /**
     * @override
     */
    execute() {
        const world = World.get()
        const physicsManager = world.getPhysicsManager()
        world.getUnitManager()
            .findUnitsByAnyComponentClasses([RigidBodyComponent, ColliderComponent])
            .forEach(unit => physicsManager.update(unit))
        physicsManager.updateEngine()
    }

}