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
            return World.get().getTerrainManager().getTerrain()
        }
    }

    return PlainSizeFormMenuItem

})