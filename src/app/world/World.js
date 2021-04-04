import WorldData from '../project/data/WorldData.js'
import Camera from '../core/Camera.js'
import Physics from '../physics/Physics.js'
import Vector from '../utils/Vector.js'
import AssetsManager from '../manager/AssetsManager.js'
import Window from '../core/Window.js'
import Size from '../pobject/Size.js'
import {SCENE_HEIGHT, SCENE_WIDTH} from '../core/Constant.js'
import Folder from '../asset/Folder.js'
import UnitManager from '../manager/UnitManager.js'
import MeshComponent from '../component/internal/MeshComponent.js'
import TransformComponent from '../component/internal/TransformComponent.js'
import UnitSelector from '../manager/UnitSelector.js'
import ExecutorRegistry from '../executor/ExecutorRegistry.js'
import MeshManager from '../manager/MeshManager.js'

/**
 * @class {World}
 * @extends {WorldData}
 */
class World extends WorldData {

    constructor() {
        super()
        this.unitManager = new UnitManager()
        this.meshManager = new MeshManager()
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
    }

    /**
     * Draw the entities.
     * @TODO: To optimize (rerender just entities updated)
     * @param {Renderer} renderer
     */
    draw(renderer) {
        this.getUnitManager().getUnitsHasComponents([MeshComponent, TransformComponent])
            .forEach((unit) => this.drawUnit(unit, renderer))
    }

    /**
     * @param {UnitData} unit
     * @param {Renderer} renderer
     */
    drawUnit(unit, renderer) {
        const meshManager = this.getMeshManager()
        const {size: windowSize} = Window.get()
        const camera = this.getCamera()
        const {x: cameraX, y: cameraY} = camera.position
        const {width: sceneWidth, height: sceneHeight} = camera.fromScaleSize(windowSize)
        const meshComponent = unit.getComponent(MeshComponent)
        const transformComponent = unit.getComponent(TransformComponent)
        const size = meshComponent.getSize()
        const position = transformComponent.getPosition()
        const minX = cameraX - size.getWidth()
        const maxX = cameraX + sceneWidth
        const minY = cameraY - size.getHeight()
        const maxY = cameraY + sceneHeight
        if (minX <= position.getX() && maxX >= position.getX() &&
            minY <= position.getY() && maxY >= position.getY()) {
            const mesh = meshManager.get(unit.getId())
            mesh && renderer.draw(mesh, position)
        }
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
    findUnitById(id){
        return this.getUnitManager().findById(id)
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
    selectUnits(dragArea){
        const unitSelector = UnitSelector.get()
        unitSelector.unselectAll(this)
        return unitSelector.select(this, this.getWorldPosition(dragArea.position), dragArea.size)
    }

    /**
     * @param {Mouse} mouse
     * @return {Unit[]}
     */
    focusUnits(mouse){
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
    findFirstUnitByPosition(position){
        return UnitSelector.get().get(this, position)
    }

    /**
     * Force the regeneration of all entities (regenerate meshes)
     */
    reload() {
        this.init()
        this.reloadAllUnit()
    }

    reloadAllUnit(){
        this.getUnitManager().sortUnits()
        this.regenerateAll()
    }

    regenerateAll(){
        this.getUnitManager().regenerateAll(this)
    }

    update() {
        ExecutorRegistry.get().execute(this)
    }

    /**
     * @return {boolean}
     */
    isShowGrid(){
        return this.getShowGrid()
    }

    /**
     * @param {boolean} showGrid
     */
    setShowGrid(showGrid){
        super.setShowGrid(showGrid)
        this.setGridUnitId(null)
    }

    setupCamera(){
        if(this.cameraUnitId){
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
    getWorldScalePosition(position){
        return this.getWorldPosition(this.getCamera().fromCameraScale(position))
    }

    /**
     * @return {MeshManager}
     */
    getMeshManager(){
        return this.meshManager
    }

    createRootFolder() {
        const assetsManager = this.getAssetsManager()
        let rootFolder = assetsManager.findFolderById(0)
        if(!rootFolder){
            rootFolder = new Folder('Root')
            rootFolder.setId(0)
            assetsManager.addFolder(rootFolder)
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
    setGridUnitId(id){
        this.gridUnitId = id
    }

    /**
     * @return {number}
     */
    getGridUnitId(){
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