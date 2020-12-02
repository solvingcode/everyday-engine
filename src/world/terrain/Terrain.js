define(function(require){

    const Maths = require('../../utils/Maths.js')

    /**
     * Terrain class
     * Define and generate terrains
     * @abstract
     *
     * @property {EntityManager} entityManager
     * @property {Physics} physics
     * @property {Camera} camera
     * @property {Entity} entity
     */
    class Terrain {
        /**
         * @param {Physics} physics
         * @param {EntityManager} entityManager
         * @param {Camera} camera
         */
        constructor(physics, entityManager, camera) {
            this.physics = physics
            this.entityManager = entityManager
            this.camera = camera
            this.entity = null
            this.init()
        }
        /**
         * Initialize data
         * @abstract
         */
        init() {
            throw new TypeError('"Terrain.init" method must be implemented')
        }
        /**
         * Load the terrain
         * @abstract
         */
        load() {
            throw new TypeError('"Terrain.load" method must be implemented')
        }
        /**
         * Unload the terrain
         * @abstract
         */
        unload() {
            throw new TypeError('"Terrain.unload" method must be implemented')
        }
        /**
         * Generate new version
         */
        newVersion(){
            this.version = Maths.generateId()
        }
        /**
         * Get the version of the engine
         */
        getVersion() {
            return this.version
        }
        /**
         * @return {Entity}
         */
        getEntity(){
            return this.entity
        }
    }

    return Terrain

})