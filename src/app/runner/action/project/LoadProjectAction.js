import Action from '../Action.js'
import Project from '../../../project/Project.js'
import StateManager from '../../../state/StateManager.js'
import FileHelper from '../../../utils/FileHelper.js'

class LoadProjectAction extends Action {

    static fileId = 'file-load-project'
    static STATE = 'ACTION_LOAD_PROJECT'

    /**
     * @override
     */
    static run() {
        const fileData = FileHelper.openFileUpload(this.fileId)
        if (fileData) {
            FileHelper.removeFileUpload(this.fileId)
            Project.get().load(fileData).then(() => {
                StateManager.get().stopNextState(this.STATE)
            })
        }
        return false
    }

}

export default LoadProjectAction