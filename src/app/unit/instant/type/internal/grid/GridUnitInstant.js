import GUIGridComponent from '../../../../../component/internal/gui/grid/GUIGridComponent.js'
import {PrimitiveShape} from '../../../../Unit.js'
import UnitInstant from '../../../UnitInstant.js'
import TransformComponent from '../../../../../component/internal/TransformComponent.js'
import MeshComponent from '../../../../../component/internal/MeshComponent.js'
import GUIPropertyComponent from '../../../../../component/internal/gui/property/GUIPropertyComponent.js'
import GUIPendingComponent from '../../../../../component/internal/gui/GUIPendingComponent.js'
import Vector from '../../../../../utils/Vector.js'
import Style from '../../../../../pobject/Style.js'
import StyleComponent from '../../../../../component/internal/StyleComponent.js'
import TransformHelper from '../../../../../utils/TransformHelper.js'

export default class GridUnitInstant extends UnitInstant {

    /**
     * @param {Vector} position
     * @param {Size} size
     */
    instantiate(position, size) {
        this.createComponent(GUIGridComponent)
        this.createComponent(GUIPendingComponent)
        const transformComponent = this.getComponent(TransformComponent)
        const meshComponent = this.getComponent(MeshComponent)
        transformComponent.setPosition(new Vector(_.cloneDeep(position)))
        meshComponent.setShape(PrimitiveShape.GRID)
        const style = new Style()
        style.setColor('#3e3e3e')
        this.getComponent(StyleComponent).setStyle(style)
        this.getComponent(MeshComponent).setStyle(style)
        transformComponent.setScale(TransformHelper.getScaleFromSize(size))
    }

    /**
     * @override
     */
    setup() {
        this.getComponent(GUIPropertyComponent).setRank(100)
    }

}