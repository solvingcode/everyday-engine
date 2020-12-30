define(function(require){

    const Data = require('./Data.js')

    /**
     * @class {TerrainData}
     * @extends {Data}
     */
    class TerrainData extends Data{

        entityId
        size
        rotation

    }

    return TerrainData

})