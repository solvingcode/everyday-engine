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

    unitManager
    scriptManager
    tabManager
    functionRegistry
    camera
    physics
    assetsManager
    cameraUnitId
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
     * @param {UnitManagerData} unitManager
     */
    setUnitManager(unitManager) {
        this.unitManager = unitManager
    }

    /**
     * @param {TabManagerData} tabManager
     */
    setTabManager(tabManager) {
        this.tabManager = tabManager
    }

    /**
     * @param {FunctionRegistry} functionRegistry
     */
    setFunctionRegistry(functionRegistry) {
        this.functionRegistry = functionRegistry
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
     * @param {ScriptManager} scriptManager
     */
    setScriptManager(scriptManager) {
        this.scriptManager = scriptManager
    }

    /**
     * Get the physics manager
     * @return {Physics}
     */
    getPhysics() {
        return this.physics
    }

    /**
     * @return {UnitManager}
     */
    getUnitManager() {
        return this.unitManager
    }

    /**
     * @return {TabManager}
     */
    getTabManager() {
        return this.tabManager
    }

    /**
     * @return {ScriptManager}
     */
    getScriptManager() {
        return this.scriptManager
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
     * @return {FunctionRegistry}
     */
    getFunctionRegistry() {
        return this.functionRegistry
    }

    /**
     * @return {number}
     */
    getCameraUnitId(){
        return this.cameraUnitId
    }

    /**
     * @param {number} id
     */
    setCameraUnitId(id){
        this.cameraUnitId = id
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