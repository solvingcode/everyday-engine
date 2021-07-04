import UnitInstant from '../../../UnitInstant.js'
import TransformComponent from '../../../../../component/internal/TransformComponent.js'
import MeshComponent from '../../../../../component/internal/MeshComponent.js'
import GUIPropertyComponent from '../../../../../component/internal/gui/property/GUIPropertyComponent.js'
import {PrimitiveShape} from '../../../../Unit.js'
import NodeComponent from '../../../../../component/internal/gui/node/NodeComponent.js'
import NodeHelper from '../../../../../utils/NodeHelper.js'
import ScriptHelper from '../../../../../utils/ScriptHelper.js'
import DynamicAttribute from '../../../../../pobject/DynamicAttribute.js'
import {TYPES} from '../../../../../pobject/AttributeType.js'
import ConstantNode from '../../../../../flow/node/ConstantNode.js'
import ArrayHelper from '../../../../../utils/ArrayHelper.js'

export default class GraphNodeUnitInstant extends UnitInstant {

    /**
     * @param {Vector} position
     * @param {ANode} node
     * @param {AScript} script
     */
    instantiate(position, node, script) {
        this.createComponent(NodeComponent)
        this.update(position, node, script)
    }

    /**
     * @param {Vector} position
     * @param {ANode} node
     * @param {AScript} script
     */
    update(position, node, script) {
        const transformComponent = this.getComponent(TransformComponent)
        const meshComponent = this.getComponent(MeshComponent)
        const nodeComponent = this.getComponent(NodeComponent)
        const nodeSource = NodeHelper.getSourceNode(node)
        const actualNodeInputs = nodeComponent.getNodeInputs()
        const nodeInputs = node.getInputs().map(input => {
            const sourceNode = script.findNodeById(input.getSourceNodeId())
            if (sourceNode instanceof ConstantNode) {
                return new DynamicAttribute(
                    input.getTargetName(),
                    TYPES.STRING,
                    sourceNode && sourceNode.getName()
                )
            }
            return null
        }).filter(input => input)
        const nodeSourceInputs = nodeSource.getInputs()
        const nodeSourceOutput = nodeSource.getOutput()
        const size = NodeHelper.getNodeGUISize(node)
        transformComponent.setPosition(position)
        meshComponent.setSize(size)
        meshComponent.setShape(PrimitiveShape.NODE)
        nodeComponent.setTitle(NodeHelper.getNodeName(node))
        nodeComponent.setInputs(nodeSourceInputs.map(input => input.getAttrName()))
        nodeComponent.setType(ScriptHelper.getNodeType(node))
        nodeComponent.setNodeId(node.getId())
        nodeComponent.setNodeInputs(nodeInputs)
        if (nodeSourceOutput) {
            nodeComponent.setOutput(nodeSourceOutput.getAttrName())
        }
        if (!ArrayHelper.isEqual(
            actualNodeInputs,
            nodeInputs,
            (oldValue, newValue) =>  oldValue.getAttrValue() === newValue.getAttrValue())) {
            meshComponent.setGenerated(false)
        }
    }

    /**
     * @override
     */
    setup() {
        this.getComponent(GUIPropertyComponent).setRank(60)
    }

}