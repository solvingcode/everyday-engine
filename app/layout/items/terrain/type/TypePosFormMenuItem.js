define(function (require) {

    const PositionFormMenuItem = require('../../entity/PositionFormMenuItem.js')
    const World = require('../../../../world/World.js')

    /**
     * Terrain's position form
     */
    class TypePosFormMenuItem extends PositionFormMenuItem {
        /**
         * @override
         */
        getFormObject(){
            const terrain = World.get().getTerrainManager().getTerrain()
            return terrain && terrain.getEntity(World.get())
        }
    }

    return TypePosFormMenuItem

})