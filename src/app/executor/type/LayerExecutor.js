import ComponentExecutor from './ComponentExecutor.js'
import GUIPropertyComponent from '../../component/internal/gui/property/GUIPropertyComponent.js'
import MeshComponent from '../../component/internal/MeshComponent.js'
import StyleComponent from '../../component/internal/StyleComponent.js'
import World from '../../world/World.js'

export default class LayerExecutor extends ComponentExecutor {

    constructor() {
        super([GUIPropertyComponent, MeshComponent, StyleComponent])
    }

    /**
     * @override
     */
    execute(unit, executionContext) {
        const world = World.get()
        const guiPropertyComponent = unit.getComponent(GUIPropertyComponent)
        const unitRank = unit.getRank(world)
        const actualRank = guiPropertyComponent.getRank()
        if(unitRank !== actualRank){
            guiPropertyComponent.setRank(unitRank)
            world.forceReload()
        }
    }

}