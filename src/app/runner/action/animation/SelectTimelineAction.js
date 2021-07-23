import Action from '../Action.js'
import StateManager from '../../../state/StateManager.js'
import World from '../../../world/World.js'

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
        const {bind, list} = StateManager.get().getNextProgressData(this.STATE)
        list.forEach(element => element.unselect())
        bind.select()
        const animation = World.get().getAnimationManager().findByTimeline(bind)
        const frame = bind.getFrame()
        if (frame) {
            animation.setTime(frame.getTime())
        }
        return true
    }

}