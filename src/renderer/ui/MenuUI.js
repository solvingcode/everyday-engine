define(function (require) {

    const ButtonUI = require('./buttons/ButtonUI.js')
    const PanelUI = require('./PanelUI.js')

    class MenuUI {
        /**
         * Draw a button.
         * @param {Menu} item 
         * @param {CanvasRenderingContext2D} context
         */
        static draw(menu, context) {
            for (var iItem in menu.items) {
                const item = menu.items[iItem]
                if (item.element.items) {
                    PanelUI.draw(item, context)
                } else {
                    ButtonUI.draw(item, context)
                }
            }
        }
    }

    return MenuUI
})