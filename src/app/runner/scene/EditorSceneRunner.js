import Runner from '../Runner.js'
import World from '../../world/World.js'
import SceneHelper from '../../utils/SceneHelper.js'

export default class EditorSceneRunner extends Runner {

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
        SceneHelper.load(World.get(), true)
    }

}