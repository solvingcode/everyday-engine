define(function (require) {

    const Terrain = require('../Terrain.js')
    const NoiseEntity = require('../../../entity/types/terrain/NoiseEntity.js')

    /**
     * Manage and generate noise terrains
     * @property {number[]} chunkIds
     */
    class NoiseTerrain extends Terrain {
        /**
         * @override
         */
        loadChunk(x, y, props) {
            return this.world.addEntity({x, y}, NoiseEntity, props).getId()
        }
    }

    return NoiseTerrain

})