define(function () {

    class MenuItemUI {
        constructor(item, index, parent) {
            this.element = item
            this.index = index
            this.parent = parent
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
         */
        getId() {
            const zone = this.element.zone
            const parentIndex = (this.parent && this.parent.index) || 0
            return `${HTML_ID_PREFIX}${zone}-${parentIndex}-${this.index}`
        }
    }

    return MenuItemUI
})