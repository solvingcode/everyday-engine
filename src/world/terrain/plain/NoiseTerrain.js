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
            this.entity = this.entityManager.load(200, 500, NoiseEntity)
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

    return NoiseTerrain

})