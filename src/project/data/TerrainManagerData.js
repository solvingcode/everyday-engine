define(function(require){

    const Data = require('./Data.js')

    /**
     * @class {TerrainManagerData}
     * @extends {Data}
     */
    class TerrainManagerData extends Data{

        terrains

        /**
         * @return {Terrain[]}
         */
        getTerrains(){
            return this.terrains
        }

        /**
         * @param {Terrain[]} terrains
         */
        setTerrains(terrains){
            this.terrains = terrains
        }

    }

    return TerrainManagerData

})