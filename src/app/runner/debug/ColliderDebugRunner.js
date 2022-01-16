import Runner from '../Runner.js'
import World from '../../world/World.js'
import GUIColliderComponent from '../../component/internal/gui/collider/GUIColliderComponent.js'
import ColliderComponent from '../../component/internal/ColliderComponent.js'
import UnitHelper from '../../utils/UnitHelper.js'

export default class ColliderDebugRunner extends Runner {

    /**
     * @type {ColliderDebugRunner}
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
     * @param {number} deltaTime
     */
    execute(deltaTime) {
        const world = World.get()
        const unitManager = world.getUnitManager()
        const colliderComponentClasses = [GUIColliderComponent]

        unitManager.getUnitsHasAnyComponents(colliderComponentClasses).forEach(unit => unitManager.deleteUnit(unit))

        const units = unitManager.findUnitsByComponentClasses([ColliderComponent])
        units.forEach(unit => {
            UnitHelper.createGUICollider(unit, world)
        })
    }
}
