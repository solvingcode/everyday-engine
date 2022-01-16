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
            const menuItemUI = menu.items[iItem]
            if(menuItemUI.element.isUpdated()){
                menu.items[iItem].draw(uiRenderer)
            }
        }
    }
}

export default MenuUI