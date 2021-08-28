import TransformUnit from '../../../../../type/TransformUnit.js'
import UIElementComponent from '../../../../../../component/internal/ui/UIElementComponent.js'
import UISliderComponent from '../../../../../../component/internal/ui/slider/UISliderComponent.js'

export default class UISliderUnitInstant extends TransformUnit {

    /**
     * @override
     */
    instantiate() {
        this.setName('UI Slider')
        this.createComponent(UIElementComponent)
        this.createComponent(UISliderComponent)
    }

}