define(function(require){

    const Data = require('./Data.js')

    /**
     * @class {TerrainManagerData}
     * @extends {Data}
     */
    class TerrainManagerData extends Data{

        terrain

        /**
         * @return {Terrain}
         */
        getTerrain(){
            return this.terrain
        }

    }

    return TerrainManagerData

})