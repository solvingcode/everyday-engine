import Runner from '../Runner.js'
import World from '../../world/World.js'

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
        physicsManager.getMapBodyUnit().forEach(bodyUnit => {
            const unit = world.getUnitManager().findUnitById(bodyUnit.unitId)
            physicsManager.update(unit)
        })
        physicsManager.updateEngine()
    }

}