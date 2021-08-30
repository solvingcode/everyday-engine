import UnitInstant from '../../../UnitInstant.js'
import TransformComponent from '../../../../../component/internal/TransformComponent.js'
import MeshComponent from '../../../../../component/internal/MeshComponent.js'
import GUIPropertyComponent from '../../../../../component/internal/gui/property/GUIPropertyComponent.js'
import {PrimitiveShape} from '../../../../Unit.js'
import NodeComponent from '../../../../../component/internal/gui/node/NodeComponent.js'
import NodeHelper from '../../../../../utils/NodeHelper.js'
import ScriptHelper from '../../../../../utils/ScriptHelper.js'
import ArrayHelper from '../../../../../utils/ArrayHelper.js'
import TransformHelper from '../../../../../utils/TransformHelper.js'

export default class GraphNodeUnitInstant extends UnitInstant {

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
        const nodeInputs = NodeHelper.getNodeGUIInputs(node, script, world)
        const nodeSourceOutput = nodeSource.getOutput()
        const size = NodeHelper.getNodeGUISize(node, script, world)
        transformComponent.setPosition(position)
        transformComponent.setScale(TransformHelper.getScaleFromSize(size))
        meshComponent.setShape(PrimitiveShape.NODE)
        nodeComponent.setTitle(NodeHelper.getNodeName(node, world))
        nodeComponent.setInputs(nodeInputs)
        nodeComponent.setType(ScriptHelper.getNodeType(node))
        nodeComponent.setNodeId(node.getId())
        if (nodeSourceOutput) {
            nodeComponent.setOutput(nodeSourceOutput.getAttrName())
        }
        if (!ArrayHelper.isEqual(actualNodeInputs, nodeInputs)) {
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