import Action from '../Action.js'
import Project from '../../../project/Project.js'
import StateManager from '../../../state/StateManager.js'

export default class LoadProjectAction extends Action {

    static STATE = 'ACTION_LOAD_PROJECT'

    /**
     * @override
     */
    static run() {
        const {files} = StateManager.get().getNextProgressData(this.STATE)
        Project.get().load(files[0])
        return true
    }

}
