import Action from '../Action.js'
import World from '../../../world/World.js'
import AssetScriptXml from '../../../asset/types/AssetScriptXml.js'
import AssetScriptXmlGenerator from '../../../generator/AssetScriptXmlGenerator.js'
import ClassScript from '../../../flow/ClassScript.js'

export default class AddScriptAction extends Action {

    static STATE = 'ACTION_ADD_SCRIPT'

    /**
     * @override
     */
    static run() {
        const assetsManager = World.get().getAssetsManager()
        const selectedFolder = assetsManager.getSelectedFolder() || assetsManager.getRootFolder()
        const assetName = assetsManager.generateUniqAssetName('New Script', selectedFolder.getId())
        const flow = new ClassScript(assetName)
        assetsManager
            .createAsset(
                AssetScriptXmlGenerator.get().generate(flow),
                AssetScriptXml,
                assetName,
                selectedFolder.getId()
            ).then(asset => asset.open())
        return true
    }

}