import UIImageComponent from '../../../../../component/internal/ui/UIImageComponent.js'
import UnitInstant from '../../../UnitInstant.js'
import GUIPropertyComponent from '../../../../../component/internal/gui/property/GUIPropertyComponent.js'
import UIComponent from '../../../../../component/internal/ui/UIComponent.js'

export default class UIImageUnitInstant extends UnitInstant {

    /**
     * @override
     */
    instantiate() {
        this.setName('UI Image')
        this.createComponent(UIComponent)
        this.createComponent(UIImageComponent)
    }

    /**
     * @override
     */
    setup() {
        this.getComponent(GUIPropertyComponent).setRank(60)
    }

}