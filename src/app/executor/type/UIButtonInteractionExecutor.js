import ComponentExecutor from './ComponentExecutor.js'
import StyleComponent from '../../component/internal/StyleComponent.js'
import UIButtonComponent from '../../component/internal/ui/UIButtonComponent.js'
import World from '../../world/World.js'
import Window from '../../core/Window.js'
import UnitHelper from '../../utils/UnitHelper.js'
import {MouseButton} from '../../core/Mouse.js'

export default class UIButtonInteractionExecutor extends ComponentExecutor {

    constructor() {
        super([UIButtonComponent, StyleComponent])
    }

    /**
     * @override
     */
    execute(unit, executionContext) {
        const world = World.get()
        const {mouse} = Window.get()
        const styleComponent = unit.getComponent(StyleComponent)
        const uiButtonComponent = unit.getComponent(UIButtonComponent)
        const style = styleComponent.getStyle()
        const isHoverUnit = UnitHelper.isInsideWindowPosition(world, unit, mouse.currentPosition)
        const isPressedUnit = UnitHelper.isInsideWindowPosition(world, unit, mouse.position)
        let fillColor = style.getFillColor()
        let fillColorOpacity = style.getFillColorOpacity()

        if (mouse.isButtonPressed(MouseButton.LEFT) && isPressedUnit) {
            fillColor = uiButtonComponent.getPressedColor()
            fillColorOpacity = uiButtonComponent.getPressedColorOpacity()
            const onClickName = uiButtonComponent.getOnClick()
            if(onClickName){
                const onClick = world.getFunctionRegistry().getInstance(onClickName)
                onClick.execute(world.getFunctionRegistry(), null, null, world)
            }
        } else if (isHoverUnit) {
            fillColor = uiButtonComponent.getHoverColor()
            fillColorOpacity = uiButtonComponent.getHoverColorOpacity()
        } else if(uiButtonComponent.getDefaultColor() !== fillColor || uiButtonComponent.getDefaultColorOpacity() !== fillColorOpacity) {
            fillColor = uiButtonComponent.getDefaultColor()
            fillColorOpacity = uiButtonComponent.getDefaultColorOpacity()
        }

        if (fillColor !== style.getFillColor() || fillColorOpacity !== style.getFillColorOpacity()) {
            style.setFillColor(fillColor)
            style.setFillColorOpacity(fillColorOpacity)
        }
    }

}