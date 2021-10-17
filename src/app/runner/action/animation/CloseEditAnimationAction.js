import Action from '../Action.js'
import World from '../../../world/World.js'

export default class CloseEditAnimationAction extends Action {

    static STATE = 'ACTION_CLOSE_EDIT_ANIMATION'

    /**
     * @override
     */
    static run() {
        const world = World.get()
        world.getAnimationManager().closeEditing()
        return true
    }

}