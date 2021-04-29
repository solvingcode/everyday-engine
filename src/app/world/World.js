import WorldData from '../project/data/WorldData.js'
import Camera from '../core/Camera.js'
import Physics from '../physics/Physics.js'
import Vector from '../utils/Vector.js'
import AssetsManager from '../manager/AssetsManager.js'
import Size from '../pobject/Size.js'
import {SCENE_HEIGHT, SCENE_WIDTH} from '../core/Constant.js'
import UnitManager from '../manager/UnitManager.js'
import MeshComponent from '../component/internal/MeshComponent.js'
import TransformComponent from '../component/internal/TransformComponent.js'
import UnitSelector from '../selector/UnitSelector.js'
import MeshManager from '../manager/MeshManager.js'
import ScriptManager from '../manager/ScriptManager.js'
import FunctionRegistry from '../flow/function/FunctionRegistry.js'
import TabManager from '../manager/TabManager.js'
import UnitHelper from '../utils/UnitHelper.js'

/**
 * @class {World}
 * @extends {WorldData}
 */
class World extends WorldData {

    constructor() {
        super()
        this.unitManager = new UnitManager()
        this.meshManager = new MeshManager()
        this.functionRegistry = new FunctionRegistry()
        this.scriptManager = new ScriptManager()
        this.camera = new Camera(new Vector({x: -SCENE_WIDTH / 2, y: -SCENE_HEIGHT / 2}))
        this.physics = new Physics()
        this.assetsManager = new AssetsManager()
        this.cameraUnitId = null
        this.resolution = new Size({width: SCENE_WIDTH, height: SCENE_HEIGHT})
        this.gridUnitId = null
        this.showGrid = false
        this.init()
    }

    /**
     * Initialize the world. will erase also world's element from imported project
     */
    init() {
        this.createRootFolder()
        TabManager.get().reset()
    }

    /**
     * Draw the entities.
     * @TODO: To optimize (rerender just entities updated)
     * @param {Renderer} renderer
     */
    draw(renderer) {
        this.getUnitManager().getUnitsHasComponents([MeshComponent, TransformComponent])
            .forEach((unit) => UnitHelper.drawUnit(unit, this, renderer))
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
     * Add a unit to the world
     * @param {Vector} position
     * @param {Class} type
     */
    addUnit(position, type) {
        const unit = this.getUnitManager().createUnit(type)
        unit.getComponent(TransformComponent).setPosition(position)
    }

    /**
     * @param {number} unitId
     */
    removeUnitById(unitId) {
        const unit = this.getUnitManager().findById(unitId)
        if (unit) {
            this.getUnitManager().deleteUnit(unit)
        }
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
     * @return {Unit[]}
     */
    findFirstUnitByPosition(position) {
        return UnitSelector.get().get(this, position)
    }

    /**
     * Force the regeneration of all entities (regenerate meshes)
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

    setupCamera() {
        if (this.cameraUnitId) {
            this.getCamera().setup(this.cameraUnitId, this)
        }
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

    static get() {
        if (!this.instance) {
            this.instance = new this()
        }
        return this.instance
    }
}

export default World