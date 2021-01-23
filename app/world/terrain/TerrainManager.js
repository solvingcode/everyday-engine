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
            this.terrains = []
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
         * @param {World} world
         */
        update(world){
            this.unload(world)
            this.load(world)
        }

        /**
         * @param {World} world
         */
        load(world){
            const terrain = this.getTerrain()
            terrain && terrain.load(world)
        }

        /**
         * @param {World} world
         */
        unload(world){
            const terrain = this.getTerrain()
            this.getTerrains()
                .filter(pTerrain => pTerrain !== terrain)
                .forEach(pTerrain => pTerrain && pTerrain.unload(world))
            this.setTerrains([terrain])
        }

        /**
         * @return {Object.<string, Terrain>}
         */
        getTerrainTypes() {
            return this.terrainTypes
        }

        /**
         * @param {Object.<string, Terrain>} types
         */
        setTerrainTypes(types){
            this.terrainTypes = types
        }

        /**
         * @param {string} type
         */
        setTerrainType(type) {
            const terrain = this.terrainTypes[type]
            if (terrain) {
                this.terrains.push(new terrain())
            }else{
                this.terrains.push(null)
            }
        }

        /**
         * @return {string}
         */
        getTerrainType() {
            const terrain = this.getTerrain()
            for (const tType in this.terrainTypes) {
                if(this.terrainTypes.hasOwnProperty(tType)) {
                    if (terrain instanceof this.terrainTypes[tType]) {
                        return tType
                    }
                }
            }
        }

        /**
         * @return {Terrain}
         */
        getTerrain() {
            return this.terrains.length && this.terrains[this.terrains.length - 1]
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