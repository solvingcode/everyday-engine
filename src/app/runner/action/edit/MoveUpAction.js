import Action from '../Action.js'
import World from '../../../world/World.js'

class MoveUpAction extends Action {

    /**
     * @override
     */
    static run(mouse, selectedUnits) {
        const unitManager = World.get().getUnitManager()
        selectedUnits.forEach(unit => unitManager.moveUnitUp(unit))
        return true
    }

}

export default MoveUpAction