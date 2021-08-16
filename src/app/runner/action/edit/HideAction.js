import Action from '../Action.js'
import World from '../../../world/World.js'
import GUIPropertyComponent from '../../../component/internal/gui/property/GUIPropertyComponent.js'
import MeshComponent from '../../../component/internal/MeshComponent.js'

class HideAction extends Action {

    /**
     * @override
     */
    static run() {
        const selectedUnit = World.get().getUnitManager().getSelected()
        selectedUnit.getComponent(GUIPropertyComponent).setVisible(false)
        selectedUnit.getComponent(MeshComponent).setGenerated(false)
        return true
    }

}

export default HideAction