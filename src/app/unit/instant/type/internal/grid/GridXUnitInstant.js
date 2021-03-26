import UnitInstant from '../../../UnitInstant.js'
import MeshComponent from '../../../../../component/MeshComponent.js'
import GUIPendingComponent from '../../../../../component/gui/GUIPendingComponent.js'
import Vector from '../../../../../utils/Vector.js'
import GUIGridXComponent from '../../../../../component/gui/grid/GUIGridXComponent.js'
import {PrimitiveShape} from '../../../../Unit.js'
import TransformComponent from '../../../../../component/TransformComponent.js'
import Style from '../../../../../pobject/Style.js'

export default class GridXUnitInstant extends UnitInstant {

    /**
     * @param {Vector} position
     * @param {Size} size
     */
    instantiate(position, size) {
        this.createComponent(GUIGridXComponent)
        this.createComponent(GUIPendingComponent)
        const transformComponent = this.getComponent(TransformComponent)
        const meshComponent = this.getComponent(MeshComponent)
        transformComponent.setPosition(new Vector(_.cloneDeep(position)))
        const style = new Style()
        style.setColor(position.getY() === 0 ? '#FF0000' : '#555555')
        style.setBorderSize(3)
        meshComponent.setShape(PrimitiveShape.LINE)
        meshComponent.setShapeVertices([new Vector(), new Vector({x: size.getWidth(), y: 0})])
        meshComponent.setSize(size)
        meshComponent.setStyle(style)
    }

}