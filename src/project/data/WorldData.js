define(function(require){

    const Data = require('./Data.js')

    /**
     * @class {WorldData}
     * @extends {Data}
     *
     * @property {AiEngine} aiEngine
     * @property {Camera} camera
     */
    class WorldData extends Data{

        entityManager
        camera
        physics
        terrainManager
        mouseConstraintId

        /**
         * @param {World} data
         */
        set(data){
            if(data instanceof WorldData){
                Object.getOwnPropertyNames(this).map(prop => this[prop] = data[prop])
                this.reload()
            }else{
                throw new TypeError('Cannot set the new world, data must be instance of World class')
            }
        }

        reload(){
            throw new TypeError('World.reload must be implemented!')
        }

        /**
         * @param {number} mouseConstraintId
         */
        setMouseConstraintId(mouseConstraintId){
            this.mouseConstraintId = mouseConstraintId
        }

        /**
         * @param {EntityManagerData} entityManager
         */
        setEntityManager(entityManager){
            this.entityManager = entityManager
        }

        /**
         * @param {CameraData} camera
         */
        setCamera(camera){
            this.camera = camera
        }

        /**
         * @param {PhysicsData} physics
         */
        setPhysics(physics){
            this.physics = physics
        }

        /**
         * @param {TerrainManagerData} terrainManager
         */
        setTerrainManager(terrainManager){
            this.terrainManager = terrainManager
        }

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