import Action from '../Action.js'
import World from '../../../world/World.js'
import KeyFrame from '../../../animation/KeyFrame.js'

export default class AttachAssetAnimationAction extends Action {

    static STATE = 'ACTION_ATTACH_ASSET_ANIMATION'

    /**
     * @override
     */
    static run() {
        const world = World.get()
        const tabManager = world.getTabManager()
        const selectedAsset = world.getAssetsManager().getSelectedAsset()
        const animationAsset = tabManager.getSelectedContentData()
        const animation = world.getAnimationManager().getSelected(tabManager)
        const frame = new KeyFrame()
        frame.setAssetId(selectedAsset.getId())
        frame.setTime(0)
        animation.addFrame(frame)
        animationAsset.generate(animation)
        return true
    }

}