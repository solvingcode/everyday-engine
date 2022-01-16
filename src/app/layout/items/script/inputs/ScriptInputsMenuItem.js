import CrudMenuItem from '../../crud/CrudMenuItem.js'
import {TYPES} from '../../../../pobject/AttributeType.js'
import World from '../../../../world/World.js'
import InputScript from '../../../../flow/InputScript.js'

export default class ScriptInputsMenuItem extends CrudMenuItem {
    constructor() {
        super('Inputs', new InputScript('', TYPES.ANY))
    }

    /**
     * @override
     */
    getList() {
        const script = World.get().getScriptManager().getFunctionSelected(World.get().getTabManager())
        return script && script.getFunctionInputs()
    }

    /**
     * @override
     */
    isValid() {
        const script = World.get().getScriptManager().getFunctionSelected(World.get().getTabManager())
        return super.isValid() && script && !script.isMain()
    }
}
