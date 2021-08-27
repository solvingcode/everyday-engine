import TransformUnit from '../../../../type/TransformUnit.js'
import GUIPropertyComponent from '../../../../../component/internal/gui/property/GUIPropertyComponent.js'
import UIElementComponent from '../../../../../component/internal/ui/UIElementComponent.js'

export default class UIEmptyUnitInstant extends TransformUnit {

    /**
     * @override
     */
    instantiate() {
        this.setName('UI Element')
        this.createComponent(UIElementComponent)
    }

    /**
     * @override
     */
    setup() {
        this.getComponent(GUIPropertyComponent).setRank(60)
    }

}