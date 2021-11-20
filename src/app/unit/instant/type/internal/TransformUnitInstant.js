import MeshUnitInstant from '../../MeshUnitInstant.js'
import TransformComponent from '../../../../component/internal/TransformComponent.js'
import MeshComponent from '../../../../component/internal/MeshComponent.js'
import GUIPendingComponent from '../../../../component/internal/gui/GUIPendingComponent.js'
import StyleComponent from '../../../../component/internal/StyleComponent.js'
import SystemError from '../../../../exception/type/SystemError.js'

export default class TransformUnitInstant extends MeshUnitInstant {

    /**
     * @param {Class} moveComponentClass
     * @param {Vector} localScale
     * @param {StyleUtil} style
     * @param {string} shape
     * @param {Vector} localPosition
     */
    instantiate(moveComponentClass, localScale, style, shape, localPosition) {
        this.createComponent(moveComponentClass)
        this.createComponent(GUIPendingComponent)
        const transformComponent = this.getComponent(TransformComponent)
        const meshComponent = this.getComponent(MeshComponent)
        transformComponent.setLocalPosition(_.cloneDeep(localPosition))
        transformComponent.setLocalScale(localScale)
        meshComponent.setShape(shape)
        this.getComponent(StyleComponent).setStyle(style)
        this.getComponent(MeshComponent).setStyle(style)
    }

    /**
     * @abstract
     * @param {Vector} position
     * @param {Size} childSize
     * @param {Size} parentSize
     * @return {Vector}
     */
    getTransformPosition(position, childSize, parentSize){
        throw new SystemError(`${this.constructor.name}.getTransformPosition must be implemented`)
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
        return 100070
    }

}