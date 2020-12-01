define(function (require) {

    const PlainTerrain = require('./plain/PlainTerrain.js')

    /**
     * Manage all terrains
     *
     * @property {EntityManager} entityManager
     * @property {Physics} physics
     * @property {Camera} camera
     * @property {{[string]: Terrain}} terrainTypes
     * @property {Terrain} terrain
     */
    class TerrainManager {
        /**
         * @param {Physics} physics
         * @param {EntityManager} entityManager
         * @param {Camera} camera
         */
        constructor(physics, entityManager, camera) {
            this.physics = physics
            this.entityManager = entityManager
            this.camera = camera
            this.terrain = null
            this.init()
        }

        /**
         * Initialize data
         */
        init() {
            this.terrainTypes = {
                [TerrainManager.TYPES.PLAIN]: PlainTerrain
            }
        }

        /**
         * @return {{[string]: Terrain}}
         */
        getTerrainTypes() {
            return this.terrainTypes
        }

        /**
         * @param {string} type
         */
        setTerrainType(type) {
            const terrain = this.terrainTypes[type]
            if (terrain) {
                this.terrain = new terrain(this.physics, this.entityManager, this.camera)
            }else{
                this.terrain = null
            }
        }

        /**
         * @return {string}
         */
        getTerrainType() {
            for (const tType in this.terrainTypes) {
                if (this.terrain instanceof this.terrainTypes[tType]) {
                    return tType
                }
            }
        }

        /**
         * @return {Terrain}
         */
        getTerrain() {
            return this.terrain
        }

        static get TYPES() {
            return {
                PLAIN: 'plain'
            }
        }
    }

    return TerrainManager

})