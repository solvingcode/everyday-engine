import UIUnitInstant from '../UIUnitInstant.js'
import UISliderFillComponent from '../../../../../../component/internal/ui/slider/UISliderFillComponent.js'

export default class UISliderFillUnitInstant extends UIUnitInstant {

    /**
     * @override
     */
    instantiate() {
        super.instantiate()
        this.setName('UI Slider Fill')
        this.createComponent(UISliderFillComponent)
    }

}