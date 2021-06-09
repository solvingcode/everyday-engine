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
        return window.mouse.isButtonClicked(MouseButton.LEFT)
    }

    /**
     * Apply action for the menu.
     * @return {Boolean}
     */
    execute() {
        const mouse = Window.get().mouse
        const menuItems = this.menu.getUIRenderer().getItemsAt(mouse)
        if (menuItems && menuItems.length) {
            this.menu.selectItems(menuItems)
        } else {
            this.menu.stopActionMenuItem()
        }
        return !!(menuItems && menuItems.length)
    }
}

MenuRunner.instance = null

export default MenuRunner