define(function (require) {

    const Terrain = require('../Terrain.js')
    const NoiseEntity = require('../../../entity/types/terrain/NoiseEntity.js')

    /**
     * Manage and generate noise terrains
     */
    class NoiseTerrain extends Terrain {
        /**
         * @override
         */
        init() {
            this.entityId = this.entityManager.load(200, 500, NoiseEntity).getId()
        }

        /**
         * @override
         */
        load() {
        }
    }

    return NoiseTerrain

})