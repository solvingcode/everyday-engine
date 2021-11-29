import Runner from '../Runner.js'
import World from '../../world/World.js'
import SceneHelper from '../../utils/SceneHelper.js'

export default class GameSceneRunner extends Runner {

    /**
     * @override
     */
    isHandle(window) {
        return true
    }

    /**
     * @override
     */
    execute() {
        SceneHelper.load(World.get(), false)
    }

}