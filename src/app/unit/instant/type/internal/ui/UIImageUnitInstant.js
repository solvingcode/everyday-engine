import UIImageComponent from '../../../../../component/internal/ui/UIImageComponent.js'
import UnitInstant from '../../../UnitInstant.js'
import GUIPropertyComponent from '../../../../../component/internal/gui/property/GUIPropertyComponent.js'

export default class UIImageUnitInstant extends UnitInstant {

    /**
     * @override
     */
    instantiate() {
        this.setName('UI Image')
        this.createComponent(UIImageComponent)
    }

    /**
     * @override
     */
    setup() {
        this.getComponent(GUIPropertyComponent).setRank(60)
    }

}