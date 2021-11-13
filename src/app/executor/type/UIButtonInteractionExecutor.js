import ComponentExecutor from './ComponentExecutor.js'
import StyleComponent from '../../component/internal/StyleComponent.js'
import UIButtonComponent from '../../component/internal/ui/UIButtonComponent.js'
import World from '../../world/World.js'
import Window from '../../core/Window.js'
import UnitHelper from '../../utils/UnitHelper.js'
import {MouseButton} from '../../core/Mouse.js'
import UIContainerComponent from '../../component/internal/ui/UIContainerComponent.js'

export default class UIButtonInteractionExecutor extends ComponentExecutor {

    constructor() {
        super([UIButtonComponent, StyleComponent])
    }

    /**
     * @override
     */
    execute(unit, executionContext) {
        const world = World.get()
        const {unitIndex} = executionContext
        const {mouse} = Window.get()
        const styleComponent = unit.getComponent(StyleComponent)
        const uiButtonComponent = unit.getComponent(UIButtonComponent)
        let containerIntractable = false
        const uiContainer = UnitHelper.getUIContainer(world, unit)
        if (uiContainer) {
            containerIntractable = uiContainer.getComponent(UIContainerComponent).getIntractable()
        }
        if (containerIntractable) {
            const uiContainerComponent = uiContainer.getComponent(UIContainerComponent)
            const buttonIntractableIndex = uiContainerComponent.getButtonIntractableIndex()
            const style = styleComponent.getStyle()
            const isHoverUnit = UnitHelper.isInsideWindowPosition(world, unit, mouse.currentPosition)
            const isPressedUnit = UnitHelper.isInsideWindowPosition(world, unit, mouse.position)
            let fillColor = style.getFillColor()
            let fillColorOpacity = style.getFillColorOpacity()

            if (mouse.isButtonPressed(MouseButton.LEFT) && isPressedUnit) {
                fillColor = uiButtonComponent.getPressedColor()
                fillColorOpacity = uiButtonComponent.getPressedColorOpacity()
            } else if (isHoverUnit) {
                fillColor = uiButtonComponent.getHoverColor()
                fillColorOpacity = uiButtonComponent.getHoverColorOpacity()
            } else if (uiButtonComponent.getDefaultColor() !== fillColor || uiButtonComponent.getDefaultColorOpacity() !== fillColorOpacity) {
                fillColor = uiButtonComponent.getDefaultColor()
                fillColorOpacity = uiButtonComponent.getDefaultColorOpacity()
            }

            if (fillColor !== style.getFillColor() || fillColorOpacity !== style.getFillColorOpacity()) {
                style.setFillColor(fillColor)
                style.setFillColorOpacity(fillColorOpacity)
            }

            if (isHoverUnit) {
                if (buttonIntractableIndex <= unitIndex) {
                    uiContainerComponent.setButtonIntractableIndex(unitIndex)
                    uiButtonComponent.setIntractable(true)
                } else {
                    uiButtonComponent.setIntractable(false)
                }
            } else {
                if (buttonIntractableIndex === unitIndex) {
                    uiContainerComponent.setButtonIntractableIndex(-1)
                }
                uiButtonComponent.setIntractable(false)
            }
        } else {
            uiButtonComponent.setIntractable(false)
        }
    }

}