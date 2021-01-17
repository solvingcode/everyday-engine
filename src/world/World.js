define(function (require) {

    const WorldData = require('../project/data/WorldData.js')
    const EntityManager = require('./manager/EntityManager.js')
    const EntitySelector = require('./manager/EntitySelector.js')
    const Camera = require('../core/Camera.js')
    const Physics = require('../physics/Physics.js')
    const TerrainManager = require('./terrain/TerrainManager.js')
    const MouseConstraintEntity = require('../entity/types/constraint/MouseConstraintEntity.js')
    const Vector = require('../utils/Vector.js')
    const TextureManager = require('./manager/TextureManager.js')

    /**
     * @class {World}
     * @extends {WorldData}
     */
    class World extends WorldData {

        constructor() {
            super()
            this.entityManager = new EntityManager()
            this.camera = new Camera({ x: SCENE_WIDTH / 2, y: SCENE_HEIGHT / 2 })
            this.physics = new Physics()
            this.terrainManager = new TerrainManager()
            this.textureManager = new TextureManager()
            this.mouseConstraintId = null
            this.init()

        }

        /**
         * Initialize the world. will erase also world's element from imported project
         */
        init(){
            this.createMouseConstraint()
        }

        /**
         * Draw the entities.
         * @TODO: To optimize (rerender just entities updated)
         * @param {Renderer} renderer 
         */
        draw(renderer) {
            const bodyEntities = this.getEntityManager().getBodyEntities()
            const attachEntities = this.getEntityManager().getAttachEntities()
            bodyEntities.forEach((entity) => this.drawEntity(entity, renderer))
            attachEntities.forEach((entity) => this.drawEntity(entity, renderer))
        }

        /**
         * Set the given entity to the renderer for drawing
         * @param {Entity} entity 
         * @param {Renderer} renderer 
         */
        drawEntity(entity, renderer) {
            const { x: cameraX, y: cameraY } = this.getCamera().position
            const {left: sceneCanvasX, top: sceneCanvasY} = objectContext.canvas.getBoundingClientRect()
            const minX = cameraX - SCENE_WIDTH / 2 - entity.size.width
            const maxX = cameraX + SCENE_WIDTH / 2 + sceneCanvasX
            const minY = cameraY - SCENE_HEIGHT / 2 - entity.size.height + sceneCanvasY
            const maxY = cameraY + SCENE_HEIGHT / 2 + sceneCanvasY
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
        findEntity(position){
            const entitySelector = EntitySelector.get()
            return entitySelector.get(this, this.getWorldPosition(position))
        }

        /**
         * @param {Vector} position position canvas coordinates (window)
         * @return {Entity|null}
         */
        findBodyEntity(position){
            const entity = this.findEntity(position)
            return this.getEntityManager().isBodyEntity(entity) && entity
        }

        /**
         * Add an entity to the world
         * @param {Vector} position
         * @param {Class} type
         * @param {EntityProps} props
         */
        addEntity(position, type, props = {}){
            const entity = this.loadEntity(position, type, props)
            this.getPhysics().loadEntity(entity)
            return entity
        }

        /**
         * @param {number} entityId
         */
        removeEntityById(entityId){
            const entity = this.getEntityManager().findById(entityId)
            if(entity){
                this.getPhysics().unloadEntity(entity)
                this.getEntityManager().delete(entity)
            }
        }

        /**
         * @param {Class} type
         */
        removeEntityByType(type){
            const entities = this.getEntityManager().findByType(type)
            entities.forEach(entity => this.removeEntityById(entity.id))
        }

        /**
         * @param {Entity} entity
         */
        deleteEntity(entity){
            this.getEntityManager().delete(entity)
        }

        /**
         * @param {Vector} position
         * @param {Entity} type
         * @param {EntityProps} props
         * @return {Entity}
         */
        loadEntity(position, type, props = {}){
            return this.getEntityManager().load(this, position, type, props)
        }

        /**
         * @param {Entity} entity
         */
        generateEntity(entity){
            return this.getEntityManager().regenerate(this, entity)
        }

        /**
         * @param {Entity} entity
         */
        makeEntity(entity){
            return this.getEntityManager().make(this, entity)
        }

        /**
         * Force the regeneration of all entities (regenerate meshes)
         */
        reload(){
            this.init()
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
         * Update the camera position for the attached entity (if the camera must be focused on a given entity)
         */
        updateCamera() {
            const entity = this.getCamera().getEntity(this.getEntityManager())
            entity && this.getCamera().update({ x: entity.position.x, y: this.getCamera().position.y })
        }

        /**
         * Reset the camera position
         */
        resetCamera() {
            this.getCamera().reset()
        }

        /**
         * Get the world position of a given screen position
         * @param {Vector} position
         * @return {Vector}
         */
        getWorldPosition(position){
            return this.getCamera().fromCanvasCoord(position)
        }

        /**
         * @return {Entity}
         */
        getMouseConstraint() {
            return this.getEntityManager().findById(this.mouseConstraintId)
        }

        createMouseConstraint(){
            this.removeEntityByType(MouseConstraintEntity)
            const constraint = this.loadEntity(new Vector({x: 0, y: 0}), MouseConstraintEntity)
            constraint.setSelectable(false)
            this.mouseConstraintId = constraint.getId()
        }

        /**
         * @param {number} mouseConstraintId
         */
        setMouseConstraintId(mouseConstraintId){
            this.mouseConstraintId = mouseConstraintId
        }

        /**
         * @return {number}
         */
        getMouseConstraintId(){
            return this.mouseConstraintId
        }

        static get() {
            if (!World.instance) {
                World.instance = new World()
            }
            return World.instance
        }

    }

    return World
})