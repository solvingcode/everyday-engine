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
        loadChunk(x, y, props) {
            return this.world.addEntity({x, y}, PlatformEntity, props).getId()
        }
    }

    return PlainTerrain

})