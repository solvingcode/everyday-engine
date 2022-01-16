import Action from '../Action.js'
import World from '../../../world/World.js'

class NewProjectAction extends Action {

    /**
     * @override
     */
    static run() {
        World.new()
        return true
    }

}

export default NewProjectAction