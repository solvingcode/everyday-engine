import Action from '../Action.js'
import StateManager from '../../../state/StateManager.js'
import FileHelper, {EXTENSIONS} from '../../../utils/FileHelper.js'
import LoadProjectAction from './LoadProjectAction.js'

export default class OpenDialogLoadProjectAction extends Action {

    static fileId = 'file-load-project'
    static STATE = 'ACTION_OPEN_DIALOG_LOAD_PROJECT'

    /**
     * @override
     */
    static run() {
        const stateManager = StateManager.get()
        const options = {
            types: [{
                accept: {
                    [EXTENSIONS.XML.type]: EXTENSIONS.XML.ext,
                }
            }]
        }
        FileHelper.openFileUpload(this.fileId, options).then(filesData => {
            if (filesData.length) {
                stateManager.startState(LoadProjectAction.STATE, 1, {files: filesData})
            }
        })
        return true
    }

    /**
     * @override
     */
    static stop(){
        FileHelper.removeFileUpload(this.fileId)
        return true
    }

}
