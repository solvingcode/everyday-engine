import MeshUnitInstant from '../../../MeshUnitInstant.js'
import TransformComponent from '../../../../../component/internal/TransformComponent.js'
import MeshComponent from '../../../../../component/internal/MeshComponent.js'
import GUIPendingComponent from '../../../../../component/internal/gui/GUIPendingComponent.js'
import StyleComponent from '../../../../../component/internal/StyleComponent.js'
import SystemError from '../../../../../exception/type/SystemError.js'
import Style from '../../../../../pobject/Style.js'
import Vector from '../../../../../utils/Vector.js'
import TransformHelper from '../../../../../utils/TransformHelper.js'

export default class TransformUnitInstant extends MeshUnitInstant {

    /**
     * @param {Class} moveComponentClass
     * @param {Vector} parentScale
     * @param {string} shape
     * @param {Vector} origLocalPosition
     */
    instantiate(moveComponentClass, parentScale, shape, origLocalPosition) {
        this.createComponent(moveComponentClass)
        this.createComponent(GUIPendingComponent)
        const meshComponent = this.getComponent(MeshComponent)
        const style = new Style()
        style.setColor(this.getColor())
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
    getTransformPosition(position, childSize, parentSize) {
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

    /**
     * @return {number}
     */
    getBorderSize() {
        throw new SystemError(`${this.constructor.name}.getBorderSize must be implemented`)
    }

    /**
     * @return {string}
     */
    getColor() {
        throw new SystemError(`${this.constructor.name}.getColor must be implemented`)
    }

    /**
     * @return {Vector}
     */
    getChildScale() {
        throw new SystemError(`${this.constructor.name}.getChildScale must be implemented`)
    }

    /**
     * @override
     * @param {Camera} camera
     * @param {Vector} parentScale
     * @param {Vector} origLocalPosition
     */
    update(camera, parentScale, origLocalPosition) {
        const style = this.getComponent(StyleComponent).getStyle()
        const transformComponent = this.getComponent(TransformComponent)
        const actualBorderSize = style.getBorderSize()
        const actualLocalScale = transformComponent.getLocalScale()
        const actualLocalPosition = transformComponent.getLocalPosition()
        const scaleChildScale = camera.fromCameraScale(this.getChildScale())
        const localScale = Vector.linearDivide(scaleChildScale, parentScale)
        const localPosition = this.getTransformPosition(origLocalPosition,
            TransformHelper.getSizeFromScale(scaleChildScale),
            TransformHelper.getSizeFromScale(parentScale))
        const borderSize = camera.fromScaleNumber(this.getBorderSize())

        if (borderSize !== actualBorderSize ||
            !_.isEqual(actualLocalScale, localScale) ||
            !_.isEqual(actualLocalPosition, localPosition)) {
            style.setBorderSize(borderSize)
            transformComponent.setLocalScale(localScale)
            transformComponent.setLocalPosition(localPosition)
            this.getComponent(MeshComponent).setGenerated(false)
        }
    }

}