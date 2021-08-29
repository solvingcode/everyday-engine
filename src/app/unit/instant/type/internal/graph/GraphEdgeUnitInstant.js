import UnitInstant from '../../../UnitInstant.js'
import TransformComponent from '../../../../../component/internal/TransformComponent.js'
import MeshComponent from '../../../../../component/internal/MeshComponent.js'
import GUIPropertyComponent from '../../../../../component/internal/gui/property/GUIPropertyComponent.js'
import {PrimitiveShape} from '../../../../Unit.js'
import NodeInputComponent from '../../../../../component/internal/gui/node/NodeInputComponent.js'
import Style from '../../../../../pobject/Style.js'
import StyleComponent from '../../../../../component/internal/StyleComponent.js'
import GeometryHelper from '../../../../../utils/GeometryHelper.js'
import NodeHelper from '../../../../../utils/NodeHelper.js'
import Vector from '../../../../../utils/Vector.js'
import ArrayHelper from '../../../../../utils/ArrayHelper.js'
import TransformHelper from '../../../../../utils/TransformHelper.js'

export default class GraphEdgeUnitInstant extends UnitInstant {

    /**
     * @param {AScriptFunction} script
     * @param {NodeInput} nodeInput
     */
    instantiate(script, nodeInput) {
        this.createComponent(NodeInputComponent)
        this.update(script, nodeInput)
    }

    /**
     * @param {AScriptFunction} script
     * @param {NodeInput} nodeInput
     */
    update(script, nodeInput) {
        const transformComponent = this.getComponent(TransformComponent)
        const meshComponent = this.getComponent(MeshComponent)
        const nodeInputComponent = this.getComponent(NodeInputComponent)
        const styleComponent = this.getComponent(StyleComponent)
        const sourceNode = script.findNodeById(nodeInput.getSourceNodeId())
        const targetNode = script.findNodeById(nodeInput.getNodeId())
        if (sourceNode && targetNode) {
            const targetSourceNode = NodeHelper.getSourceNode(targetNode)
            const targetNodeInputIndex = targetSourceNode.getInputs()
                .findIndex(input => input.getAttrName() === nodeInput.getTargetName())
            const sourceNodeSize = NodeHelper.getNodeGUISize(sourceNode, script)
            const {position: sourceOutputPosition} = NodeHelper.getNodeGUIOutput(sourceNode.getType(), sourceNodeSize)
            const {position: targetInputPosition} = NodeHelper.getNodeGUIInput(sourceNode.getType(), targetNodeInputIndex)
            const {sizeInput} = NodeHelper.getNodeGUIProps(sourceNode.getType())
            const centerInputSize = new Vector({x: sizeInput / 2, y: sizeInput / 2})
            const sourcePosition = Vector.add(sourceNode.getPosition(), Vector.add(sourceOutputPosition, centerInputSize))
            const targetPosition = Vector.add(targetNode.getPosition(), Vector.add(targetInputPosition, centerInputSize))
            const {position, size, vertices} = GeometryHelper.getRectByDistance(sourcePosition, targetPosition)
            const style = new Style()
            style.setColor('#c4c4c4')
            style.setBorderSize(2)

            nodeInputComponent.setNodeInputId(nodeInput.getId())
            styleComponent.setStyle(style)
            transformComponent.setPosition(position)
            if (
                meshComponent.getShape() !== PrimitiveShape.LINE ||
                !ArrayHelper.isEqual(meshComponent.getShapeVertices(), vertices) ||
                meshComponent.getSize().getWidth() !== size.getWidth() ||
                meshComponent.getSize().getHeight() !== size.getHeight()
            ) {
                meshComponent.setShape(PrimitiveShape.LINE)
                meshComponent.setShapeVertices(vertices)
                transformComponent.setScale(TransformHelper.getScaleFromSize(size))
                meshComponent.setGenerated(false)
            }
        }
    }

    /**
     * @override
     */
    setup() {
        this.getComponent(GUIPropertyComponent).setRank(60)
    }

}