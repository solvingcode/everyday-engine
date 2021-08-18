import Action from '../Action.js'
import World from '../../../world/World.js'

export default class AddSceneAction extends Action {

    static STATE = 'ACTION_ADD_SCENE'

    /**
     * @override
     */
    static run() {
        const world = World.get()
        world.getSceneManager().create('Scene')
        return true
    }

}