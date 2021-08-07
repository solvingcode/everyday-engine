import Runner from '../Runner.js'
import World from '../../world/World.js'

export default class SceneRunner extends Runner {

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
        const world = World.get()
        const sceneManager = world.getSceneManager()
        sceneManager.getUnLoading().forEach(scene => sceneManager.unLoad(world, scene))
        sceneManager.getLoading().forEach(scene => sceneManager.load(world, scene))
    }

}