import Action from '../Action.js'
import StateManager from '../../../state/StateManager.js'
import World from '../../../world/World.js'

export default class StartAnimationRecordingAction extends Action {

    /**
     * @const
     * @type {string}
     */
    static STATE = 'ACTION_EDIT_ANIMATION_START_RECORD'

    /**
     * @override
     */
    static run() {
        const {animation} = StateManager.get().getNextProgressData(this.STATE)
        if (animation) {
            World.get().getAnimationManager().startRecording(animation)
        }
        return true
    }

}