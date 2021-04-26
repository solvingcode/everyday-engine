import UnitInstant from '../../../UnitInstant.js'
import TransformComponent from '../../../../../component/internal/TransformComponent.js'
import MeshComponent from '../../../../../component/internal/MeshComponent.js'
import GUIPropertyComponent from '../../../../../component/internal/gui/property/GUIPropertyComponent.js'
import {PrimitiveShape} from '../../../../Unit.js'
import NodeComponent from '../../../../../component/internal/gui/node/NodeComponent.js'
import NodeHelper from '../../../../../utils/NodeHelper.js'
import ScriptHelper from '../../../../../utils/ScriptHelper.js'
import Size from '../../../../../pobject/Size.js'

export default class GraphNodeUnitInstant extends UnitInstant {

    /**
     * @param {Vector} position
     * @param {ANode} node
     */
    instantiate(position, node) {
        this.createComponent(NodeComponent)
        const transformComponent = this.getComponent(TransformComponent)
        const meshComponent = this.getComponent(MeshComponent)
        const nodeComponent = this.getComponent(NodeComponent)
        const nodeSource = NodeHelper.getSourceNode(node)
        const nodeSourceInputs = nodeSource.getInputs()
        const nodeSourceOutput = nodeSource.getOutput()
        const fontSize = 12
        const padding = 10
        const fontSizeRatio = 1.5
        const sizeInput = 10
        const width = node.getName().length * fontSize / fontSizeRatio
        const height = (nodeSourceInputs.length + 1) * (sizeInput + padding * 2) + (fontSize + padding * 2)
        const size = new Size({width, height})
        transformComponent.setPosition(position)
        meshComponent.setSize(size)
        meshComponent.setShape(PrimitiveShape.NODE)
        nodeComponent.setTitle(node.getName())
        nodeComponent.setInputs(nodeSourceInputs.map(input => input.getAttrName()))
        nodeComponent.setType(ScriptHelper.getNodeType(node))
        if(nodeSourceOutput){
            nodeComponent.setOutput(nodeSourceOutput.getAttrName())
        }
    }

    /**
     * @override
     */
    setup() {
        this.getComponent(GUIPropertyComponent).setRank(60)
    }

}