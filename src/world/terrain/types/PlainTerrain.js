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
        init() {
            this.entityId = this.entityManager.load(0, 700, PlatformEntity).getId()
        }

        /**
         * @override
         */
        load() {
        }
    }

    return PlainTerrain

})