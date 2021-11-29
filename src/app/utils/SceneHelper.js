export default class SceneHelper {

    /**
     * @param {World} world
     * @param {boolean} edit
     */
    static load(world, edit){
        const sceneManager = world.getSceneManager()
        const unLoadingScenes = sceneManager.getUnLoading()
        const loadingScenes = sceneManager.getLoading()
        const physicsManager = world.getPhysicsManager()

        if(unLoadingScenes.length){
            world.unloadAllScene()
        }
        loadingScenes.forEach(scene => sceneManager.load(world, scene, edit))

        if(unLoadingScenes.length || loadingScenes.length){
            world.forceReload()
            physicsManager.clear()
        }
    }

}
