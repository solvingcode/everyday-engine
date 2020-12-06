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
                {x: 10, y: 170},
                {x: 20, y: 140},
                {x: 30, y: 90},
                {x: 40, y: 80},
                {x: 50, y: 70},
                {x: 60, y: 20},
                {x: 0, y: 0}
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