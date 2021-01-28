import TextureFormMenuItem from '../../style/TextureFormMenuItem.js'
import World from '../../../../world/World.js'

/**
 * Plain terrain background Menu Item
 */
class TypeBackgroundMenuItem extends TextureFormMenuItem {
    /**
     * @override
     */
    getFormObject() {
        const terrain = World.get().getTerrainManager().getTerrain()
        return terrain && terrain.getEntity(World.get())
    }
}

export default TypeBackgroundMenuItem