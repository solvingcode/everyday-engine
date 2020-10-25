define(function () {

    /**
     * Physics Engine class
     * Used as interface between the application and engine (third party Engine)
     * @abstract
     */
    class PhysicsEngine {

        constructor() {
            if (this.constructor === PhysicsEngine) {
                throw new TypeError('Abstract class PhysicsEngine cannot be instantiated directly')
            }
            this.mapShapeToEntity = []
        }

        /**
         * Initialize the engine.
         */
        init() {
            throw new TypeError('"init" method must be implemented')
        }

        /**
         * Add physics to the entity.
         * @param {Entity} entity 
         */
        add(entity) {
            this.mapShapeToEntity.push({
                entityId: entity.id,
                shape: this.loadShape(entity)
            })
        }

        /**
         * Get the shape for entity.
         * @param {Entity} entity 
         */
        loadShape(entity) {
            throw new TypeError('"loadShape" method must be implemented')
        }

        /**
         * Update physics of the body from the entity.
         * @param {Entity} entity 
         */
        update(entity) {
            throw new TypeError('"update" method must be implemented')
        }

        /**
         * Get the Engine (third party)
         */
        getEngine() {
            throw new TypeError('"getEngine" method must be implemented')
        }

        /**
         * Run the physics engine.
         */
        run() {
            throw new TypeError('"run" method must be implemented')
        }

        /**
         * Stop the physics engine and reset the mapping.
         */
        stop() {
            this.stopEngine()
            this.mapShapeToEntity = []
        }

        /**
         * Stop the physics engine.
         */
        stopEngine() {
            throw new TypeError('"stopEngine" method must be implemented')
        }

        /**
         * Get bodies informations (position, ...)
         */
        getBodies() {
            throw new TypeError('"getBodies" method must be implemented')
        }

        /**
         * Get joints informations (position, ...)
         */
        getJoints() {
            throw new TypeError('"getJoints" method must be implemented')
        }

        /**
         * Create new group of collision
         */
        newGroup() {
            throw new TypeError('"newGroup" method must be implemented')
        }

        /**
         * Update collision filters for the entity.
         * @param {Entity} entity 
         */
        updateCollisionFilters(entity) {
            throw new TypeError('"updateCollisionFilters" method must be implemented')
        }

        /**
         * Apply force to the entity
         * @param {Object} body 
         * @param {Entity} force 
         */
        applyForce(body, entity) {
            throw new TypeError('"applyForce" method must be implemented')
        }

        /**
         * Check if two entity collide
         * @param {Number} entityAId 
         * @param {Number} entityBId 
         */
        isCollide(entityAId, entityBId) {
            throw new TypeError('"isCollide" method must be implemented')
        }

        /**
         * Set the physics manager that loaded the phyiscs engine
         * @param {Physics} physicsManager 
         */
        setPhysicsManager(physicsManager) {
            this.physicsManager = physicsManager
        }

        /**
         * Get the physics manager that loaded the phyiscs engine
         */
        getPhysicsManager() {
            return this.physicsManager
        }

        /**
         * Get body physics from the entity
         * @param {Entity} entity 
         */
        getBodyFromEntity(entity) {
            return this.physicsManager.getBodyFromEntity(entity)
        }

        /**
         * Find the shape from the entity
         * @param {Entity} entity 
         */
        findShapeFromEntity(entity){
            return this.mapShapeToEntity
                .find(mShape => mShape.entityId === parseInt(entity.id))
                .shape
        }

    }

    return PhysicsEngine
})