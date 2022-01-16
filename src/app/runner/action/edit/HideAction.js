import Action from '../Action.js'
import World from '../../../world/World.js'

class HideAction extends Action {

    /**
     * @override
     */
    static run() {
        const unitManager = World.get().getUnitManager()
        const selectedUnit = unitManager.getSelected()
        unitManager.setVisibilityUnit(selectedUnit, false)
        return true
    }

}

export default HideAction