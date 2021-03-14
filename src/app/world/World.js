import WorldData from '../project/data/WorldData.js'
import EntityManager from './manager/EntityManager.js'
import EntitySelector from './manager/EntitySelector.js'
import Camera from '../core/Camera.js'
import Physics from '../physics/Physics.js'
import TerrainManager from './terrain/TerrainManager.js'
import MouseConstraintEntity from '../entity/types/constraint/MouseConstraintEntity.js'
import Vector from '../utils/Vector.js'
import AssetsManager from './manager/AssetsManager.js'
import Window from '../core/Window.js'
import Size from '../pobject/Size.js'
import {SCENE_HEIGHT, SCENE_WIDTH} from '../core/Constant.js'
import Folder from '../asset/Folder.js'

/**
 * @class {World}
 * @extends {WorldData}
 */
class World extends WorldData {

    constructor() {
        super()
        this.entityManager = new EntityManager()
        this.camera = new Camera(new Vector({x: -SCENE_WIDTH / 2, y: -SCENE_HEIGHT / 2}))
        this.physics = new Physics()
        this.terrainManager = new TerrainManager()
        this.assetsManager = new AssetsManager()
        this.mouseConstraintId = null
        this.cameraEntityId = null
        this.resolution = new Size({width: SCENE_WIDTH, height: SCENE_HEIGHT})
        this.gridEntityId = null
        this.showGrid = true
        this.init()
    }

    /**
     * Initialize the world. will erase also world's element from imported project
     */
    init() {
        this.createMouseConstraint()
        this.createRootFolder()
    }

    /**
     * Draw the entities.
     * @TODO: To optimize (rerender just entities updated)
     * @param {Renderer} renderer
     */
    draw(renderer) {
        this.getEntityManager().entities.forEach((entity) => this.drawEntity(entity, renderer))
    }

    /**
     * Set the given entity to the renderer for drawing
     * @param {Entity} entity
     * @param {Renderer} renderer
     */
    drawEntity(entity, renderer) {
        const {size: windowSize} = Window.get()
        const camera = this.getCamera()
        const {x: cameraX, y: cameraY} = camera.position
        const {width: sceneWidth, height: sceneHeight} = camera.fromScaleSize(windowSize)
        const minX = cameraX - entity.size.width
        const maxX = cameraX + sceneWidth
        const minY = cameraY - entity.size.height
        const maxY = cameraY + sceneHeight
        if (minX <= entity.position.x && maxX >= entity.position.x &&
            minY <= entity.position.y && maxY >= entity.position.y) {
            entity.draw(renderer)
        }
    }

    /**
     * Get the entity from world coordinate
     * @param {Vector} position canvas coordinates (window)
     * @return {Entity|null}
     */
    findEntity(position) {
        const entitySelector = EntitySelector.get()
        return entitySelector.get(this, this.getWorldPosition(position))
    }

    /**
     * @param {number} id
     * @return {Entity}
     */
    findEntityById(id){
        return this.getEntityManager().findById(id)
    }

    /**
     * @param {Vector} position position canvas coordinates (window)
     * @return {Entity|null}
     */
    findBodyEntity(position) {
        const entity = this.findEntity(position)
        return this.getEntityManager().isBodyEntity(entity) && entity
    }

    /**
     * Add an entity to the world
     * @param {Vector} position
     * @param {Class} type
     * @param {EntityProps} props
     */
    addEntity(position, type, props = {}) {
        const entity = this.loadEntity(position, type, props)
        this.getPhysics().loadEntity(entity)
        return entity
    }

    /**
     * @param {number} entityId
     */
    removeEntityById(entityId) {
        const entity = this.getEntityManager().findById(entityId)
        if (entity) {
            entity.delete(this)
        }
    }

    /**
     * @param {Class[]} type
     */
    removeEntityByType(type) {
        type.forEach(eType => {
            const entities = this.getEntityManager().findByType(eType)
            entities.forEach(entity => this.removeEntityById(entity.id))
        })
    }

    /**
     * @param {Entity} entity
     */
    deleteEntity(entity) {
        this.getEntityManager().delete(entity)
    }

    /**
     * @param {{position: Vector, size: Size}} dragArea
     * @return {Entity[]}
     */
    selectEntities(dragArea){
        const entitySelector = EntitySelector.get()
        entitySelector.unselectAll(this)
        return entitySelector.select(this, this.getWorldPosition(dragArea.position), dragArea.size)
    }

    /**
     * @param {Vector} position
     * @return {Entity[]}
     */
    findEntitiesByPosition(position){
        return EntitySelector.get().getAll(this, position)
    }

    /**
     * @param {Vector} position
     * @return {Entity[]}
     */
    findFirstEntityByPosition(position){
        return EntitySelector.get().get(this, position)
    }

    /**
     * @param {Vector} position
     * @param {Function} type
     * @param {EntityProps} props
     * @return {Entity}
     */
    loadEntity(position, type, props = {}) {
        return this.getEntityManager().load(this, position, type, props)
    }

    /**
     * @param {Entity} entity
     */
    generateEntity(entity) {
        return this.getEntityManager().regenerate(this, entity)
    }

    /**
     * @param {Entity} entity
     */
    makeEntity(entity) {
        return this.getEntityManager().make(this, entity)
    }

    /**
     * Force the regeneration of all entities (regenerate meshes)
     */
    reload() {
        this.init()
        this.regenerateAll()
    }

    regenerateAll(){
        this.getEntityManager().regenerateAll(this)
    }

    /**
     * Update entities, terrains, ... (check all entities tagged for regeneration)
     */
    update() {
        this.getTerrainManager().update(this)
        this.getEntityManager().update(this)
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
        this.setGridEntityId(null)
    }

    /**
     * Update the camera position for the attached entity (if the camera must be focused on a given entity)
     */
    updateCamera() {
        const entity = this.getCamera().getEntity(this.getEntityManager())
        entity && this.getCamera().update(entity.position)
    }

    setupCamera(){
        if(this.cameraEntityId){
            this.getCamera().setup(this.cameraEntityId, this)
        }
    }

    resetCamera() {
        this.getCamera().reset()
    }

    hideComponents(){
        this.getEntityManager().hideComponents()
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
     * @return {Entity}
     */
    getMouseConstraint() {
        return this.getEntityManager().findById(this.mouseConstraintId)
    }

    createMouseConstraint() {
        this.removeEntityByType([MouseConstraintEntity])
        const constraint = this.loadEntity(new Vector({x: 0, y: 0}), MouseConstraintEntity)
        constraint.setSelectable(false)
        this.mouseConstraintId = constraint.getId()
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
    setGridEntityId(id){
        this.gridEntityId = id
    }

    /**
     * @return {number}
     */
    getGridEntityId(){
        return this.gridEntityId
    }

    static get() {
        if (!this.instance) {
            this.instance = new this()
        }
        return this.instance
    }
}

export default World