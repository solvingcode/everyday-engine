define(function (require) {

    const SizeFormMenuItem = require('../../entity/SizeFormMenuItem.js')
    const World = require('../../../../world/World.js')

    /**
     * Terrain's size form
     */
    class TypeSizeFormMenuItem extends SizeFormMenuItem {
        /**
         * @override
         */
        getFormObject(){
            const terrain = World.get().getTerrainManager().getTerrain()
            return terrain && terrain.getEntity(World.get())
        }
    }

    return TypeSizeFormMenuItem

})