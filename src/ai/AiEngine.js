define(function () {

    /**
     * AIEngine class
     * Define the AI engine wich responsible to update entities and apply
     * Machine learning algotithms
     * @abstract
     */
    class AiEngine {
        /**
         * @param {PhysicsEngine} physicsEngine 
         * @param {EntityManager} entityManager 
         */
        constructor(physicsEngine, entityManager) {
            this.physicsEngine = physicsEngine
            this.entityManager = entityManager
        }
        /**
         * Update the entities properties
         * @param {Entity[]} entities 
         */
        update(entities) {
            throw new TypeError('"AiEngine.update" method must be implemented')
        }
        /**
         * Initialize data
         */
        init(){
            throw new TypeError('"AiEngine.init" method must be implemented')
        }
    }

    return AiEngine

})