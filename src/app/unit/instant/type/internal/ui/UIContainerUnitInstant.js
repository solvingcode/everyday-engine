import UIContainerComponent from '../../../../../component/internal/ui/UIContainerComponent.js'
import TransformUnit from '../../../../type/TransformUnit.js'
import UIElementComponent from '../../../../../component/internal/ui/UIElementComponent.js'

export default class UIContainerUnitInstant extends TransformUnit {

    /**
     * @override
     */
    instantiate() {
        this.setName('UI Container')
        this.createComponent(UIElementComponent)
        this.createComponent(UIContainerComponent)
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