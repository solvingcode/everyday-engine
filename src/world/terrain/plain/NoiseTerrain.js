define(function (require) {

    const Terrain = require('../Terrain.js')
    const PolyEntity = require('../../../entity/types/PolyEntity.js')

    /**
     * Manage and generate noise terrains
     */
    class NoiseTerrain extends Terrain {
        /**
         * @override
         */
        init() {
            this.entity = new PolyEntity({position: {x: 200, y: 500}})
            this.entity.setPoints([
                {x: 0, y: 0},
                {x: 50, y: 50},
                {x: 80, y: 50},
                {x: 80, y: 90},
                {x: 80, y: 100},
                {x: 90, y: 150},
                {x: 120, y: 220}
            ])
            this.entity.regenerate()
            this.entityManager.add(this.entity)
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