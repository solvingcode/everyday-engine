import Action from '../Action.js'
import World from '../../../world/World.js'
import AssetAnimationScriptGenerator from '../../../generator/animation/AssetAnimationScriptGenerator.js'
import AssetAnimationScriptXml from '../../../asset/types/animation/AssetAnimationScriptXml.js'
import AnimationScript from '../../../flow/AnimationScript.js'

export default class AddAnimationScriptAction extends Action {

    static STATE = 'ACTION_ADD_ANIMATION_SCRIPT'

    /**
     * @override
     */
    static run() {
        const assetsManager = World.get().getAssetsManager()
        const selectedFolder = assetsManager.getSelectedFolder() || assetsManager.getRootFolder()
        assetsManager.createAnimationScript(selectedFolder, AssetAnimationScriptXml,
            AssetAnimationScriptGenerator.get(), AnimationScript)
            .then(asset => asset.open() || asset.select())
        return true
    }

}