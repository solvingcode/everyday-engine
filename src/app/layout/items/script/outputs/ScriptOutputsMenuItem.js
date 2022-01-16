import CrudMenuItem from '../../crud/CrudMenuItem.js'
import {TYPES} from '../../../../pobject/AttributeType.js'
import World from '../../../../world/World.js'
import OutputScript from '../../../../flow/OutputScript.js'

export default class ScriptOutputsMenuItem extends CrudMenuItem {
    constructor() {
        super('Outputs', new OutputScript('', TYPES.ANY))
    }

    /**
     * @override
     */
    getList() {
        const script = World.get().getScriptManager().getFunctionSelected(World.get().getTabManager())
        return script && script.getFunctionOutputs()
    }

    /**
     * @override
     */
    isValid() {
        const script = World.get().getScriptManager().getFunctionSelected(World.get().getTabManager())
        return super.isValid() && script && !script.isMain()
    }
}
