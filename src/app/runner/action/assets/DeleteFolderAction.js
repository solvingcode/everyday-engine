import Action from '../Action.js'
import World from '../../../world/World.js'
import AssetHelper from '../../../utils/AssetHelper.js'
import ClientError from '../../../exception/type/ClientError.js'

export default class DeleteFolderAction extends Action {

    static STATE = 'ACTION_DELETE_FOLDER'

    /**
     * @override
     */
    static run() {
        const world = World.get()
        const assetsManager = world.getAssetsManager()
        const selectedFolder = assetsManager.getSelectedFolder()
        const rootFolder = assetsManager.getRootFolder()
        if (selectedFolder === rootFolder) {
            throw new ClientError(`Cannot delete root folder`)
        }
        const assets = assetsManager.findAssetsByFolderId(selectedFolder.getId())
        assets.forEach(asset => AssetHelper.deleteAsset(asset, world))
        assetsManager.deleteFolder(selectedFolder)
        return true
    }

}