/**
 * Menu UI class
 * Used to draw the menu
 */
class MenuUI {
    /**
     * Draw a button.
     * @param {Menu} menu
     * @param {UIRenderer} uiRenderer
     */
    static draw(menu, uiRenderer) {
        uiRenderer.clean()
        for (let iItem in menu.items) {
            menu.items[iItem].draw(uiRenderer)
        }
    }
}

export default MenuUI