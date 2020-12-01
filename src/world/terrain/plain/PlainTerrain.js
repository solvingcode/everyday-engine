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
            this.entity = this.entityManager.load(0, 700, PlatformEntity)
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
            this.entity.setPosition({x: 0, y: 700})
        }
        /**
         * @override
         */
        unload(){
            this.entityManager.delete(this.entity)
        }
    }

    return PlainTerrain

})