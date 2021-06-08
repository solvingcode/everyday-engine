import Action from '../Action.js'
import World from '../../../world/World.js'

export default class PlayAnimationAction extends Action {

    static STATE = 'ACTION_PLAY_ANIMATION'

    /**
     * @override
     */
    static run() {
        const world = World.get()
        const tabManager = world.getTabManager()
        const animation = world.getAnimationManager().getSelected(tabManager)
        animation.setPlaying(true)
        return true
    }

}