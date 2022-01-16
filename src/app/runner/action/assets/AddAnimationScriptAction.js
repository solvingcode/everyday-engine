import Action from '../Action.js'
import World from '../../../world/World.js'
import AssetAnimationScriptXml from '../../../asset/types/animation/AssetAnimationScriptXml.js'
import AnimatorScript from '../../../flow/AnimatorScript.js'
import Storage from '../../../core/Storage.js'

export default class AddAnimationScriptAction extends Action {

    static STATE = 'ACTION_ADD_ANIMATION_SCRIPT'

    /**
     * @override
     */
    static run() {
        const assetsManager = World.get().getAssetsManager()
        const selectedFolder = assetsManager.getSelectedFolder() || assetsManager.getRootFolder()
        assetsManager.createAnimationScript(selectedFolder, AssetAnimationScriptXml, AnimatorScript, Storage.get())
            .then(asset => asset.open() || asset.select())
        return true
    }

}