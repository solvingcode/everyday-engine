import Action from '../Action.js'
import StateManager from '../../../state/StateManager.js'
import World from '../../../world/World.js'
import ScriptHelper from '../../../utils/ScriptHelper.js'
import Vector from '../../../utils/Vector.js'

export default class AddNodeAction extends Action {

    /**
     * @const
     * @type {string}
     */
    static STATE = 'ACTION_ADD_SCRIPT_NODE'

    /**
     * @override
     */
    static run() {
        const {formData} = StateManager.get().getNextProgressData(this.STATE)
        const script = World.get().getScriptManager().getSelected(World.get().getTabManager())
        const functionRegistry = World.get().getFunctionRegistry()
        const assetTab = World.get().getTabManager().getSelectedContentData()
        const node = ScriptHelper.createNode(functionRegistry, script, formData.type, formData.value)
        const scriptGraphPosition = script.getCamera().getPosition()
        if(scriptGraphPosition){
            node.setPosition(new Vector({x: scriptGraphPosition.getX(), y: scriptGraphPosition.getY()}))
        }
        assetTab.generate(script)
        return true
    }

}