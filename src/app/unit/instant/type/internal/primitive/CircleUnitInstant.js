import UnitInstant from '../../../UnitInstant.js'
import TransformComponent from '../../../../../component/internal/TransformComponent.js'
import MeshComponent from '../../../../../component/internal/MeshComponent.js'
import GUIPendingComponent from '../../../../../component/internal/gui/GUIPendingComponent.js'
import Style from '../../../../../pobject/Style.js'
import GUIPropertyComponent from '../../../../../component/internal/gui/property/GUIPropertyComponent.js'
import {PrimitiveShape} from '../../../../Unit.js'

export default class CircleUnitInstant extends UnitInstant {

    /**
     * @param {Vector} position
     * @param {Size} size
     * @param {Style} style
     */
    instantiate(position, size, style= new Style()) {
        this.createComponent(GUIPendingComponent)
        const transformComponent = this.getComponent(TransformComponent)
        const meshComponent = this.getComponent(MeshComponent)
        transformComponent.setPosition(position)
        meshComponent.setSize(size)
        meshComponent.setShape(PrimitiveShape.CIRCLE)
        meshComponent.setStyle(style)
    }

    /**
     * @override
     */
    setup() {
        this.getComponent(GUIPropertyComponent).setRank(60)
    }

}