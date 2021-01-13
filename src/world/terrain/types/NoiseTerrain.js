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
        loadChunk(world, x, y, props) {
            return world.addEntity({x, y}, NoiseEntity, props)
        }
    }

    return NoiseTerrain

})