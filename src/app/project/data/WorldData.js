import Data from './Data.js'

/**
 * @class {WorldData}
 * @extends {Data}
 *
 * @property {AiEngine} aiEngine
 * @property {Camera} camera
 */
class WorldData extends Data {

    static instance

    entityManager
    camera
    physics
    terrainManager
    assetsManager
    cameraEntityId
    resolution
    showGrid

    /**
     * @param {World} data
     */
    set(data) {
        if (data instanceof WorldData) {
            Object.getOwnPropertyNames(this).map(prop => this[prop] = data[prop])
            this.reload()
        } else {
            throw new TypeError('Cannot set the new world, data must be instance of World class')
        }
    }

    reload() {
        throw new TypeError('World.reload must be implemented!')
    }

    /**
     * @param {EntityManagerData} entityManager
     */
    setEntityManager(entityManager) {
        this.entityManager = entityManager
    }

    /**
     * @param {CameraData} camera
     */
    setCamera(camera) {
        this.camera = camera
    }

    /**
     * @param {PhysicsData} physics
     */
    setPhysics(physics) {
        this.physics = physics
    }

    /**
     * @param {TerrainManagerData} terrainManager
     */
    setTerrainManager(terrainManager) {
        this.terrainManager = terrainManager
    }

    /**
     * @param {AssetsManagerData} assetsManager
     */
    setAssetsManager(assetsManager) {
        this.assetsManager = assetsManager
    }

    /**
     * Get the physics manager
     * @return {Physics}
     */
    getPhysics() {
        return this.physics
    }

    /**
     * @return {EntityManager}
     */
    getEntityManager() {
        return this.entityManager
    }

    /**
     * Get the Ai engine
     */
    getAiEngine() {
        return this.aiEngine
    }

    /**
     * @return {TerrainManager}
     */
    getTerrainManager() {
        return this.terrainManager
    }

    /**
     * @return {AssetsManager}
     */
    getAssetsManager() {
        return this.assetsManager
    }

    /**
     * @return {number}
     */
    getCameraEntityId(){
        return this.cameraEntityId
    }

    /**
     * @param {number} entityId
     */
    setCameraEntityId(entityId){
        this.cameraEntityId = entityId
    }

    /**
     * Get the principal camera (active)
     * @return {Camera}
     */
    getCamera() {
        return this.camera
    }

    /**
     * @return {Size}
     */
    getResolution(){
        return this.resolution
    }

    /**
     * @param {Size} resolution
     */
    setResolution(resolution){
        this.resolution = resolution
    }

    /**
     * @return {boolean}
     */
    getShowGrid(){
        return this.showGrid
    }

    /**
     * @param {boolean} showGrid
     */
    setShowGrid(showGrid){
        this.showGrid = showGrid
    }

    static new() {
        this.instance = new this()
    }

}

export default WorldData