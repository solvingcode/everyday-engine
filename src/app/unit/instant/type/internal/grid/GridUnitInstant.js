import GUIGridComponent from '../../../../../component/gui/grid/GUIGridComponent.js'
import {PrimitiveShape} from '../../../../Unit.js'
import UnitInstant from '../../../UnitInstant.js'
import TransformComponent from '../../../../../component/TransformComponent.js'
import MeshComponent from '../../../../../component/MeshComponent.js'
import GUIPropertyComponent from '../../../../../component/gui/property/GUIPropertyComponent.js'
import GUIPendingComponent from '../../../../../component/gui/GUIPendingComponent.js'
import Vector from '../../../../../utils/Vector.js'
import Style from '../../../../../pobject/Style.js'

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
        this.getComponent(GUIPropertyComponent).setRank(0)
        this.getComponent(GUIPropertyComponent).setStyle(style)
        this.getComponent(MeshComponent).setStyle(style)
        this.getComponent(MeshComponent).setSize(size)
    }

}