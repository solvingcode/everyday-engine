import Action from '../Action.js'
import World from '../../../world/World.js'
import GUIPropertyComponent from '../../../component/internal/gui/property/GUIPropertyComponent.js'

export default class UnlockAction extends Action {

    /**
     * @override
     */
    static run() {
        const selectedUnit = World.get().getUnitManager().getSelected()
        selectedUnit.getComponent(GUIPropertyComponent).setLocked(false)
        return true
    }

}