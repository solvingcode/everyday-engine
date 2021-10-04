import ComponentExecutor from './ComponentExecutor.js'
import TileMapComponent from '../../component/internal/tile/TileMapComponent.js'
import World from '../../world/World.js'
import TileMapHelper from '../../utils/TileMapHelper.js'
import TileColliderComponent from '../../component/internal/tile/TileColliderComponent.js'

export default class TileColliderExecutor extends ComponentExecutor {

    constructor() {
        super([TileMapComponent, TileColliderComponent])
    }

    /**
     * @override
     */
    execute(unit, executionContext) {
        TileMapHelper.updateColliders(World.get(), unit)
        return true
    }

}