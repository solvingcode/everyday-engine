import ComponentExecutor from './ComponentExecutor.js'
import ScriptComponent from '../../component/internal/ScriptComponent.js'
import UnitHelper from '../../utils/UnitHelper.js'
import World from '../../world/World.js'

export default class EEScriptInitExecutor extends ComponentExecutor {

    constructor() {
        super([ScriptComponent])
    }

    /**
     * @override
     */
    execute(unit, executionContext) {
        const world = World.get()
        unit.findComponentsByClass(ScriptComponent)
            .filter(scriptComponent => scriptComponent.isEnabled())
            .forEach(scriptComponent => {
                if (!scriptComponent.isInitialized()) {
                    UnitHelper.initScript(world, unit, scriptComponent)
                }
            })
    }

}