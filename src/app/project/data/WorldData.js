import Data from './Data.js'
import SystemError from '../../exception/type/SystemError.js'

/**
 * @class {WorldData}
 * @extends {Data}
 *
 * @property {Camera} camera
 */
class WorldData extends Data {

    static instance

    tabManager
    preference
    functionRegistry
    compiledClassRegistry
    componentRegistry
    materialRegistry
    camera
    assetsManager
    sceneManager
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
            throw new SystemError('Cannot set the new world, data must be instance of World class')
        }
    }

    reload() {
        throw new SystemError('World.reload must be implemented!')
    }

    /**
     * @param {TabManagerData} tabManager
     */
    setTabManager(tabManager) {
        this.tabManager = tabManager
    }

    /**
     * @param {Preference} preference
     */
    setPreference(preference) {
        this.preference = preference
    }

    /**
     * @param {FunctionRegistry} functionRegistry
     */
    setFunctionRegistry(functionRegistry) {
        this.functionRegistry = functionRegistry
    }

    /**
     * @param {CompiledClassRegistry} compiledClassRegistry
     */
    setCompiledClassRegistry(compiledClassRegistry) {
        this.compiledClassRegistry = compiledClassRegistry
    }

    /**
     * @param {ComponentRegistry} componentRegistry
     */
    setComponentRegistry(componentRegistry) {
        this.componentRegistry = componentRegistry
    }

    /**
     * @param {MaterialRegistry} materialRegistry
     */
    setMaterialRegistry(materialRegistry) {
        this.materialRegistry = materialRegistry
    }

    /**
     * @param {CameraData} camera
     */
    setCamera(camera) {
        this.camera = camera
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
     * @param {SceneManagerData} sceneManager
     */
    setSceneManager(sceneManager) {
        this.sceneManager = sceneManager
    }

    /**
     * @return {TabManager}
     */
    getTabManager() {
        return this.tabManager
    }

    /**
     * @return {Preference}
     */
    getPreference() {
        return this.preference
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
     * @return {SceneManager}
     */
    getSceneManager() {
        return this.sceneManager
    }

    /**
     * @return {FunctionRegistry}
     */
    getFunctionRegistry() {
        return this.functionRegistry
    }

    /**
     * @return {CompiledClassRegistry}
     */
    getCompiledClassRegistry() {
        return this.compiledClassRegistry
    }

    /**
     * @return {ComponentRegistry}
     */
    getComponentRegistry(){
        return this.componentRegistry
    }

    /**
     * @return {MaterialRegistry}
     */
    getMaterialRegistry(){
        return this.materialRegistry
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