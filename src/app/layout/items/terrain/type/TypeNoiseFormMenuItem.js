import NoiseFormMenuItem from '../../entity/NoiseFormMenuItem.js'
import World from '../../../../world/World.js'

/**
 * Terrain's noise configs form
 */
class TypeNoiseFormMenuItem extends NoiseFormMenuItem {
    /**
     * @override
     */
    getFormObject() {
        const terrain = World.get().getTerrainManager().getTerrain()
        return terrain && terrain.getEntity(World.get())
    }
}

export default TypeNoiseFormMenuItem