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
        draw(uiRenderer){
            if (this.element.items) {
                uiRenderer.drawPanel(this)
            } else {
                uiRenderer.drawButton(this)
            }
        }
    }

    return MenuItemUI
})