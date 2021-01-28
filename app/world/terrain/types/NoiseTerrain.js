define(function (require) {

    import Terrain from '../Terrain.js'
    import NoiseEntity from '../../../entity/types/terrain/NoiseEntity.js'

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

    export default NoiseTerrain

})