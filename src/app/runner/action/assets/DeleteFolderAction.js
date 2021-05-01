import Action from '../Action.js'
import World from '../../../world/World.js'
import AssetHelper from '../../../utils/AssetHelper.js'

export default class DeleteFolderAction extends Action {

    static STATE = 'ACTION_DELETE_FOLDER'

    /**
     * @override
     */
    static run() {
        const assetsManager = World.get().getAssetsManager()
        const selectedFolder = assetsManager.getSelectedFolder()
        const rootFolder = assetsManager.getRootFolder()
        if (selectedFolder === rootFolder) {
            throw new TypeError(`Cannot delete root folder`)
        }
        const assets = assetsManager.findAssetsByFolderId(selectedFolder.getId())
        assets.forEach(asset => AssetHelper.deleteAsset(asset))
        assetsManager.deleteFolder(selectedFolder)
        return true
    }

}