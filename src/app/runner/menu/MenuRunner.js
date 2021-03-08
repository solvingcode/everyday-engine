import Runner from '../Runner.js'
import Menu from '../../layout/Menu.js'
import Mouse from '../../core/Mouse.js'

const {MouseButton} = Mouse

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
     * @param {Mouse} mouse
     * @return {Boolean}
     */
    execute(mouse) {
        const menuItem = this.menu.getUIRenderer().getItemAt(mouse)
        if (menuItem) {
            this.menu.selectItem(menuItem)
        } else {
            this.menu.stopActionMenuItem()
        }
        return !!menuItem
    }
}

MenuRunner.instance = null

export default MenuRunner