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
         */
        constructor(physicsEngine) {
            this.physicsEngine = physicsEngine
        }
        /**
         * Update the entities properties
         * @param {Entity[]} entities 
         */
        update(entities) {
            throw new TypeError('"AiEngine.update" method must be implemented')
        }
    }

    return AiEngine

})