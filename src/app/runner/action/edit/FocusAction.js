import Action from '../Action.js'
import World from '../../../world/World.js'

export default class FocusAction extends Action {

    /**
     * @override
     */
    static run() {
        const unitManager = World.get().getUnitManager()
        const selectedUnit = unitManager.getSelected()
        unitManager.setFocusUnit(selectedUnit, true)
        return true
    }

}