import Action from '../Action.js'
import World from '../../../world/World.js'
import StateManager from '../../../state/StateManager.js'
import TileMapHelper from '../../../utils/TileMapHelper.js'

export default class DeleteTileMapAction extends Action {

    static STATE = 'ACTION_DELETE_TILE_MAP'

    /**
     * @override
     */
    static run() {
        const world = World.get()
        const {cellIndex} = StateManager.get().getNextProgressData(this.STATE)
        const selectedUnit = world.getUnitManager().getSelected()
        if (selectedUnit) {
            TileMapHelper.delete(selectedUnit, cellIndex)
        }
        return true
    }

}