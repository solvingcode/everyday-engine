import Action from '../Action.js'
import StateManager from '../../../state/StateManager.js'

export default class SelectAnimationKeyFrameAction extends Action {

    /**
     * @const
     * @type {string}
     */
    static STATE = 'ACTION_SELECT_ANIMATION_KEYFRAME'

    /**
     * @override
     */
    static run() {
        const {animation, frame} = StateManager.get().getNextProgressData(this.STATE)
        if (animation && frame) {
            animation.getFrames().forEach(pFrame => pFrame.setSelected(false))
            frame.setSelected(true)
        }
        return true
    }

}