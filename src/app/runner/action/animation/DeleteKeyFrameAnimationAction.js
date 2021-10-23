import Action from '../Action.js'
import World from '../../../world/World.js'
import AssetHelper from '../../../utils/AssetHelper.js'
import Storage from '../../../core/Storage.js'
import UnitSelector from '../../../selector/UnitSelector.js'
import UnitHelper from '../../../utils/UnitHelper.js'

export default class DeleteKeyFrameAnimationAction extends Action {

    static STATE = 'ACTION_DELETE_ANIMATION_FRAME'

    /**
     * @override
     */
    static run() {
        const world = World.get()
        const unit = UnitSelector.get().getFirstSelected(world)
        const animation = UnitHelper.getAnimation(world, unit)
        if(animation){
            const animationAsset = world.getAssetsManager().findAssetById(animation.getAssetId())
            animation.getSelectedFrames().forEach(frame => {
                animation.deleteFrame(frame)
            })
            AssetHelper.regenerate(animationAsset, animation, Storage.get())
        }
        return true
    }

}