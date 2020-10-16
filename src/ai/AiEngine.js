define(function () {

    /**
     * AIEngine class
     * Define the AI engine wich responsible to update entities and apply
     * Machine learning algotithms
     * @abstract
     */
    class AiEngine {
        /**
         * @param {Physics} physics 
         * @param {EntityManager} entityManager 
         * @param {Camera} camera 
         */
        constructor(physics, entityManager, camera) {
            this.physics = physics
            this.entityManager = entityManager
            this.camera = camera
        }
        /**
         * Update the AI
         */
        update() {
            throw new TypeError('"AiEngine.update" method must be implemented')
        }
        /**
         * Initialize data
         */
        init() {
            throw new TypeError('"AiEngine.init" method must be implemented')
        }
    }

    return AiEngine

})