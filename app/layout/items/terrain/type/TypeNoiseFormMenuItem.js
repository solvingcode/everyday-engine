define(function (require) {

    const NoiseFormMenuItem = require('../../entity/NoiseFormMenuItem.js')
    const World = require('../../../../world/World.js')

    /**
     * Terrain's noise configs form
     */
    class TypeNoiseFormMenuItem extends NoiseFormMenuItem {
        /**
         * @override
         */
        getFormObject(){
            const terrain = World.get().getTerrainManager().getTerrain()
            return terrain && terrain.getEntity(World.get())
        }
    }

    return TypeNoiseFormMenuItem

})