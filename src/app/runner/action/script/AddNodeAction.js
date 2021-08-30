import Action from '../Action.js'
import StateManager from '../../../state/StateManager.js'
import World from '../../../world/World.js'
import ScriptHelper from '../../../utils/ScriptHelper.js'
import Vector from '../../../utils/Vector.js'
import Window from '../../../core/Window.js'
import {NODE_TYPES} from '../../../flow/node/ANode.js'
import ClientError from '../../../exception/type/ClientError.js'
import FunctionOutputNode from '../../../flow/node/FunctionOutputNode.js'

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
        const script = World.get().getScriptManager().getFunctionSelected(World.get().getTabManager())
        const functionRegistry = World.get().getFunctionRegistry()
        let value = formData.value
        if (formData.type === NODE_TYPES.INPUT) {
            if (script.isMain()) {
                throw new ClientError(`Cannot add inputs to the main function`)
            }
            value = `${value}[${formData.inputType}]`
        }
        if (formData.type === NODE_TYPES.OUTPUT) {
            if (script.isMain()) {
                throw new ClientError(`Cannot set output for the main function`)
            }
            if (!!script.findNodesByClass(FunctionOutputNode).length) {
                throw new ClientError(`The output is already set for "${script.getName()}"`)
            }
        }
        const node = ScriptHelper.createNode(functionRegistry, script, formData.type, value)
        const sizeWindow = Window.get().getSize()
        const scriptGraphPosition = Vector.add(
            script.getCamera().getPosition(),
            new Vector({x: sizeWindow.getWidth() / 2, y: sizeWindow.getHeight() / 2}))
        if (scriptGraphPosition) {
            node.setPosition(new Vector({x: scriptGraphPosition.getX(), y: scriptGraphPosition.getY()}))
        }
        script.setUpdated(true)
        return true
    }

}