import UnitInstant from '../../UnitInstant.js'
import Vector from '../../../../utils/Vector.js'
import TransformComponent from '../../../../component/internal/TransformComponent.js'
import MeshComponent from '../../../../component/internal/MeshComponent.js'
import GUIPendingComponent from '../../../../component/internal/gui/GUIPendingComponent.js'
import GUIPropertyComponent from '../../../../component/internal/gui/property/GUIPropertyComponent.js'
import StyleComponent from '../../../../component/internal/StyleComponent.js'
import TransformHelper from '../../../../utils/TransformHelper.js'

export default class TransformUnitInstant extends UnitInstant {

    /**
     * @param {Class} moveComponentClass
     * @param {Size} size
     * @param {StyleUtil} style
     * @param {string} shape
     * @param {Vector} position
     */
    instantiate(moveComponentClass, size, style, shape, position) {
        this.createComponent(moveComponentClass)
        this.createComponent(GUIPendingComponent)
        const transformComponent = this.getComponent(TransformComponent)
        const meshComponent = this.getComponent(MeshComponent)
        transformComponent.setPosition(new Vector(_.cloneDeep(position)))
        transformComponent.setScale(TransformHelper.getScaleFromSize(size))
        meshComponent.setShape(shape)
        this.getComponent(StyleComponent).setStyle(style)
        this.getComponent(MeshComponent).setStyle(style)
    }

    /**
     * @override
     */
    setup() {
        this.getComponent(GUIPropertyComponent).setRank(70)
    }

}