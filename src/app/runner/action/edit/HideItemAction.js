import Action from '../Action.js'
import World from '../../../world/World.js'
import StateManager from '../../../state/StateManager.js'

export default class HideItemAction extends Action {

    /**
     * @const
     * @type {string}
     */
    static STATE = 'ACTION_HIDE_ITEM'

    /**
     * @override
     */
    static run() {
        const entityManager = World.get().getEntityManager()
        const {entity} = StateManager.get().getNextProgressData(this.STATE)
        entityManager.hide(entity)
        return true
    }

}