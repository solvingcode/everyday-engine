import Action from '../Action.js'
import World from '../../../world/World.js'

class DeleteUnitAction extends Action {

    /**
     * @override
     */
    static run(mouse, selectedUnits) {
        const unitManager = World.get().getUnitManager()
        selectedUnits.forEach(unit => unitManager.deleteUnit(unit))
        return true
    }

}

export default DeleteUnitAction