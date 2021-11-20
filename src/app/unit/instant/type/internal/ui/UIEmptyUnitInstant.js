import TransformUnit from '../../../../type/TransformUnit.js'
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
    }

    /**
     * @override
     */
    getRank(world) {
        return 100060
    }

}