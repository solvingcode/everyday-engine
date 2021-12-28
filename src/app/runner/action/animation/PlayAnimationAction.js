import Action from '../Action.js'
import StateManager from '../../../state/StateManager.js'

export default class PlayAnimationAction extends Action {

    static STATE = 'ACTION_PLAY_ANIMATION'

    /**
     * @override
     */
    static run() {
        const {animationComponent} = StateManager.get().getNextProgressData(this.STATE)
        animationComponent.setPlaying(true)
        return true
    }

}