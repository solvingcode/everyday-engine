import Action from '../Action.js'
import StateManager from '../../../state/StateManager.js'
import World from '../../../world/World.js'

export default class StopAnimationRecordingAction extends Action {

    /**
     * @const
     * @type {string}
     */
    static STATE = 'ACTION_EDIT_ANIMATION_STOP_RECORD'

    /**
     * @override
     */
    static run() {
        const {animation} = StateManager.get().getNextProgressData(this.STATE)
        if (animation) {
            World.get().getAnimationManager().stopRecording()
        }
        return true
    }

}