import UIUnitInstant from '../UIUnitInstant.js'
import UISliderHandleComponent from '../../../../../../component/internal/ui/slider/UISliderHandleComponent.js'

export default class UISliderHandleUnitInstant extends UIUnitInstant {

    /**
     * @override
     */
    instantiate() {
        super.instantiate()
        this.setName('UI Slider Handle')
        this.createComponent(UISliderHandleComponent)
    }

}