import RectUnitInstant from '../primitive/RectUnitInstant.js'
import StyleComponent from '../../../../../component/internal/StyleComponent.js'
import MeshComponent from '../../../../../component/internal/MeshComponent.js'

export default class RectSelectorUnitInstant extends RectUnitInstant {

    /**
     * @override
     * @param {Camera} camera
     */
    update(camera) {
        const style = this.getComponent(StyleComponent).getStyle()
        const actualBorderSize = style.getBorderSize()
        const borderSize = camera.fromScaleNumber(2)
        if (borderSize !== actualBorderSize) {
            style.setBorderSize(borderSize)
            this.getComponent(MeshComponent).setGenerated(false)
        }
    }

    /**
     * @override
     */
    getRank(world) {
        return 100070
    }

}