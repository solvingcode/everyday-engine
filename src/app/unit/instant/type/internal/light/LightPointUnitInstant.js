import MeshUnitInstant from '../../../MeshUnitInstant.js'
import MeshComponent from '../../../../../component/internal/MeshComponent.js'
import TransformComponent from '../../../../../component/internal/TransformComponent.js'
import Style from '../../../../../pobject/Style.js'
import {PrimitiveShape} from '../../../../Unit.js'
import StyleComponent from '../../../../../component/internal/StyleComponent.js'
import LightPointComponent from '../../../../../component/internal/LightPointComponent.js'
import ClientError from '../../../../../exception/type/ClientError.js'
import TransformHelper from '../../../../../utils/TransformHelper.js'

export default class LightPointUnitInstant extends MeshUnitInstant {

    /**
     * @override
     * @param {Vector} position
     * @param {Size} size
     * @param {string} type
     */
    instantiate(position, size, type) {
        this.setName('Light Point')
        const style = new Style()
        style.setColor('#a5af4b')
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
        transformComponent.setLocalPosition(position)
        transformComponent.setLocalScale(TransformHelper.getScaleFromSize(size))
        meshComponent.setShape(type)
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
        return 100040
    }

}