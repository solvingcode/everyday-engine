define(function (require) {

    const EntityManager = require('./manager/EntityManager.js')
    const EntitySelector = require('./manager/EntitySelector.js')
    const Camera = require('../core/Camera.js')
    const GeneticEngine = require('../ai/genetic/GeneticEngine.js')
    const Physics = require('../physics/Physics.js')
    const MatterEngine = require('../physics/engine/matter/Engine.js')
    const TerrainManager = require('./terrain/TerrainManager.js')
    const ConstraintEntity = require('../entity/types/joint/ConstraintEntity.js')

    /**
     * Define the World
     * @property {AiEngine} aiEngine
     * @property {Camera} camera
     */
    class World {

        constructor() {
            this.entityManager = EntityManager.get()
            this.camera = new Camera({ x: SCENE_WIDTH / 2, y: SCENE_HEIGHT / 2 })
            this.physics = new Physics(new MatterEngine())
            //this.aiEngine = new GeneticEngine(this.physics, this.entityManager, this.camera)
            this.terrainManager = new TerrainManager(this.physics, this.entityManager, this.camera)
            this.mouseConstraintId = this.entityManager.load(0, 0, ConstraintEntity).getId()
        }

        /**
         * Get the physics manager
         */
        getPhysics() {
            return this.physics
        }

        /**
         * Get the Ai engine
         */
        getAiEngine() {
            return this.aiEngine
        }

        /**
         * Get the terrain manager
         */
        getTerrainManager() {
            return this.terrainManager
        }

        /**
         * Draw the entities.
         * @TODO: To optimize (rerender just entities updated)
         * @param {Renderer} renderer 
         */
        draw(renderer) {
            const bodyEntities = this.entityManager.getBodyEntities()
            const attachEntities = this.entityManager.getAttachEntities()
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
            return entitySelector.get(this.getWorldPosition(position))
        }

        /**
         * Load the world
         */
        load() {
            const terrain = this.getTerrainManager().getTerrain()
            if(terrain){
                terrain.load()
            }
        }

        /**
         * Update all entities.
         */
        update() {
            this.entityManager.update()
        }

        /**
         * Update the camera position
         */
        updateCamera() {
            const entity = this.camera.getEntity(this.entityManager)
            entity && this.camera.update({ x: entity.position.x, y: this.camera.position.y })
        }

        /**
         * Reset the camera position
         */
        resetCamera() {
            this.camera.reset()
        }

        /**
         * Get the principal camera (active)
         */
        getCamera() {
            return this.camera
        }

        /**
         * @param {{x: number, y: number}} position
         * @return {{x: number, y: number}}
         */
        getWorldPosition(position){
            return this.getCamera().fromCanvasCoord(position)
        }

        /**
         * @return {ConstraintEntity}
         */
        getMouseConstraint() {
            return this.entityManager.findById(this.mouseConstraintId)
        }

        static get() {
            if (!World.instance) {
                World.instance = new World()
            }
            return World.instance
        }

    }

    World.instance = null

    return World
})