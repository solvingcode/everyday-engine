define(function (require) {

    const WorldData = require('../project/data/WorldData.js')
    const EntityManager = require('./manager/EntityManager.js')
    const EntitySelector = require('./manager/EntitySelector.js')
    const Camera = require('../core/Camera.js')
    const Physics = require('../physics/Physics.js')
    const TerrainManager = require('./terrain/TerrainManager.js')
    const ConstraintEntity = require('../entity/types/joint/ConstraintEntity.js')
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
            this.terrainManager = new TerrainManager(this)
            this.textureManager = new TextureManager()
            this.mouseConstraintId = this.loadEntity(new Vector({x: 0, y: 0}), ConstraintEntity).getId()
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
            const minX = cameraX - SCENE_WIDTH / 2 - entity.size.width + sceneCanvasX
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
         * @param {{x: number, y: number}} position canvas coordinates (window)
         */
        findEntity(position){
            const entitySelector = EntitySelector.get()
            return entitySelector.get(this, this.getWorldPosition(position))
        }

        /**
         * Add an entity to the world
         * @param {{x: number, y: number}} position
         * @param {Class} type
         * @param {EntityProps} props
         */
        addEntity(position, type, props = {}){
            const entity = this.loadEntity(position, type, props)
            this.getPhysics().loadEntity(entity)
            return entity
        }

        /**
         * Remove an entity from the world
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
         * @param {Entity} entity
         */
        deleteEntity(entity){
            this.getEntityManager().delete(entity)
        }

        /**
         * @param {Vector} position
         * @param {Entity} type
         * @param {EntityProps} props
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

        reload(){
            this.getEntityManager().regenerateAll(this)
        }

        /**
         * Load the world (generate terrain, ...)
         */
        load() {
            const terrain = this.getTerrainManager().getTerrain()
            if(terrain){
                terrain.load(this)
            }
        }

        /**
         * Update all entities.
         */
        update() {
            this.getEntityManager().update()
        }

        /**
         * Update the camera position
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

        static get() {
            if (!World.instance) {
                World.instance = new World()
            }
            return World.instance
        }

    }

    return World
})