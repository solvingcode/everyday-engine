define(function (require) {

    const BackgroundFormMenuItem = require('../../style/BackgroundFormMenuItem.js')
    const World = require('../../../../world/World.js')

    /**
     * Plain terrain background Menu Item
     */
    class TypeBackgroundMenuItem extends BackgroundFormMenuItem {
        /**
         * @override
         */
        getFormObject(){
            const terrain = World.get().getTerrainManager().getTerrain()
            return terrain && terrain.getEntity()
        }
    }

    return TypeBackgroundMenuItem

})