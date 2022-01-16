import Action from '../Action.js'
import StateManager from '../../../state/StateManager.js'
import GUIPropertyComponent from '../../../component/internal/gui/property/GUIPropertyComponent.js'

export default class LockItemAction extends Action {

    /**
     * @const
     * @type {string}
     */
    static STATE = 'ACTION_LOCK_ITEM'

    /**
     * @override
     */
    static run() {
        const {unit} = StateManager.get().getNextProgressData(this.STATE)
        unit.getComponent(GUIPropertyComponent).setLocked(true)
        return true
    }

}