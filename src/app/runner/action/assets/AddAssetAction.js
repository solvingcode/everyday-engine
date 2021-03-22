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
        const filesData = FileHelper.openFileUpload(this.fileId)
        if (filesData.length) {
            StateManager.get().stopNextState(this.STATE)
            Array.from(filesData).forEach(fileData => World.get().getAssetsManager().setAssetByBlob(fileData))
        }
        return false
    }

    static stop(){
        FileHelper.removeFileUpload(this.fileId)
        return true
    }

}