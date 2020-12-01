define(function(require){

    const Terrain = require('../Terrain.js')
    const PlatformEntity = require('../../../entity/types/PlatformEntity.js')

    /**
     * Manage and generate plain terrains
     */
    class PlainTerrain extends Terrain {
        /**
         * @override
         */
        init() {

        }

        /**
         * @override
         */
        update(){

        }

        /**
         * @override
         */
        load(){
            this.entityManager.load(0, 700, PlatformEntity)
        }
    }

    return PlainTerrain

})