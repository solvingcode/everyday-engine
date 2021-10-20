import Action from '../Action.js'
import StateManager from '../../../state/StateManager.js'

export default class StopAnimationAction extends Action {

    static STATE = 'ACTION_STOP_ANIMATION'

    /**
     * @override
     */
    static run() {
        const {animation} = StateManager.get().getNextProgressData(this.STATE)
        animation.setPlaying(false)
        animation.setTime(0)
        return true
    }

}