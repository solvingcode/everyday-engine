import Action from '../Action.js'
import StateManager from '../../../state/StateManager.js'
import GUIPropertyComponent from '../../../component/internal/gui/property/GUIPropertyComponent.js'
import MeshComponent from '../../../component/internal/MeshComponent.js'

export default class ShowItemAction extends Action {

    /**
     * @const
     * @type {string}
     */
    static STATE = 'ACTION_SHOW_ITEM'

    /**
     * @override
     */
    static run() {
        const {unit} = StateManager.get().getNextProgressData(this.STATE)
        unit.getComponent(GUIPropertyComponent).setVisible(true)
        unit.getComponent(MeshComponent).setGenerated(false)
        return true
    }

}