import Action from '../Action.js'
import Project from '../../../project/Project.js'
import StateManager from '../../../state/StateManager.js'

export default class ExportProjectAction extends Action {

    static STATE = 'ACTION_EXPORT_PROJECT'

    /**
     * @override
     */
    static run() {
        const {handle} = StateManager.get().getNextProgressData(this.STATE)
        Project.get().export(handle)
        return true
    }

}
