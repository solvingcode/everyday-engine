define(function (require) {

    const MenuUI = require('./ui/MenuUI.js')

    /**
     * Manager the renderer for the layout (fix element, menus, buttons, ...)
     */
    class SetupRenderer {
        /**
         * Render the layout (Menu, UI, ...).
         * @param {Menu} menu 
         */
        render(menu) {
            MenuUI.draw(menu, rootContext)
        }
    }

    return SetupRenderer
})