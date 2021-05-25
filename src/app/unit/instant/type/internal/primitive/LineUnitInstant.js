import UnitInstant from '../../../UnitInstant.js'
import TransformComponent from '../../../../../component/internal/TransformComponent.js'
import MeshComponent from '../../../../../component/internal/MeshComponent.js'
import GUIPendingComponent from '../../../../../component/internal/gui/GUIPendingComponent.js'
import Style from '../../../../../pobject/Style.js'
import GUIPropertyComponent from '../../../../../component/internal/gui/property/GUIPropertyComponent.js'
import {PrimitiveShape} from '../../../../Unit.js'

export default class LineUnitInstant extends UnitInstant {

    /**
     * @param {Vector} position
     * @param {Size} size
     */
    instantiate(position, size) {
        this.createComponent(GUIPendingComponent)
        const transformComponent = this.getComponent(TransformComponent)
        const meshComponent = this.getComponent(MeshComponent)
        transformComponent.setPosition(position)
        meshComponent.setSize(size)
        meshComponent.setShape(PrimitiveShape.LINE)
        const style = new Style()
        style.setColor('#FFFFFF')
        style.setBorderSize(2)
        meshComponent.setStyle(style)
    }

    /**
     * @override
     */
    setup() {
        this.getComponent(GUIPropertyComponent).setRank(60)
    }

}