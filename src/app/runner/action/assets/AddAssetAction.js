import Action from '../Action.js'
import StateManager from '../../../state/StateManager.js'
import FileHelper from '../../../utils/FileHelper.js'
import World from '../../../world/World.js'

export default class AddAssetAction extends Action {

    static fileId = 'file-add-asset'
    static STATE = 'ACTION_ADD_ASSET'

    /**
     * @override
     */
    static run() {
        const fileData = FileHelper.openFileUpload(this.fileId)
        if (fileData) {
            FileHelper.removeFileUpload(this.fileId)
            World.get().getAssetsManager().setAssetByBlob(fileData).then(() => {
                StateManager.get().stopNextState(this.STATE)
            })
        }
        return false
    }

}