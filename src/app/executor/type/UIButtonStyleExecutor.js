import ComponentExecutor from './ComponentExecutor.js'
import StyleComponent from '../../component/internal/StyleComponent.js'
import UIButtonComponent from '../../component/internal/ui/UIButtonComponent.js'

export default class UIButtonStyleExecutor extends ComponentExecutor {

    constructor() {
        super([UIButtonComponent, StyleComponent])
    }

    /**
     * @override
     */
    execute(unit, executionContext) {
        const styleComponent = unit.getComponent(StyleComponent)
        const uiButtonComponent = unit.getComponent(UIButtonComponent)
        const style = styleComponent.getStyle()
        if (uiButtonComponent.getDefaultColor() !== style.getFillColor() ||
            uiButtonComponent.getDefaultColorOpacity() !== style.getFillColorOpacity()) {
            style.setFillColor(uiButtonComponent.getDefaultColor())
            style.setFillColorOpacity(uiButtonComponent.getDefaultColorOpacity())
        }
    }

}