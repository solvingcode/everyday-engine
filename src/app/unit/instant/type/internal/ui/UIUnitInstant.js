import GUIPropertyComponent from '../../../../../component/internal/gui/property/GUIPropertyComponent.js'
import UIElementComponent from '../../../../../component/internal/ui/UIElementComponent.js'
import UnitInstant from '../../../UnitInstant.js'
import UITransformComponent from '../../../../../component/internal/ui/UITransformComponent.js'

export default class UIUnitInstant extends UnitInstant {

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