import UnitInstant from '../../../UnitInstant.js'
import TransformComponent from '../../../../../component/internal/TransformComponent.js'
import MeshComponent from '../../../../../component/internal/MeshComponent.js'
import GUIPropertyComponent from '../../../../../component/internal/gui/property/GUIPropertyComponent.js'
import {PrimitiveShape} from '../../../../Unit.js'
import NodeInputComponent from '../../../../../component/internal/gui/node/NodeInputComponent.js'
import Style from '../../../../../pobject/Style.js'
import StyleComponent from '../../../../../component/internal/StyleComponent.js'
import GeometryHelper from '../../../../../utils/GeometryHelper.js'

export default class GraphEdgeUnitInstant extends UnitInstant {

    /**
     * @param {AScript} script
     * @param {NodeInput} nodeInput
     */
    instantiate(script, nodeInput) {
        this.createComponent(NodeInputComponent)
        this.update(script, nodeInput)
    }

    /**
     * @param {AScript} script
     * @param {NodeInput} nodeInput
     */
    update(script, nodeInput){
        const transformComponent = this.getComponent(TransformComponent)
        const meshComponent = this.getComponent(MeshComponent)
        const nodeInputComponent = this.getComponent(NodeInputComponent)
        const styleComponent = this.getComponent(StyleComponent)

        const sourceNode = script.findNodeById(nodeInput.getSourceNodeId())
        const targetNode = script.findNodeById(nodeInput.getNodeId())
        const sourcePosition = sourceNode.getPosition()
        const targetPosition = targetNode.getPosition()

        const {position, size, vertices} = GeometryHelper.getRectByDistance(sourcePosition, targetPosition)
        const style = new Style()
        style.setColor('#FFFFFF')
        style.setBorderSize(3)

        nodeInputComponent.setNodeInputId(nodeInput.getId())
        styleComponent.setStyle(style)
        transformComponent.setPosition(position)
        meshComponent.setShape(PrimitiveShape.LINE)
        meshComponent.setShapeVertices(vertices)
        meshComponent.setSize(size)
        meshComponent.setGenerated(false)
    }

    /**
     * @override
     */
    setup() {
        this.getComponent(GUIPropertyComponent).setRank(60)
    }

}