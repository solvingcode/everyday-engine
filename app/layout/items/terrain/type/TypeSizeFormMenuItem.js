define(function (require) {

    import SizeFormMenuItem from '../../entity/SizeFormMenuItem.js'
    import World from '../../../../world/World.js'

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

    export default TypeSizeFormMenuItem

})