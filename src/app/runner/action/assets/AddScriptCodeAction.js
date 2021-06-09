import Action from '../Action.js'
import World from '../../../world/World.js'
import AssetScriptCode from '../../../asset/types/script/AssetScriptCode.js'
import AssetScriptCodeGenerator from '../../../generator/script/AssetScriptCodeGenerator.js'

export default class AddScriptCodeAction extends Action {

    static STATE = 'ACTION_ADD_CODE_SCRIPT_CODE'

    /**
     * @override
     */
    static run() {
        const assetsManager = World.get().getAssetsManager()
        const selectedFolder = assetsManager.getSelectedFolder() || assetsManager.getRootFolder()
        assetsManager.createClassScript(selectedFolder, AssetScriptCode, AssetScriptCodeGenerator.get())
            .then(asset => asset.open() || asset.select())
        return true
    }

}