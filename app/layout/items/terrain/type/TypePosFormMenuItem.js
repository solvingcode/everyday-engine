define(function (require) {

    import PositionFormMenuItem from '../../entity/PositionFormMenuItem.js'
    import World from '../../../../world/World.js'

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

    export default TypePosFormMenuItem

})