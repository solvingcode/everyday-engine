import MeshUnitInstant from '../../../MeshUnitInstant.js'
import MeshComponent from '../../../../../component/internal/MeshComponent.js'
import GUIPendingComponent from '../../../../../component/internal/gui/GUIPendingComponent.js'
import Vector from '../../../../../utils/Vector.js'
import {PrimitiveShape} from '../../../../Unit.js'
import TransformComponent from '../../../../../component/internal/TransformComponent.js'
import Style from '../../../../../pobject/Style.js'
import GUIGridYComponent from '../../../../../component/internal/gui/grid/GUIGridYComponent.js'
import TransformHelper from '../../../../../utils/TransformHelper.js'

export default class GridYUnitInstant extends MeshUnitInstant {

    /**
     * @param {Vector} position
     * @param {Size} size
     */
    instantiate(position, size) {
        this.createComponent(GUIGridYComponent)
        this.createComponent(GUIPendingComponent)
        const transformComponent = this.getComponent(TransformComponent)
        const meshComponent = this.getComponent(MeshComponent)
        transformComponent.setPosition(new Vector(_.cloneDeep(position)))
        const style = new Style()
        style.setColor(position.getX() === 0 ? '#0000FF' : '#555555')
        style.setBorderSize(3)
        meshComponent.setShape(PrimitiveShape.LINE)
        meshComponent.setShapeVertices([new Vector(), new Vector({x: 0, y: size.getHeight()})])
        transformComponent.setScale(TransformHelper.getScaleFromSize(size))
        meshComponent.setStyle(style)
    }

    /**
     * @override
     */
    setup() {
    }

}