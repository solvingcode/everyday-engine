import Action from '../Action.js'
import World from '../../../world/World.js'

export default class StopAnimationAction extends Action {

    static STATE = 'ACTION_STOP_ANIMATION'

    /**
     * @override
     */
    static run() {
        const world = World.get()
        const animation = world.getAnimationManager().getEditing()
        animation.setPlaying(false)
        animation.setTime(0)
        return true
    }

}