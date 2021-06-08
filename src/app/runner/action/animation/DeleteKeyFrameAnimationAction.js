import Action from '../Action.js'
import World from '../../../world/World.js'

export default class DeleteKeyFrameAnimationAction extends Action {

    static STATE = 'ACTION_DELETE_ANIMATION_FRAME'

    /**
     * @override
     */
    static run() {
        const world = World.get()
        const tabManager = world.getTabManager()
        const animationAsset = tabManager.getSelectedContentData()
        const animation = world.getAnimationManager().getSelected(tabManager)
        const frame = animation.getSelectedTimeline().getFrame()
        animation.deleteFrame(frame)
        animationAsset.generate(animation)
        return true
    }

}