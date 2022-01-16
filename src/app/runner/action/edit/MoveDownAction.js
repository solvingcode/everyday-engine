import Action from '../Action.js'
import World from '../../../world/World.js'

class MoveDownAction extends Action {

    /**
     * @override
     */
    static run(mouse, selectedUnits) {
        const unitManager = World.get().getUnitManager()
        selectedUnits.forEach(unit => unitManager.moveUnitDown(unit))
        return true
    }

}

export default MoveDownAction