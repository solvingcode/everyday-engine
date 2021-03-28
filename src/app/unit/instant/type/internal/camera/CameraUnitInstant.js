import UnitInstant from '../../../UnitInstant.js'
import MeshComponent from '../../../../../component/MeshComponent.js'
import TransformComponent from '../../../../../component/TransformComponent.js'
import GUIPropertyComponent from '../../../../../component/gui/property/GUIPropertyComponent.js'
import Style from '../../../../../pobject/Style.js'
import {PrimitiveShape} from '../../../../Unit.js'
import CameraComponent from '../../../../../component/CameraComponent.js'

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
        propertyComponent.setRank(40)
        transformComponent.setPosition(position)
        meshComponent.setSize(size)
        meshComponent.setShape(PrimitiveShape.RECT_CROSS)
    }

}