define(function (require) {

    import Terrain from '../Terrain.js'
    import PlatformEntity from '../../../entity/types/terrain/PlatformEntity.js'

    /**
     * Manage and generate plain terrains
     */
    class PlainTerrain extends Terrain {
        /**
         * @override
         */
        loadChunk(world, x, y, props) {
            return world.addEntity({x, y}, PlatformEntity, props)
        }
    }

    export default PlainTerrain

})