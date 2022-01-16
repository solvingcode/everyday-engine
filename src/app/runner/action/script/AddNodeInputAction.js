import Action from '../Action.js'
import StateManager from '../../../state/StateManager.js'
import World from '../../../world/World.js'
import ClientError from '../../../exception/type/ClientError.js'
import ScriptGraphSelector from '../../../selector/ScriptGraphSelector.js'
import NodeComponent from '../../../component/internal/gui/node/NodeComponent.js'
import ScriptHelper from '../../../utils/ScriptHelper.js'
import {NODE_TYPES} from '../../../flow/node/ANode.js'
import {TYPES} from '../../../pobject/AttributeType.js'
import DynamicAttributeHelper from '../../../utils/DynamicAttributeHelper.js'

export default class AddNodeInputAction extends Action {

    /**
     * @const
     * @type {string}
     */
    static STATE = 'ACTION_ADD_SCRIPT_NODE_INPUT'

    /**
     * @override
     */
    static run() {
        const world = World.get()
        const {formData} = StateManager.get().getNextProgressData(this.STATE)
        const script = World.get().getScriptManager().getFunctionSelected(World.get().getTabManager())

        const selectedGraphUnits = ScriptGraphSelector.get().getSelected(world)
        const selectedGraphUnit = selectedGraphUnits[0]
        const node = selectedGraphUnit.getComponent(NodeComponent).getNode()

        const functionRegistry = World.get().getFunctionRegistry()

        let nodeSource
        const value = formData.getValue()
        const inputType = formData.getAttribute().getAttrType()

        let hasError = false
        if (inputType === TYPES.UNIT || inputType === TYPES.COMPONENT_INSTANCE) {
            if (value === true) {
                nodeSource = ScriptHelper.createNode(functionRegistry, script, NODE_TYPES.SELF)
            } else if (value !== false) {
                hasError = true
            }
        } else if (inputType === TYPES.COMPONENT) {
            nodeSource = ScriptHelper.createNode(functionRegistry, script, NODE_TYPES.COMPONENT, value)
        } else {
            const validatedValue = DynamicAttributeHelper.getValueByType(value, inputType, world)
            nodeSource = ScriptHelper.createNode(functionRegistry, script, NODE_TYPES.CONSTANT, `${validatedValue}`)
        }

        if (hasError) {
            throw new ClientError(`Cannot add the connection (target are invalid)`)
        }

        const nodeInput = node.getInputNodeAttached(formData.getAttribute().getAttrName())
        if (nodeInput) {
            script.removeInput(nodeInput)
            script.setUpdated(true)
        }

        if (node && nodeSource) {
            node.attachResultOutput(nodeSource, formData.getAttribute().getAttrName())
            script.setUpdated(true)
        }
        return true
    }

}