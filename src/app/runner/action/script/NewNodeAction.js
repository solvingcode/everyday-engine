import Action from '../Action.js'
import StateManager from '../../../state/StateManager.js'
import World from '../../../world/World.js'
import ScriptHelper from '../../../utils/ScriptHelper.js'
import NodeHelper from '../../../utils/NodeHelper.js'
import OptionsMenuManager from '../../../manager/OptionsMenuManager.js'

export default class NewNodeAction extends Action {

    /**
     * @const
     * @type {string}
     */
    static STATE = 'ACTION_NEW_SCRIPT_NODE'

    /**
     * @override
     */
    static run() {
        const optionsMenuManager = OptionsMenuManager.get()
        const {bind} = StateManager.get().getNextProgressData(this.STATE)
        const script = World.get().getScriptManager().getFunctionSelected(World.get().getTabManager())
        const functionRegistry = World.get().getFunctionRegistry()
        const node = ScriptHelper.createNode(functionRegistry, script, NodeHelper.getNodeType(bind), bind.getName())
        const camera = script.getCamera()
        node.setPosition(camera.fromCanvasCoord(camera.fromCameraScale(optionsMenuManager.getLastPosition())))
        script.setUpdated(true)
        return true
    }

}