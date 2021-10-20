import Action from '../Action.js'
import World from '../../../world/World.js'
import AssetScriptXml from '../../../asset/types/script/AssetScriptXml.js'
import ClassScript from '../../../flow/ClassScript.js'
import Storage from '../../../core/Storage.js'

export default class AddClassScriptAction extends Action {

    static STATE = 'ACTION_ADD_SCRIPT'

    /**
     * @override
     */
    static run() {
        const assetsManager = World.get().getAssetsManager()
        const selectedFolder = assetsManager.getSelectedFolder() || assetsManager.getRootFolder()
        assetsManager.createClassScript(selectedFolder, AssetScriptXml, ClassScript, Storage.get())
            .then(asset => asset.open() || asset.select())
        return true
    }

}