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
        chunksNbr
        chunkIds

        /**
         * @param {number} entityId
         */
        setEntityId(entityId){
            this.entityId = entityId
        }

        /**
         * @param {number} rotation
         */
        setRotation(rotation){
            this.rotation = rotation
        }

        /**
         * @param {number} chunksNbr
         */
        setChunksNbr(chunksNbr){
            this.chunksNbr = chunksNbr
        }

        /**
         * @param {number[]} chunkIds
         */
        setChunkIds(chunkIds){
            this.chunkIds = chunkIds
        }

        /**
         * @param {Size} size
         */
        setSize(size){
            this.size = size
        }
    }

    return TerrainData

})