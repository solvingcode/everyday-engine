import Data from './Data.js'

/**
 * @class {TerrainData}
 * @extends {Data}
 */
class TerrainData extends Data {

    entityId
    chunksNbr
    chunkIds

    /**
     * @param {number} entityId
     */
    setEntityId(entityId) {
        this.entityId = entityId
    }

    /**
     * @return {number}
     */
    getEntityId() {
        return this.entityId
    }

    /**
     * @param {number} chunksNbr
     */
    setChunksNbr(chunksNbr) {
        this.chunksNbr = chunksNbr
    }

    /**
     * @return {number}
     */
    getChunksNbr() {
        return this.chunksNbr
    }

    /**
     * @param {number[]} chunkIds
     */
    setChunkIds(chunkIds) {
        this.chunkIds = chunkIds
    }

    /**
     * @return {number[]}
     */
    getChunkIds() {
        return this.chunkIds
    }

    /**
     * @param {Size} size
     */
    setSize(size) {
        this.size = size
    }

    /**
     * @return {Size}
     */
    getSize() {
        return this.size
    }
}

export default TerrainData