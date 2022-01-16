import Action from '../Action.js'
import World from '../../../world/World.js'
import GUIPropertyComponent from '../../../component/internal/gui/property/GUIPropertyComponent.js'

class LockAction extends Action {

    /**
     * @override
     */
    static run() {
        const selectedUnit = World.get().getUnitManager().getSelected()
        selectedUnit.getComponent(GUIPropertyComponent).setLocked(true)
        return true
    }

}

export default LockAction