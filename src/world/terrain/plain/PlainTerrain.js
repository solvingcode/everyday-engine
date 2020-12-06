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
            this.entity = this.entityManager.load(0, 700, PlatformEntity)
        }

        /**
         * @override
         */
        load() {

        }

        /**
         * @override
         */
        unload() {
            this.entityManager.delete(this.entity)
        }
    }

    return PlainTerrain

})