define(function (require) {

    const SizeFormMenuItem = require('../../entity/SizeFormMenuItem.js')
    const World = require('../../../../world/World.js')

    /**
     * Plain terrain's size form
     */
    class PlainSizeFormMenuItem extends SizeFormMenuItem {
        /**
         * @override
         */
        getFormObject(){
            const terrain = World.get().getTerrainManager().getTerrain()
            return terrain && terrain.getEntity()
        }
    }

    return PlainSizeFormMenuItem

})