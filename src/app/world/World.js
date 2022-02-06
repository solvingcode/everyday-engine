import WorldData from '../project/data/WorldData.js'
import Camera from '../core/Camera.js'
import Vector from '../utils/Vector.js'
import AssetsManager from '../manager/AssetsManager.js'
import Size from '../pobject/Size.js'
import {CANVAS_CONTEXT_TYPE, SCENE_HEIGHT, SCENE_WIDTH} from '../core/Constant.js'
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
import CameraComponent from '../component/internal/CameraComponent.js'
import AssetHelper from '../utils/AssetHelper.js'
import SystemError from '../exception/type/SystemError.js'
import ScriptComponent from '../component/internal/ScriptComponent.js'
import UnitDataIdGenerator from '../generator/data/id/UnitDataIdGenerator.js'
import GarbageManager from '../manager/GarbageManager.js'
import Window from '../core/Window.js'
import AGetAttrClassComponent from '../flow/function/component/AGetAttrClassComponent.js'
import {ACCESSOR} from '../flow/function/AFunction.js'
import ASetAttrClassComponent from '../flow/function/component/ASetAttrClassComponent.js'
import WebGLMeshRenderer from '../renderer/WebGLMeshRenderer.js'
import TwoDMeshRenderer from '../renderer/TwoDMeshRenderer.js'

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
     * @type {MeshRenderer}
     */
    meshRenderer

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
        this.reloaded = true
        this.init()
    }

    /**
     * Initialize the world. can erase also world's element from imported project
     */
    init() {
        this.initialized = false
        this.meshRenderer = this.initMeshRenderer()
    }

    /**
     * @return {MeshRenderer}
     */
    initMeshRenderer(){
        if (CANVAS_CONTEXT_TYPE === 'webgl') {
            return new WebGLMeshRenderer()
        } else {
            return new TwoDMeshRenderer()
        }
    }

    /**
     * @param {Storage} storage
     */
    doInit(storage) {
        this.createRootFolder()
        this.getPreference().init()
        this.getTabManager().init()
        this.getSceneManager().init()
        this.getFunctionRegistry().init()
        this.getComponentRegistry().init()
        this.constructComponentSetterGetter()
        this.getMaterialRegistry().init()
        this.getGraphManager().reset()
        const assetManager = this.getAssetsManager()
        assetManager.getParsedAssets().forEach(asset => {
            AssetHelper.parseAsset(asset, storage).then(result => {
                if (AssetHelper.isAssetAnimation(asset)) {
                    this.getAnimationManager().add(result)
                } else if (AssetHelper.isAssetScript(asset)) {
                    this.getScriptManager().add(result)
                } else {
                    throw new SystemError(`Cannot parse assets: ${asset.getType().constructor.name} not supported`)
                }
                result.setAssetId(asset.getId())
                AssetHelper.validate(result, this)
            })
        })
        this.initialized = true
    }

    constructComponentSetterGetter() {
        this.getFunctionRegistry().concatRegistry(this.getComponentRegistry().getInstances().reduce((list, component) => {
            return list.concat(...component.getAttributes().map(attribute => {
                if (!attribute.getInternal()) {
                    const getter = new AGetAttrClassComponent(`Get ${component.getName()}.${attribute.getAttrName()}`,
                        {type: attribute.getAttrType()})
                    const setter = new ASetAttrClassComponent(`Set ${component.getName()}.${attribute.getAttrName()}`,
                        {type: attribute.getAttrType()})
                    getter.setAccess(ACCESSOR.PUBLIC)
                    setter.setAccess(ACCESSOR.PUBLIC)
                    return [getter, setter]
                }
                return []
            }))
        }, []))
    }

    /**
     * @return {boolean}
     */
    isInitialized() {
        return this.initialized
    }

    /**
     * @return {boolean}
     */
    isReloaded() {
        return this.reloaded
    }

    /**
     * @TODO: To optimize (rerender just entities updated)
     * @param {Renderer} renderer
     */
    draw(renderer) {
        this.getUnitManager().getUnitsHasComponents([MeshComponent, TransformComponent])
            .forEach((unit) => unit.isEnabled() &&
                UnitHelper.drawUnit(unit, this.getCamera(), this.getMeshManager(), renderer))
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
     * Get the unit from world coordinate
     * @param {Vector} position canvas coordinates (window)
     * @return {Unit[]}
     */
    findAllUnit(position) {
        const unitSelector = UnitSelector.get()
        return unitSelector.getAll(this, this.getWorldPosition(position))
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
     * @param {string} name
     * @return {Unit[]}
     */
    findUnitsByName(name) {
        return this.getUnitManager().findUnitsByName(name)
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
     * @param {Unit} unit
     */
    selectOneUnit(unit) {
        const unitSelector = UnitSelector.get()
        unitSelector.unselectAll(this)
        unit.select()
    }

    /**
     * @param {Unit} unit
     * @return {number}
     */
    getRankUnit(unit) {
        const layerGroup = this.getPreference().getLayerGroup().find(parseInt(unit.getLayerId()))
        if (layerGroup) {
            return layerGroup.getRank()
        } else {
            const parentUnit = this.getUnitManager().findParentUnit(unit)
            if (parentUnit) {
                return this.getRankUnit(parentUnit)
            }
        }
        return 0
    }

    /**
     * @param {Vector} position
     * @return {Unit[]}
     */
    findUnitsByPosition(position) {
        return UnitSelector.get().getAll(this, position)
    }

    /**
     * @param {Scene} scene
     * @param {string} mode
     * @param {boolean} edit
     */
    loadScene(scene, mode, edit) {
        if (mode !== SceneLoadMode.APPEND) {
            this.getSceneManager().getScenes()
                .filter(pScene => pScene !== scene).forEach(pScene => pScene.setIncluded(false) && pScene.setActive(false))
            scene.setActive(true)
        }
        const unitsToLoad = edit ? scene.getUnitManager().getUnits() : _.cloneDeep(scene.getUnitManager().getUnits())
        if (!edit) {
            UnitDataIdGenerator.generate(unitsToLoad)
        }
        this.restartUnits(unitsToLoad)
        this.getUnitManager().getUnits().push(...unitsToLoad)
        this.regenerateAll()
    }

    /**
     * @param {Unit[]} units
     */
    restartUnits(units) {
        units.forEach(unit => {
            unit.findComponentsByClass(ScriptComponent).forEach(scriptComponent => {
                scriptComponent.setInitialized(false)
                scriptComponent.setStarted(false)
            })
        })
    }

    /**
     * @template T
     * @param {Class<Unit>} T
     * @param {...any} props
     * @return {T}
     */
    createUnitInstant(T, ...props) {
        const selectedUnit = this.getUnitManager().getSelected()
        return this.createChildUnitInstant(T, selectedUnit, ...props)
    }

    /**
     * @template T
     * @param {Class<Unit>} T
     * @param {Unit} parentUnit
     * @param {...any} props
     * @return {T}
     */
    createChildUnitInstant(T, parentUnit, ...props) {
        return this.getUnitManager().createUnitInstant(T, parentUnit, ...props)
    }

    /**
     * @param {Unit} instance
     */
    createUnitByInstance(instance) {
        const selectedUnit = this.getUnitManager().getSelected()
        return this.getUnitManager().createUnitByInstance(instance, selectedUnit)
    }

    unloadAllScene() {
        this.getSceneManager().unloadAll()
        const unitManager = this.getUnitManager()
        unitManager.setUnits(unitManager.getNotDestroyable())
    }

    /**
     * Force the regeneration of all units (regenerate meshes)
     */
    reload() {
        this.init()
        this.reloadAllUnit()
        Window.get().reset()
    }

    forceReload() {
        this.reloaded = false
    }

    reloadAllUnit() {
        this.getUnitManager().sortUnits()
        this.regenerateAll()
        this.reloaded = true
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

    /**
     * @param {boolean} onlyDebug
     */
    disableGuides(onlyDebug = false) {
        const componentClasses = [LightComponent, CameraComponent]
        componentClasses.forEach(componentClass => {
            this.getSceneManager().getScenes().forEach(scene => {
                scene.getUnitManager()
                    .getUnitsHasComponentClasses([componentClass, MeshComponent]).forEach(unit => {
                    if ((onlyDebug && !unit.findComponentByClass(componentClass).isDebug()) || !onlyDebug) {
                        unit.getComponent(MeshComponent).setEnabled(false)
                    }
                })
            })
        })
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
     * @return {MeshRenderer}
     */
    getMeshRenderer(){
        return this.meshRenderer
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
        } else {
            throw new ClientError(`At least on scene must be activated`)
        }
    }

    /**
     * @param {Unit} unit
     * @return {UnitManager}
     */
    getSceneUnitManager(unit) {
        const scene = this.findSceneByUnit(unit)
        if (scene) {
            return scene.getUnitManager()
        }
        GarbageManager.get().addUnitId(unit.getId())
        throw new ClientError(`No scene contains Unit (ID: ${unit.getId()})`)
    }

    /**
     * @param {Unit} unit
     * @return {Scene}
     */
    findSceneByUnit(unit) {
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