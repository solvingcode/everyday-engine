import WorldData from '../project/data/WorldData.js'
import Camera from '../core/Camera.js'
import Vector from '../utils/Vector.js'
import AssetsManager from '../manager/AssetsManager.js'
import Size from '../pobject/Size.js'
import {SCENE_HEIGHT, SCENE_WIDTH} from '../core/Constant.js'
import MeshComponent from '../component/internal/MeshComponent.js'
import TransformComponent from '../component/internal/TransformComponent.js'
import UnitSelector from '../selector/UnitSelector.js'
import MeshManager from '../manager/MeshManager.js'
import ScriptManager from '../manager/ScriptManager.js'
import FunctionRegistry from '../registry/FunctionRegistry.js'
import UnitHelper from '../utils/UnitHelper.js'
import TabManager from '../manager/TabManager.js'
import GraphManager from '../manager/GraphManager.js'
import Preference from '../preference/Preference.js'
import PhysicsManager from '../manager/PhysicsManager.js'
import ComponentRegistry from '../registry/ComponentRegistry.js'
import AnimationManager from '../manager/AnimationManager.js'
import MaterialRegistry from '../registry/MaterialRegistry.js'
import LightComponent from '../component/internal/LightComponent.js'
import {SceneLoadMode} from '../scene/Scene.js'
import SceneManager from '../manager/SceneManager.js'
import ClientError from '../exception/type/ClientError.js'
import SceneUnitManager from '../manager/SceneUnitManager.js'

/**
 * @class {World}
 * @extends {WorldData}
 */
class World extends WorldData {

    /**
     * @type {ScriptManager}
     */
    scriptManager

    /**
     * @type {AnimationManager}
     */
    animationManager

    /**
     * @type {GraphManager}
     */
    graphManager

    /**
     * @type {PhysicsManager}
     */
    physicsManager

    /**
     * @type {SceneUnitManager}
     */
    unitManager

    /**
     * @type {boolean}
     */
    initialized

    constructor() {
        super()
        this.unitManager = new SceneUnitManager(this)
        this.meshManager = new MeshManager()
        this.tabManager = new TabManager()
        this.graphManager = new GraphManager()
        this.functionRegistry = new FunctionRegistry()
        this.componentRegistry = new ComponentRegistry()
        this.materialRegistry = new MaterialRegistry()
        this.scriptManager = new ScriptManager()
        this.animationManager = new AnimationManager()
        this.preference = new Preference()
        this.camera = new Camera(new Vector({x: -SCENE_WIDTH / 2, y: -SCENE_HEIGHT / 2}))
        this.physicsManager = new PhysicsManager()
        this.assetsManager = new AssetsManager()
        this.sceneManager = new SceneManager()
        this.resolution = new Size({width: SCENE_WIDTH, height: SCENE_HEIGHT})
        this.gridUnitId = null
        this.showGrid = false
        this.init()
    }

    /**
     * Initialize the world. can erase also world's element from imported project
     */
    init() {
        this.initialized = false
    }

    doInit() {
        this.createRootFolder()
        this.getPreference().init()
        this.getTabManager().init()
        this.getSceneManager().init()
        this.getFunctionRegistry().init()
        this.getComponentRegistry().init()
        this.getMaterialRegistry().init()
        this.getGraphManager().reset()
        this.getAssetsManager().getParsedAssets().forEach(asset => {
            const result = asset.getType().parse()
            asset.getType().validate(result)
        })
        this.initialized = true
    }

    /**
     * @return {boolean}
     */
    isInitialized() {
        return this.initialized
    }

    /**
     * @TODO: To optimize (rerender just entities updated)
     * @param {Renderer} renderer
     */
    draw(renderer) {
        this.getUnitManager().getUnitsHasComponents([MeshComponent, TransformComponent])
            .forEach((unit) => UnitHelper.drawUnit(unit, this.getCamera(), this.getMeshManager(), renderer))
    }

    /**
     * Get the unit from world coordinate
     * @param {Vector} position canvas coordinates (window)
     * @return {Unit|null}
     */
    findUnit(position) {
        const unitSelector = UnitSelector.get()
        return unitSelector.get(this, this.getWorldPosition(position))
    }

    /**
     * @param {number} id
     * @return {Unit}
     */
    findUnitById(id) {
        return this.getUnitManager().findUnitById(id)
    }

    /**
     * @param {string} name
     * @return {Unit}
     */
    findUnitByName(name) {
        return this.getUnitManager().findUnitByName(name)
    }

    /**
     * @param {Unit} unit
     */
    deleteUnit(unit) {
        this.getUnitManager().deleteUnit(unit)
    }

    /**
     * @param {{position: Vector, size: Size}} dragArea
     * @return {Unit[]}
     */
    selectUnits(dragArea) {
        const unitSelector = UnitSelector.get()
        unitSelector.unselectAll(this)
        return unitSelector.select(this, this.getWorldPosition(dragArea.position), dragArea.size)
    }

    /**
     * @param {Mouse} mouse
     * @return {Unit[]}
     */
    focusUnits(mouse) {
        const unitSelector = UnitSelector.get()
        unitSelector.unfocusAll(this)
        const currentScenePosition = new Vector(mouse.currentScenePosition)
        const vector3d = this.getCamera().fromCameraScale(currentScenePosition)
        unitSelector.focus(this, this.getWorldPosition(vector3d))
    }

    /**
     * @param {Vector} position
     * @return {Unit}
     */
    findFirstUnitByPosition(position) {
        return UnitSelector.get().get(this, position)
    }

    /**
     * @param {Scene} scene
     * @param {string} mode
     */
    loadScene(scene, mode) {
        if (mode !== SceneLoadMode.APPEND) {
            this.getUnitManager().deleteAll()
        }
        this.getUnitManager().getUnits().push(...scene.getUnitManager().getUnits())
        this.regenerateAll()
    }

    /**
     * @template T
     * @param {Class} T
     * @param {...any} props
     * @return {T}
     */
    createUnitInstant(T, ...props) {
        const selectedUnit = this.getUnitManager().getSelected()
        return this.getUnitManager().createUnitInstant(T, selectedUnit, ...props)
    }

    /**
     * @template T
     * @param {Class} T
     * @param {Unit} parentUnit
     * @param {...any} props
     * @return {T}
     */
    createChildUnitInstant(T, parentUnit, ...props) {
        return this.getUnitManager().createUnitInstant(T, parentUnit, ...props)
    }

    unloadAllScene(){
        this.getSceneManager().unloadAll()
        this.getUnitManager().units = []
    }

    /**
     * Force the regeneration of all units (regenerate meshes)
     */
    reload() {
        this.init()
        this.reloadAllUnit()
    }

    reloadAllUnit() {
        this.getUnitManager().sortUnits()
        this.regenerateAll()
    }

    regenerateAll() {
        this.getUnitManager().regenerateAll(this)
    }

    update() {
    }

    /**
     * @return {boolean}
     */
    isShowGrid() {
        return this.getShowGrid()
    }

    /**
     * @param {boolean} showGrid
     */
    setShowGrid(showGrid) {
        super.setShowGrid(showGrid)
        this.setGridUnitId(null)
    }

    disableGuides() {
        this.getCamera().disableGuides(this)
        this.getUnitManager()
            .getUnitsHasComponentClasses([LightComponent, MeshComponent])
            .forEach(unit => unit.getComponent(MeshComponent).setEnabled(false))
    }

    /**
     * Get the world position of a given screen position
     * @param {Vector} position
     * @return {Vector}
     */
    getWorldPosition(position) {
        return this.getCamera().fromCanvasCoord(position)
    }

    /**
     * Get the world position from the camera scale
     * @param {Vector} position
     * @return {Vector}
     */
    getWorldScalePosition(position) {
        return this.getWorldPosition(this.getCamera().fromCameraScale(position))
    }

    /**
     * @return {MeshManager}
     */
    getMeshManager() {
        return this.meshManager
    }

    /**
     * @return {GraphManager}
     */
    getGraphManager() {
        return this.graphManager
    }

    /**
     * @return {PhysicsManager}
     */
    getPhysicsManager() {
        return this.physicsManager
    }

    /**
     * @return {AnimationManager}
     */
    getAnimationManager() {
        return this.animationManager
    }

    /**
     * @return {ScriptManager}
     */
    getScriptManager() {
        return this.scriptManager
    }

    createRootFolder() {
        const assetsManager = this.getAssetsManager()
        let rootFolder = assetsManager.findFolderById(0)
        if (!rootFolder) {
            assetsManager.createRootFolder()
        }
    }

    /**
     * @param {number} mouseConstraintId
     */
    setMouseConstraintId(mouseConstraintId) {
        this.mouseConstraintId = mouseConstraintId
    }

    /**
     * @return {number}
     */
    getMouseConstraintId() {
        return this.mouseConstraintId
    }

    /**
     * @param {number} id
     */
    setGridUnitId(id) {
        this.gridUnitId = id
    }

    /**
     * @return {number}
     */
    getGridUnitId() {
        return this.gridUnitId
    }

    /**
     * @return {Unit[]}
     */
    getLightsNotGenerated() {
        return this.getUnitManager()
            .getUnitsHasComponentClasses([LightComponent])
            .filter(unit => {
                const lightComponent = unit.findComponentsByClass(LightComponent)[0]
                return !lightComponent.isGenerated()
            })
    }

    /**
     * @param {UnitManager} unitManager
     */
    setUnitManager(unitManager) {
        this.unitManager = unitManager
    }

    /**
     * @return {SceneUnitManager}
     */
    getUnitManager() {
        return this.unitManager
    }

    /**
     * @return {UnitManager}
     */
    getActiveUnitManager() {
        const activeScene = this.getSceneManager().getActive()
        if (activeScene) {
            return activeScene.getUnitManager()
        }else{
            throw new ClientError(`At least on scene must be activated`)
        }
    }

    /**
     * @param {Unit} unit
     * @return {UnitManager}
     */
    getSceneUnitManager(unit){
        const scene = this.findSceneByUnit(unit)
        if(scene){
            return scene.getUnitManager()
        }
        throw new ClientError(`No scene contains Unit (ID: ${unit.getId()})`)
    }

    /**
     * @param {Unit} unit
     * @return {Scene}
     */
    findSceneByUnit(unit){
        return this.getSceneManager().findSceneByUnit(unit)
    }

    /**
     * @return {World}
     */
    static get() {
        if (!this.instance) {
            this.instance = new this()
        }
        return this.instance
    }
}

export default World