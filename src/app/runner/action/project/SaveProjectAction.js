import Action from '../Action.js'
import Project from '../../../project/Project.js'

export default class SaveProjectAction extends Action {

    static STATE = 'ACTION_SAVE_PROJECT'

    /**
     * @override
     */
    static run() {
        const project = Project.get()
        project.save(project.getHandle())
        return true
    }

}
