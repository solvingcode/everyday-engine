import UnitInstant from '../../../UnitInstant.js'
import MeshComponent from '../../../../../component/internal/MeshComponent.js'
import TransformComponent from '../../../../../component/internal/TransformComponent.js'
import GUIPropertyComponent from '../../../../../component/internal/gui/property/GUIPropertyComponent.js'
import Style from '../../../../../pobject/Style.js'
import {PrimitiveShape} from '../../../../Unit.js'
import CameraComponent from '../../../../../component/internal/CameraComponent.js'

export default class CameraUnitInstant extends UnitInstant {

    /**
     * @override
     * @param {Vector} position
     * @param {Size} size
     */
    instantiate(position, size) {
        this.setName('Camera')
        const style = new Style()
        style.setColor('#AAAAAA')
        style.setBorderSize(3)
        this.createComponent(CameraComponent)
        const meshComponent = this.getComponent(MeshComponent)
        const transformComponent = this.getComponent(TransformComponent)
        const propertyComponent = this.getComponent(GUIPropertyComponent)
        propertyComponent.setStyle(style)
        transformComponent.setPosition(position)
        meshComponent.setSize(size)
        meshComponent.setShape(PrimitiveShape.RECT_CROSS)
    }

    /**
     * @override
     */
    setup() {
        this.getComponent(GUIPropertyComponent).setRank(40)
    }

}