import UIUnitInstant from './UIUnitInstant.js'
import UIButtonComponent from '../../../../../component/internal/ui/UIButtonComponent.js'

export default class UIButtonUnitInstant extends UIUnitInstant {

    /**
     * @override
     */
    instantiate() {
        super.instantiate()
        this.setName('UI Button')
        this.createComponent(UIButtonComponent)
    }

}