import Action from '../Action.js'
import World from '../../../world/World.js'
import TabManager from '../../../manager/TabManager.js'
import EditScriptContent from '../../../content/EditScriptContent.js'

export default class EditAssetScriptAction extends Action {

    static STATE = 'ACTION_EDIT_ASSET_SCRIPT'

    /**
     * @override
     */
    static run() {
        const world = World.get()
        const selectedAsset = world.getAssetsManager().getSelectedAsset()
        TabManager.get().create(selectedAsset.getName(), new EditScriptContent(selectedAsset))
        return true
    }

}