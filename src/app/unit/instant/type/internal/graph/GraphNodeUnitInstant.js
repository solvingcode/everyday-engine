import MeshUnitInstant from '../../../MeshUnitInstant.js'
import TransformComponent from '../../../../../component/internal/TransformComponent.js'
import MeshComponent from '../../../../../component/internal/MeshComponent.js'
import {PrimitiveShape} from '../../../../Unit.js'
import NodeComponent from '../../../../../component/internal/gui/node/NodeComponent.js'
import NodeHelper from '../../../../../utils/NodeHelper.js'
import ScriptHelper from '../../../../../utils/ScriptHelper.js'
import TransformHelper from '../../../../../utils/TransformHelper.js'

export default class GraphNodeUnitInstant extends MeshUnitInstant {

    /**
     * @param {Vector} position
     * @param {ANode} node
     * @param {AScriptFunction} script
     * @param {World} world
     */
    instantiate(position, node, script, world) {
        this.createComponent(NodeComponent)
        this.update(position, node, script, world)
    }

    /**
     * @param {Vector} position
     * @param {ANode} node
     * @param {AScriptFunction} script
     * @param {World} world
     */
    update(position, node, script, world) {
        const transformComponent = this.getComponent(TransformComponent)
        const meshComponent = this.getComponent(MeshComponent)
        const nodeComponent = this.getComponent(NodeComponent)
        const nodeSource = NodeHelper.getSourceNode(node, world)
        const actualNodeInputs = nodeComponent.getInputs()
        const actualNodeOutputs = nodeComponent.getOutputs()
        const actualOutputConnected = nodeComponent.getOutputConnected()
        const actualBaseOutputConnected = nodeComponent.getBaseOutputConnected()
        const actualBaseInputConnected = nodeComponent.getBaseInputConnected()
        const actualInputConnections = nodeComponent.getInputConnections()
        const actualOutputConnections = nodeComponent.getOutputConnections()
        const actualInputColors = nodeComponent.getInputColors()
        const actualBaseInputColor = nodeComponent.getBaseInputColor()
        const nodeGUIInputs = NodeHelper.getNodeGUIInputs(node, script, world)
        const nodeGUIOutputs = NodeHelper.getNodeGUIOutputs(node, script, world)
        const nodeInputs = nodeGUIInputs.names
        const nodeInputConnections = nodeGUIInputs.connections
        const nodeOutputs = nodeGUIOutputs.names
        const nodeOutputConnections = nodeGUIOutputs.connections
        const nodeInputColors = nodeGUIInputs.colors
        const outputConnected = NodeHelper.isResultOutputConnected(node, script)
        const baseOutputConnected = NodeHelper.isBaseOutputConnected(node, script)
        const baseInputConnected = !!node.getBaseInput()
        const baseInputColor = NodeHelper.getNodeGUIBaseInputColor(script, node)
        const nodeSourceOutput = nodeSource.getOutput()
        const size = NodeHelper.getNodeGUISize(node, script, world)

        transformComponent.setLocalPosition(position)
        transformComponent.setLocalScale(TransformHelper.getScaleFromSize(size))

        meshComponent.setShape(PrimitiveShape.NODE)
        nodeComponent.setTitle(NodeHelper.getNodeName(node, world))
        nodeComponent.setInputs(nodeInputs)
        nodeComponent.setOutputs(nodeOutputs)
        nodeComponent.setInputConnections(nodeInputConnections)
        nodeComponent.setOutputConnections(nodeOutputConnections)
        nodeComponent.setOutputConnected(outputConnected)
        nodeComponent.setInputColors(nodeInputColors)
        nodeComponent.setBaseOutputConnected(baseOutputConnected)
        nodeComponent.setBaseInputConnected(baseInputConnected)
        nodeComponent.setBaseInputColor(baseInputColor)
        nodeComponent.setType(ScriptHelper.getNodeType(node))
        nodeComponent.setNode(node)

        if (nodeSourceOutput) {
            nodeComponent.setOutput(nodeSourceOutput.getAttrName())
        }
        if (
            !_.isEqual(actualNodeInputs, nodeInputs) ||
            !_.isEqual(actualNodeOutputs, nodeOutputs) ||
            !_.isEqual(actualOutputConnected, outputConnected) ||
            !_.isEqual(actualInputConnections, nodeInputConnections) ||
            !_.isEqual(actualOutputConnections, nodeOutputConnections) ||
            !_.isEqual(actualInputColors, nodeInputColors) ||
            !_.isEqual(actualBaseOutputConnected, baseOutputConnected) ||
            !_.isEqual(actualBaseInputConnected, baseInputConnected) ||
            !_.isEqual(actualBaseInputColor, baseInputColor)
        ) {
            meshComponent.setGenerated(false)
        }
    }

    /**
     * @override
     */
    setup() {
    }

    /**
     * @override
     */
    getRank(world) {
        return 100060
    }

}