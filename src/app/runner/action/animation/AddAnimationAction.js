import Action from '../Action.js'
import World from '../../../world/World.js'
import AssetAnimationXml from '../../../asset/types/animation/AssetAnimationXml.js'
import UnitSelector from '../../../selector/UnitSelector.js'
import Storage from '../../../core/Storage.js'

export default class AddAnimationAction extends Action {

    static STATE = 'ACTION_ADD_ANIMATION'

    /**
     * @override
     */
    static run() {
        const world = World.get()
        const assetsManager = world.getAssetsManager()
        const selectedFolder = assetsManager.getSelectedFolder() || assetsManager.getRootFolder()
        const unit = UnitSelector.get().getFirstSelected(world)
        if (unit) {
            const animationController = world.getUnitManager().getUnitAnimationController(world, unit)
            if (animationController) {
                assetsManager.createAnimation(selectedFolder, AssetAnimationXml, animationController, Storage.get())
            }
        }
        return true
    }

}