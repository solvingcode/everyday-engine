import GUIGridComponent from '../../../../../component/internal/gui/grid/GUIGridComponent.js'
import {PrimitiveShape} from '../../../../Unit.js'
import MeshUnitInstant from '../../../MeshUnitInstant.js'
import TransformComponent from '../../../../../component/internal/TransformComponent.js'
import MeshComponent from '../../../../../component/internal/MeshComponent.js'
import GUIPropertyComponent from '../../../../../component/internal/gui/property/GUIPropertyComponent.js'
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
        transformComponent.setPosition(new Vector(_.cloneDeep(position)))
        meshComponent.setShape(PrimitiveShape.GRID)
        const style = new Style()
        style.setColor('#474747')
        style.setBorderSize(1)
        this.getComponent(StyleComponent).setStyle(style)
        this.getComponent(GUIGridComponent).setCellSize(cellSize)
        this.getComponent(GUIGridComponent).setCellSizeScaled(cellSizeScaled)
        transformComponent.setScale(TransformHelper.getScaleFromSize(size))
    }

    /**
     * @override
     */
    setup() {
        this.getComponent(GUIPropertyComponent).setRank(60)
        this.getComponent(GUIPropertyComponent).setSelectable(false)
    }

}