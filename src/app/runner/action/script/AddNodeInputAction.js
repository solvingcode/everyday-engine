import Action from '../Action.js'
import StateManager from '../../../state/StateManager.js'
import World from '../../../world/World.js'
import ClientError from '../../../exception/type/ClientError.js'
import ScriptGraphSelector from '../../../selector/ScriptGraphSelector.js'
import NodeComponent from '../../../component/internal/gui/node/NodeComponent.js'
import ScriptHelper from '../../../utils/ScriptHelper.js'
import {NODE_TYPES} from '../../../flow/node/ANode.js'
import {TYPES} from '../../../pobject/AttributeType.js'
import VariableNode from '../../../flow/node/variable/VariableNode.js'

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
        const nodeId = selectedGraphUnit.getComponent(NodeComponent).getNodeId()
        const node = script.findNodeById(nodeId)

        const functionRegistry = World.get().getFunctionRegistry()

        let nodeSource
        const value = formData.getValue()
        if (formData.getAttribute().getAttrType() === TYPES.UNIT && value === '[self]') {
            nodeSource = ScriptHelper.createNode(functionRegistry, script, NODE_TYPES.SELF)
        } else if (formData.getAttribute().getAttrType() === TYPES.COMPONENT) {
            nodeSource = ScriptHelper.createNode(functionRegistry, script, NODE_TYPES.COMPONENT, value)
        } else if (formData.getAttribute().getAttrType() === TYPES.COMPONENT_INSTANCE && value === '[self]') {
            nodeSource = ScriptHelper.createNode(functionRegistry, script, NODE_TYPES.SELF)
        } else {
            const varRegex = new RegExp('^var:([^:]+)$', 'i')
            let variableValue
            if (value.match(varRegex)) {
                variableValue = value.replace(varRegex, '$1')
            }
            if (variableValue) {
                nodeSource = script.findNodeByNameClass(variableValue, VariableNode)
            } else {
                nodeSource = ScriptHelper.createNode(functionRegistry, script, NODE_TYPES.CONSTANT, value)
            }
        }

        if (node && nodeSource) {
            node.attach(nodeSource, formData.getAttribute().getAttrName())
            script.setUpdated(true)
        } else {
            throw new ClientError(`Cannot add the connection (target are invalid)`)
        }
        return true
    }

}