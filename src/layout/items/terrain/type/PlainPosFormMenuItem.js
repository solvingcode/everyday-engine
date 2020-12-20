define(function (require) {

    const PositionFormMenuItem = require('../../entity/PositionFormMenuItem.js')
    const World = require('../../../../world/World.js')

    /**
     * Plain terrain's position form
     */
    class PlainPosFormMenuItem extends PositionFormMenuItem {
        /**
         * @override
         */
        getFormObject(){
            const terrain = World.get().getTerrainManager().getTerrain()
            return terrain && terrain.getEntity()
        }
    }

    return PlainPosFormMenuItem

})