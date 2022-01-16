import Action from '../Action.js'
import World from '../../../world/World.js'

/**
 * Duplicate Action
 * Allow to duplicate (clone) an entity
 */
class DuplicateAction extends Action {

    /**
     * @override
     */
    static run(mouse, selectedUnits, unitSelector) {
        const world = World.get()
        const unitManager = world.getUnitManager()
        unitSelector.unselectAll(world)
        const clones = unitManager.cloneUnits(selectedUnits)
        clones.forEach(unit => unit.select())
        return true
    }

}

export default DuplicateAction