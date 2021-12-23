import MeshUnitInstant from '../../../MeshUnitInstant.js'
import TransformComponent from '../../../../../component/internal/TransformComponent.js'
import MeshComponent from '../../../../../component/internal/MeshComponent.js'
import {PrimitiveShape} from '../../../../Unit.js'
import NodeInputComponent from '../../../../../component/internal/gui/node/NodeInputComponent.js'
import Style from '../../../../../pobject/Style.js'
import StyleComponent from '../../../../../component/internal/StyleComponent.js'
import GeometryHelper from '../../../../../utils/GeometryHelper.js'
import NodeHelper from '../../../../../utils/NodeHelper.js'
import Vector from '../../../../../utils/Vector.js'
import TransformHelper from '../../../../../utils/TransformHelper.js'
import Color from '../../../../../utils/Color.js'

export default class GraphEdgeUnitInstant extends MeshUnitInstant {

    /**
     * @param {AScriptFunction} script
     * @param {NodeInput} nodeInput
     * @param {World} world
     */
    instantiate(script, nodeInput, world) {
        this.createComponent(NodeInputComponent)
        this.update(script, nodeInput, world)
    }

    /**
     * @param {AScriptFunction} script
     * @param {World} world
     * @param {NodeInput} nodeInput
     */
    update(script, nodeInput, world) {
        const transformComponent = this.getComponent(TransformComponent)
        const meshComponent = this.getComponent(MeshComponent)
        const nodeInputComponent = this.getComponent(NodeInputComponent)
        const styleComponent = this.getComponent(StyleComponent)
        const sourceNode = script.findNodeById(nodeInput.getSourceNodeId())
        const targetNode = script.findNodeById(nodeInput.getNodeId())
        if (sourceNode && targetNode) {
            const targetSourceNode = NodeHelper.getSourceNode(targetNode, world)
            const targetNodeInputIndex = targetSourceNode.getInputs()
                .findIndex(input => input.getAttrName() === nodeInput.getTargetName())
            const sourceNodeInputIndex = !nodeInput.getSourceName() ? 0 : (1 - (!NodeHelper.hasBaseOutput(sourceNode.getType()) ? 1 : 0))
            const sourceNodeSize = NodeHelper.getNodeGUISize(sourceNode, script, world)
            const {position: sourceOutputPosition} = NodeHelper.getNodeGUIOutput(sourceNode.getType(), sourceNodeSize, sourceNodeInputIndex)
            const {position: targetInputPosition} = NodeHelper.getNodeGUIInput(sourceNode.getType(), targetNodeInputIndex)
            const {sizeInput} = NodeHelper.getNodeGUIProps(sourceNode.getType())
            const centerInputSize = new Vector({x: sizeInput / 2, y: sizeInput / 2})
            const sourcePosition = Vector.add(sourceNode.getPosition(), Vector.add(sourceOutputPosition, centerInputSize))
            const targetPosition = Vector.add(targetNode.getPosition(), Vector.add(targetInputPosition, centerInputSize))
            const {position, size, vertices} = GeometryHelper.getRectByDistance(sourcePosition, targetPosition)
            const {headColor} = NodeHelper.getNodeGUIProps(sourceNode.getType())
            const connectWidth = 80
            const connectHeight = 5
            size.setHeight(size.getHeight() + connectHeight * 2)
            size.setWidth(size.getWidth() + connectWidth * 2)
            position.setX(position.getX() - connectWidth)
            position.setY(position.getY() - connectHeight)
            vertices[0].setX(vertices[0].getX() + connectWidth)
            vertices[0].setY(vertices[0].getY() + connectHeight)
            vertices[1].setX(vertices[1].getX() + connectWidth)
            vertices[1].setY(vertices[1].getY() + connectHeight)
            const style = new Style()
            if (targetNode.isOrderConnection(nodeInput)) {
                style.setColor('#afafaf')
            } else {
                style.setColor(headColor ? Color.shadeColor(headColor, 100) : '#afafaf')
            }
            style.setBorderSize(2)
            style.setOpacity(1)

            nodeInputComponent.setNodeInput(nodeInput)
            styleComponent.setStyle(style)
            transformComponent.setLocalPosition(position)
            if (
                meshComponent.getShape() !== PrimitiveShape.EDGE ||
                !_.isEqual(meshComponent.getShapeVertices(), vertices) ||
                !_.isEqual(transformComponent.getLocalScale(), TransformHelper.getScaleFromSize(size))
            ) {
                meshComponent.setShape(PrimitiveShape.EDGE)
                meshComponent.setShapeVertices(vertices)
                transformComponent.setLocalScale(TransformHelper.getScaleFromSize(size))
                meshComponent.setGenerated(false)
            }
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
        return 100070
    }

}