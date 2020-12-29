define(function(){

    /**
     * @class {WorldData}
     * @property {AiEngine} aiEngine
     * @property {Camera} camera
     */
    class WorldData {

        entityManager
        camera
        physics
        terrainManager
        mouseConstraintId

        /**
         * Get the physics manager
         * @return {Physics}
         */
        getPhysics() {
            return this.physics
        }

        /**
         * @return {EntityManager}
         */
        getEntityManager() {
            return this.entityManager
        }

        /**
         * Get the Ai engine
         */
        getAiEngine() {
            return this.aiEngine
        }

        /**
         * Get the terrain manager
         * @return {TerrainManager}
         */
        getTerrainManager() {
            return this.terrainManager
        }

        /**
         * Get the principal camera (active)
         */
        getCamera() {
            return this.camera
        }

    }

    return WorldData

})