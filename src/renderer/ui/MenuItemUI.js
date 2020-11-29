define(function () {

    /**
     * Menu item UI
     * @property {MenuItem} element
     * @property {MenuItemUI} parent
     * @property {number} version
     */
    class MenuItemUI {
        constructor(item, index, parent) {
            this.element = item
            this.index = index
            this.parent = parent
            this.version = 0
        }

        /**
         * Draw the Menu Item UI
         * @param {UIRenderer} uiRenderer 
         */
        draw(uiRenderer) {
            uiRenderer.getType(this).draw(this, uiRenderer)
        }

        /**
         * Get id of menu item
         * @return {string}
         */
        getId() {
            const zone = this.element.zone
            const parentIndex = (this.parent && this.parent.index) || 0
            return `${HTML_ID_PREFIX}${zone}-${parentIndex}-${this.index}`
        }
    }

    return MenuItemUI
})