import GUIPropertyComponent from '../../../../../component/internal/gui/property/GUIPropertyComponent.js'
import UIElementComponent from '../../../../../component/internal/ui/UIElementComponent.js'
import MeshUnitInstant from '../../../MeshUnitInstant.js'
import UITransformComponent from '../../../../../component/internal/ui/UITransformComponent.js'

export default class UIUnitInstant extends MeshUnitInstant {

    /**
     * @override
     */
    instantiate() {
        this.createComponent(UIElementComponent)
        this.createComponent(UITransformComponent)
    }

    /**
     * @override
     */
    setup() {
        this.getComponent(GUIPropertyComponent).setRank(60)
    }

}