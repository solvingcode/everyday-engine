import Action from '../Action.js'
import StateManager from '../../../state/StateManager.js'
import FileHelper, {EXTENSIONS} from '../../../utils/FileHelper.js'
import AddAssetAction from './AddAssetAction.js'

export default class OpenDialogAddAssetAction extends Action {

    static fileId = 'file-add-asset'
    static STATE = 'ACTION_OPEN_DIALOG_ADD_ASSET'

    /**
     * @override
     */
    static run() {
        const stateManager = StateManager.get()
        const options = {
            types: [{
                accept: {
                    [EXTENSIONS.IMG.type]: EXTENSIONS.IMG.ext,
                    [EXTENSIONS.XML.type]: EXTENSIONS.XML.ext,
                    [EXTENSIONS.AUDIO.type]: EXTENSIONS.AUDIO.ext,
                    [EXTENSIONS.FONT.type]: EXTENSIONS.AUDIO.ext
                }
            }],
            multiple: true
        }
        FileHelper.openFileUpload(this.fileId, options).then(filesData => {
            if (filesData.length) {
                stateManager.startState(AddAssetAction.STATE, 1, {files: filesData})
            }
        })
        return true
    }

    /**
     * @override
     */
    static stop() {
        FileHelper.removeFileUpload(this.fileId)
        return true
    }

}