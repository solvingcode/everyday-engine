import GUIGridComponent from '../../../../../component/internal/gui/grid/GUIGridComponent.js'
import UnitInstant from '../../../UnitInstant.js'
import TransformComponent from '../../../../../component/internal/TransformComponent.js'
import MeshComponent from '../../../../../component/internal/MeshComponent.js'
import GUIPendingComponent from '../../../../../component/internal/gui/GUIPendingComponent.js'
import Style from '../../../../../pobject/Style.js'
import GUIPropertyComponent from '../../../../../component/internal/gui/property/GUIPropertyComponent.js'

export default class SelectionUnitInstant extends UnitInstant {

    /**
     * @param {Vector} position
     * @param {Size} size
     */
    instantiate(position, size) {
        this.createComponent(GUIGridComponent)
        this.createComponent(GUIPendingComponent)
        const transformComponent = this.getComponent(TransformComponent)
        const meshComponent = this.getComponent(MeshComponent)
        transformComponent.setPosition(position)
        meshComponent.setSize(size)
        const style = new Style()
        style.setColor('#FFFFFF')
        style.setBorderSize(3)
        meshComponent.setStyle(style)
    }

    /**
     * @override
     */
    setup() {
        this.getComponent(GUIPropertyComponent).setRank(60)
    }

}