import Action from '../Action.js'
import World from '../../../world/World.js'
import TileGridUnitInstant from '../../../unit/instant/type/internal/tile/TileGridUnitInstant.js'

export default class AddTileGridAction extends Action {

    static STATE = 'ACTION_ADD_TILE_GRID'

    /**
     * @override
     */
    static run() {
        const world = World.get()
        world.createUnitInstant(TileGridUnitInstant)
        return true
    }

}