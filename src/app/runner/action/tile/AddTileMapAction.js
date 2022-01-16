import Action from '../Action.js'
import World from '../../../world/World.js'
import TileMapUnitInstant from '../../../unit/instant/type/internal/tile/TileMapUnitInstant.js'

export default class AddTileMapAction extends Action {

    static STATE = 'ACTION_ADD_TILE_MAP'

    /**
     * @override
     */
    static run() {
        const world = World.get()
        world.createUnitInstant(TileMapUnitInstant)
        return true
    }

}