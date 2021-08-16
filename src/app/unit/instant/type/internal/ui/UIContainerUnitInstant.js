import UIContainerComponent from '../../../../../component/internal/ui/UIContainerComponent.js'
import TransformUnit from '../../../../type/TransformUnit.js'
import GUIPropertyComponent from '../../../../../component/internal/gui/property/GUIPropertyComponent.js'

export default class UIContainerUnitInstant extends TransformUnit {

    /**
     * @override
     */
    instantiate() {
        this.setName('UI Container')
        this.createComponent(UIContainerComponent)
    }

    /**
     * @override
     */
    setup() {
        this.getComponent(GUIPropertyComponent).setRank(60)
    }

}