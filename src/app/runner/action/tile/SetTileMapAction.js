import Action from '../Action.js'
import World from '../../../world/World.js'
import StateManager from '../../../state/StateManager.js'
import TileMapHelper from '../../../utils/TileMapHelper.js'

export default class SetTileMapAction extends Action {

    static STATE = 'ACTION_SET_TILE_MAP'

    /**
     * @override
     */
    static run() {
        const world = World.get()
        const {cellIndex, assetId} = StateManager.get().getNextProgressData(this.STATE)
        const selectedUnit = world.getUnitManager().getSelected()
        TileMapHelper.set(selectedUnit, cellIndex, assetId)
        return true
    }

}