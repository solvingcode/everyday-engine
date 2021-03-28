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
        if (fileData.length) {
            StateManager.get().stopNextState(this.STATE)
            Project.get().load(fileData[0])
        }
        return false
    }

    /**
     * @override
     */
    static stop(){
        FileHelper.removeFileUpload(this.fileId)
        return true
    }

}

export default LoadProjectAction