import ComponentExecutor from './ComponentExecutor.js'
import ScriptComponent from '../../component/internal/ScriptComponent.js'
import UnitHelper from '../../utils/UnitHelper.js'

export default class EEScriptInitExecutor extends ComponentExecutor {

    constructor() {
        super([ScriptComponent])
    }

    /**
     * @override
     */
    execute(unit, executionContext) {
        unit.findComponentsByClass(ScriptComponent)
            .filter(scriptComponent => scriptComponent.isEnabled())
            .forEach(scriptComponent => {
                if (!scriptComponent.isInitialized()) {
                    UnitHelper.initScript(scriptComponent)
                }
            })
    }

}