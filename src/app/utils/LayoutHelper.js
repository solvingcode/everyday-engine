import Menu from '../layout/Menu.js'
import ContentCanvasMenuItem from '../layout/items/content/ContentCanvasMenuItem.js'

export default class LayoutHelper {

    /**
     * @param {Mouse} mouse
     * @return {boolean}
     */
    static isPositionValid(mouse) {
        const menu = Menu.get()
        const menuItem = menu.getUIRenderer().getItemAt(mouse)
        return !menuItem || (menuItem && menuItem.element instanceof ContentCanvasMenuItem)
    }

}