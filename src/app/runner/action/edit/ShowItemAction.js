import Action from '../Action.js'
import StateManager from '../../../state/StateManager.js'
import World from '../../../world/World.js'

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
        const unitManager = World.get().getUnitManager()
        const {unit} = StateManager.get().getNextProgressData(this.STATE)
        unitManager.setVisibilityUnit(unit, true)
        return true
    }

}