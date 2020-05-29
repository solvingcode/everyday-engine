define(function (require) {

    const Button = require('./ui/Button.js')

    class SetupRenderer {
        /**
         * Draw the menu.
         * @param {Menu} menu 
         */
        drawMenu(menu) {
            for (var iItem in menu.items) {
                const item = menu.items[iItem]
                Button.draw(item, rootContext)
            }
        }

        /**
         * Render the layout (Menu, UI, ...).
         * @param {Menu} menu 
         */
        render(menu) {
            this.drawMenu(menu)
        }
    }

    return SetupRenderer
})