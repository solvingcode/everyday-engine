define(function (require) {

    const PlainTerrain = require('./types/PlainTerrain.js')
    const NoiseTerrain = require('./types/NoiseTerrain.js')
    const TerrainManagerData = require('../../project/data/TerrainManagerData.js')

    /**
     * Manage all terrains
     * @class {TerrainManager}
     * @extends {TerrainManagerData}
     *
     * @property {Object.<string, Terrain>} terrainTypes
     * @property {Terrain} terrain
     */
    class TerrainManager extends TerrainManagerData{

        constructor() {
            super()
            this.terrain = null
            this.init()
        }

        /**
         * Initialize data
         */
        init() {
            this.terrainTypes = {
                [TerrainManager.TYPES.PLAIN]: PlainTerrain,
                [TerrainManager.TYPES.NOISE]: NoiseTerrain
            }
        }

        /**
         * @return {Object.<string, Terrain>}
         */
        getTerrainTypes() {
            return this.terrainTypes
        }

        /**
         * @param {string} type
         */
        setTerrainType(type) {
            const terrain = this.terrainTypes[type]
            if(this.terrain){
                this.terrain.unload(this)
            }
            if (terrain) {
                this.terrain = new terrain()
            }else{
                this.terrain = null
            }
        }

        /**
         * @return {string}
         */
        getTerrainType() {
            for (const tType in this.terrainTypes) {
                if(this.terrainTypes.hasOwnProperty(tType)) {
                    if (this.terrain instanceof this.terrainTypes[tType]) {
                        return tType
                    }
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
                PLAIN: 'plain',
                NOISE: 'noise'
            }
        }
    }

    return TerrainManager

})