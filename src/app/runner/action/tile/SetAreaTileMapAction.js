import Action from '../Action.js'
import World from '../../../world/World.js'
import StateManager from '../../../state/StateManager.js'
import TileMapHelper from '../../../utils/TileMapHelper.js'
import Vector from '../../../utils/Vector.js'

export default class SetAreaTileMapAction extends Action {

    static STATE = 'ACTION_SET_AREA_TILE_MAP'

    /**
     * @override
     */
    static run() {
        const world = World.get()
        const {startCellIndex, endCellIndex, assetId} = StateManager.get().getNextProgressData(this.STATE)
        const selectedUnit = world.getUnitManager().getSelected()
        if (selectedUnit) {
            for(let iCellX = startCellIndex.getX(); iCellX <= endCellIndex.getX(); iCellX ++){
                for(let iCellY = startCellIndex.getY(); iCellY <= endCellIndex.getY(); iCellY ++){
                    TileMapHelper.set(selectedUnit, new Vector({x: iCellX, y: iCellY}), assetId)
                }
            }
        }
        return true
    }

}