import UnitInstant from '../../../UnitInstant.js'
import TransformComponent from '../../../../../component/internal/TransformComponent.js'
import MeshComponent from '../../../../../component/internal/MeshComponent.js'
import GUIPropertyComponent from '../../../../../component/internal/gui/property/GUIPropertyComponent.js'
import StyleComponent from '../../../../../component/internal/StyleComponent.js'

export default class GraphNodeUnitInstant extends UnitInstant {

    /**
     * @param {Vector} position
     * @param {Size} size
     * @param {Style} style
     */
    instantiate(position, size, style) {
        const transformComponent = this.getComponent(TransformComponent)
        const meshComponent = this.getComponent(MeshComponent)
        const styleComponent = this.getComponent(StyleComponent)
        transformComponent.setPosition(position)
        meshComponent.setSize(size)
        styleComponent.setStyle(style)
    }

    /**
     * @override
     */
    setup() {
        this.getComponent(GUIPropertyComponent).setRank(60)
    }

}