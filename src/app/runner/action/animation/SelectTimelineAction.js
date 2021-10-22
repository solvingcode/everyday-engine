import Action from '../Action.js'
import StateManager from '../../../state/StateManager.js'

export default class SelectTimelineAction extends Action {

    /**
     * @const
     * @type {string}
     */
    static STATE = 'ACTION_SELECT_LIST_TIMELINE'

    /**
     * @override
     */
    static run() {
        const {bind} = StateManager.get().getNextProgressData(this.STATE)
        if (bind) {
            const animation = bind.getAnimation()
            animation.setTime(bind.getTime())
        }
        return true
    }

}