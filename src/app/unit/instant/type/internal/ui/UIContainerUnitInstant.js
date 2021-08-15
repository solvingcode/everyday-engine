import UnitBehaviorInstant from '../../../UnitBehaviorInstant.js'
import UIContainerComponent from '../../../../../component/internal/UIContainerComponent.js'

export default class UIContainerUnitInstant extends UnitBehaviorInstant {

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
    }

}