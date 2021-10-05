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
        const unLoadingScenes = sceneManager.getUnLoading()
        const loadingScenes = sceneManager.getLoading()
        const physicsManager = world.getPhysicsManager()

        if(unLoadingScenes.length){
            world.unloadAllScene()
        }
        loadingScenes.forEach(scene => sceneManager.load(world, scene))

        if(unLoadingScenes.length || loadingScenes.length){
            world.regenerateAll()
            physicsManager.clear()
        }
    }

}