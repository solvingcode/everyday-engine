import CrudMenuItem from '../../crud/CrudMenuItem.js'
import {TYPES} from '../../../../pobject/AttributeType.js'
import World from '../../../../world/World.js'
import VariableScript from '../../../../flow/VariableScript.js'

export default class ScriptVariablesMenuItem extends CrudMenuItem {
    constructor() {
        super('Class Variables', new VariableScript('', TYPES.ANY))
    }

    /**
     * @override
     */
    getList() {
        const script = World.get().getScriptManager().getSelected(World.get().getTabManager())
        return script && script.getVariables()
    }
}
