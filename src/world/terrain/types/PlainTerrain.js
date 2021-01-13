define(function (require) {

    const Terrain = require('../Terrain.js')
    const PlatformEntity = require('../../../entity/types/terrain/PlatformEntity.js')

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

    return PlainTerrain

})