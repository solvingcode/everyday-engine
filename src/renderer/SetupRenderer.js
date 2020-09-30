define(function (require) {

    const MenuUI = require('./ui/MenuUI.js')
    const HtmlUIRenderer = require('./ui/html/HtmlUIRenderer.js')

    /**
     * Manager the renderer for the layout (fix element, menus, buttons, ...)
     */
    class SetupRenderer {
        constructor() {
            this.uiRenderer = new HtmlUIRenderer(rootContext)
        }
        /**
         * Render the layout (Menu, UI, ...).
         * @param {Menu} menu 
         */
        render(menu) {
            MenuUI.draw(menu, this.uiRenderer)
        }
    }

    return SetupRenderer
})