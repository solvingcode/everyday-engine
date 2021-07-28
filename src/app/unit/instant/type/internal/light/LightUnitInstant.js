import UnitInstant from '../../../UnitInstant.js'
import MeshComponent from '../../../../../component/internal/MeshComponent.js'
import TransformComponent from '../../../../../component/internal/TransformComponent.js'
import GUIPropertyComponent from '../../../../../component/internal/gui/property/GUIPropertyComponent.js'
import Style from '../../../../../pobject/Style.js'
import {PrimitiveShape} from '../../../../Unit.js'
import StyleComponent from '../../../../../component/internal/StyleComponent.js'
import LightPointComponent from '../../../../../component/internal/LightPointComponent.js'
import ClientError from '../../../../../exception/type/ClientError.js'

export default class LightUnitInstant extends UnitInstant {

    /**
     * @override
     * @param {Vector} position
     * @param {Size} size
     * @param {string} type
     */
    instantiate(position, size, type) {
        this.setName('Light')
        const style = new Style()
        style.setColor('#e5fc14')
        style.setBorderSize(1)
        if (type === PrimitiveShape.LIGHT_POINT) {
            this.createComponent(LightPointComponent)
        } else {
            throw new ClientError(`${this.constructor.name}: Light type "${type}" not supported`)
        }
        const meshComponent = this.getComponent(MeshComponent)
        const transformComponent = this.getComponent(TransformComponent)
        const styleComponent = this.getComponent(StyleComponent)
        styleComponent.setStyle(style)
        transformComponent.setPosition(position)
        meshComponent.setSize(size)
        meshComponent.setShape(type)
    }

    /**
     * @override
     */
    setup() {
        this.getComponent(GUIPropertyComponent).setRank(40)
    }

}