import Action from '../Action.js'
import World from '../../../world/World.js'

class ShowAction extends Action {

    /**
     * @override
     */
    static run() {
        const unitManager = World.get().getUnitManager()
        const selectedUnit = unitManager.getSelected()
        unitManager.setVisibilityUnit(selectedUnit, true)
        return true
    }

}

export default ShowAction