import Action from '../Action.js'
import {EXTENSIONS} from '../../../utils/FileHelper.js'
import StateManager from '../../../state/StateManager.js'
import ExportProjectAction from './ExportProjectAction.js'

export default class OpenDialogExportProjectAction extends Action {

    static STATE = 'ACTION_OPEN_DIALOG_EXPORT_PROJECT'

    /**
     * @override
     */
    static run() {
        const stateManager = StateManager.get()
        const options = {
            types: [{
                accept: {
                    [EXTENSIONS.ZIP.type]: EXTENSIONS.ZIP.ext,
                }
            }]
        }
        const handle = window.showSaveFilePicker(options)
        stateManager.startState(ExportProjectAction.STATE, 1, {handle})
        return true
    }

}
