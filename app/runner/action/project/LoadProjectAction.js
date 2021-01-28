import Action from '../Action.js'
import Project from '../../../project/Project.js'
import StateManager from '../../../state/StateManager.js'

class LoadProjectAction extends Action {

    static fileId = 'file-load-project'
    static STATE = 'ACTION_LOAD_PROJECT'

    /**
     * @override
     */
    static run() {
        const fileData = this.openFileUpload()
        if (fileData) {
            this.removeFileUpload()
            Project.get().load(fileData).then(() => {
                StateManager.get().stopNextState(this.STATE)
            })
        }
        return false
    }

    /**
     * @return {Blob}
     */
    static openFileUpload() {
        let fileInput = document.getElementById(this.fileId)
        if (!fileInput) {
            fileInput = document.createElement('input')
            fileInput.type = 'file'
            fileInput.id = this.fileId
            document.body.appendChild(fileInput)
            fileInput.click()
        }
        return fileInput.files && fileInput.files[0]
    }

    static removeFileUpload() {
        document.body.removeChild(document.getElementById(this.fileId))
    }

}

export default LoadProjectAction