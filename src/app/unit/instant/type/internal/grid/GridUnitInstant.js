import GUIGridComponent from '../../../../../component/internal/gui/grid/GUIGridComponent.js'
import {PrimitiveShape} from '../../../../Unit.js'
import MeshUnitInstant from '../../../MeshUnitInstant.js'
import TransformComponent from '../../../../../component/internal/TransformComponent.js'
import MeshComponent from '../../../../../component/internal/MeshComponent.js'
import GUIPendingComponent from '../../../../../component/internal/gui/GUIPendingComponent.js'
import Vector from '../../../../../utils/Vector.js'
import Style from '../../../../../pobject/Style.js'
import StyleComponent from '../../../../../component/internal/StyleComponent.js'
import TransformHelper from '../../../../../utils/TransformHelper.js'

export default class GridUnitInstant extends MeshUnitInstant {

    /**
     * @param {Vector} position
     * @param {Size} size
     * @param {Size} cellSize
     * @param {Size} cellSizeScaled
     */
    instantiate(position, size, cellSize, cellSizeScaled) {
        this.createComponent(GUIGridComponent)
        this.createComponent(GUIPendingComponent)
        const transformComponent = this.getComponent(TransformComponent)
        const meshComponent = this.getComponent(MeshComponent)
        transformComponent.setLocalPosition(new Vector(_.cloneDeep(position)))
        meshComponent.setShape(PrimitiveShape.GRID)
        const style = new Style()
        style.setColor('#474747')
        style.setBorderSize(1)
        this.getComponent(StyleComponent).setStyle(style)
        this.getComponent(GUIGridComponent).setCellSize(cellSize)
        this.getComponent(GUIGridComponent).setCellSizeScaled(cellSizeScaled)
        transformComponent.setLocalScale(TransformHelper.getScaleFromSize(size))
    }

    /**
     * @override
     * @param {Camera} camera
     */
    update(camera) {
        const style = this.getComponent(StyleComponent).getStyle()
        const actualBorderSize = style.getBorderSize()
        const borderSize = camera.fromScaleNumber(1)
        if (borderSize !== actualBorderSize) {
            style.setBorderSize(borderSize)
            this.getComponent(MeshComponent).setGenerated(false)
        }
    }

    /**
     * @override
     */
    setup() {
    }

}