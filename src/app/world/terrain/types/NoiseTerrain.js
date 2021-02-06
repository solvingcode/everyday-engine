import Terrain from '../Terrain.js'
import NoiseEntity from '../../../entity/types/terrain/NoiseEntity.js'
import Vector from '../../../utils/Vector.js'

/**
 * Manage and generate noise terrains
 * @property {number[]} chunkIds
 */
class NoiseTerrain extends Terrain {
    /**
     * @override
     */
    loadChunk(world, x, y, props) {
        return world.addEntity(new Vector({x, y}), NoiseEntity, props)
    }
}

export default NoiseTerrain