import Action from '../Action.js'
import World from '../../../world/World.js'

export default class EditAssetScriptXmlAction extends Action {

    static STATE = 'ACTION_EDIT_ASSET_SCRIPT_XML'

    /**
     * @override
     */
    static run() {
        const world = World.get()
        const selectedAsset = world.getAssetsManager().getSelectedAsset()
        selectedAsset.open()
        return true
    }

}