import Action from '../Action.js'
import Project from '../../../project/Project.js'
import StateManager from '../../../state/StateManager.js'
import {EXTENSIONS} from '../../../utils/FileHelper.js'
import SaveProjectAction from './SaveProjectAction.js'

export default class OpenDialogSaveProjectAction extends Action {

    static STATE = 'ACTION_OPEN_DIALOG_SAVE_PROJECT'

    /**
     * @override
     */
    static run() {
        const project = Project.get()
        const stateManager = StateManager.get()
        if(!project.getHandle()){
            const options = {
                types: [{
                    accept: {
                        [EXTENSIONS.XML.type]: EXTENSIONS.XML.ext,
                    }
                }]
            }
            project.setHandle(window.showSaveFilePicker(options))
        }
        stateManager.startState(SaveProjectAction.STATE, 1)
        return true
    }

}
