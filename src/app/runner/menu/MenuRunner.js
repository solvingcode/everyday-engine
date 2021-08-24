import Runner from '../Runner.js'
import Menu from '../../layout/Menu.js'
import {MouseButton} from '../../core/Mouse.js'
import Window from '../../core/Window.js'

/**
 * Execute actions related to menu items
 * @property {Menu} menu
 */
class MenuRunner extends Runner {

    constructor() {
        super()
        this.menu = Menu.get()
    }

    /**
     * @override
     */
    isHandle(window) {
        return window.mouse.isButtonPressed(MouseButton.LEFT) ||
            window.mouse.isButtonClicked(MouseButton.LEFT) ||
            window.mouse.isMouseWheelMove()
    }

    /**
     * Apply action for the menu.
     * @return {Boolean}
     */
    execute() {
        const window = Window.get()
        const mouse = Window.get().mouse
        const {path, pathEnd} = mouse
        let selectItem = true
        if (mouse.isMouseDrag()) {
            const menuDragStartItem = this.menu.getUIRenderer().getItemsAt(path)
                .reverse()
                .find(menuItem => menuItem.element.isDraggable() && menuItem.element.isEnabled())
            if (menuDragStartItem) {
                const menuDragEndItem = this.menu.getUIRenderer().getItemsAt(pathEnd)
                    .reverse()
                    .find(menuItem => !!menuItem.element.getDragStateCode() && menuItem.element.isEnabled())
                if (menuDragEndItem && menuDragStartItem !== menuDragEndItem) {
                    this.menu.dragItems(menuDragStartItem, menuDragEndItem)
                    selectItem = false
                }
            }
        }
        if(selectItem){
            const menuItems = this.menu.getUIRenderer().getItemsAt(path)
                .filter(menuItem => menuItem.element.isHandle(window) && menuItem.element.isEnabled())
            if (menuItems && menuItems.length) {
                this.menu.selectItems(menuItems)
            }
        }
    }
}

MenuRunner.instance = null

export default MenuRunner