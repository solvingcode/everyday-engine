import LightGlobalComponent from '../../../../../component/internal/LightGlobalComponent.js'
import UnitBehaviorInstant from '../../../UnitBehaviorInstant.js'

export default class LightGlobalUnitInstant extends UnitBehaviorInstant {

    /**
     * @override
     */
    instantiate() {
        this.setName('Light Global')
        this.createComponent(LightGlobalComponent)
    }

    /**
     * @override
     */
    setup() {
    }

}