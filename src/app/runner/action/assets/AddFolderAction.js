import Action from '../Action.js'
import World from '../../../world/World.js'

export default class AddFolderAction extends Action {

    static STATE = 'ACTION_ADD_FOLDER'

    /**
     * @override
     */
    static run() {
        const assetsManager = World.get().getAssetsManager()
        const selectedFolder = assetsManager.getSelectedFolder()
        assetsManager.createFolder(selectedFolder)
        return true
    }

}