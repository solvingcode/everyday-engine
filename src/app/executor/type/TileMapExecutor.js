import ComponentExecutor from './ComponentExecutor.js'
import MeshComponent from '../../component/internal/MeshComponent.js'
import TransformComponent from '../../component/internal/TransformComponent.js'
import TileMapComponent from '../../component/internal/tile/TileMapComponent.js'
import World from '../../world/World.js'
import TileMapHelper from '../../utils/TileMapHelper.js'

export default class TileMapExecutor extends ComponentExecutor {

    constructor() {
        super([TileMapComponent, MeshComponent, TransformComponent])
    }

    /**
     * @override
     */
    execute(unit, executionContext) {
        TileMapHelper.updateMeshes(World.get(), unit)
        return true
    }

}