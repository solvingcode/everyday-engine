import UnitInstant from '../../UnitInstant.js'
import Vector from '../../../../utils/Vector.js'
import TransformComponent from '../../../../component/internal/TransformComponent.js'
import MeshComponent from '../../../../component/internal/MeshComponent.js'
import GUIPendingComponent from '../../../../component/internal/gui/GUIPendingComponent.js'
import GUIPropertyComponent from '../../../../component/internal/gui/property/GUIPropertyComponent.js'

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
        meshComponent.setShape(shape)
        this.getComponent(GUIPropertyComponent).setStyle(style)
        this.getComponent(MeshComponent).setStyle(style)
        this.getComponent(MeshComponent).setSize(size)
    }

    /**
     * @override
     */
    setup() {
        this.getComponent(GUIPropertyComponent).setRank(50)
    }

}