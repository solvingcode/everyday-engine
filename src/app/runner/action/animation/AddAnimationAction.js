import Action from '../Action.js'
import World from '../../../world/World.js'
import AssetAnimationXml from '../../../asset/types/animation/AssetAnimationXml.js'
import AssetAnimationXmlGenerator from '../../../generator/animation/AssetAnimationXmlGenerator.js'

export default class AddAnimationAction extends Action {

    static STATE = 'ACTION_ADD_ANIMATION'

    /**
     * @override
     */
    static run() {
        const assetsManager = World.get().getAssetsManager()
        const selectedFolder = assetsManager.getSelectedFolder() || assetsManager.getRootFolder()
        assetsManager.createAnimation(selectedFolder, AssetAnimationXml, AssetAnimationXmlGenerator.get())
            .then(asset => asset.open() || asset.select())
        return true
    }

}