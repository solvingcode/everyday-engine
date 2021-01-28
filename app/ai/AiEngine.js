define(function (require) {

    import Maths from '../utils/Maths.js'

    /**
     * AIEngine class
     * Define the AI engine wich responsible to update entities and apply
     * Machine learning algorithms
     * @abstract
     *
     * @property {EntityManager} entityManager
     * @property {Physics} physics
     * @property {Camera} camera
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
         * Generate new version
         */
        newVersion(){
            this.version = Maths.generateId()
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
        /**
         * Get the version of the engine
         */
        getVersion() {
            return this.version
        }
    }

    export default AiEngine

})