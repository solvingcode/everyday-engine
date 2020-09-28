define(function (require) {

    const MenuUI = require('./ui/MenuUI.js')
    const CanvasUIRenderer = require('./ui/canvas/CanvasUIRenderer.js')

    /**
     * Manager the renderer for the layout (fix element, menus, buttons, ...)
     */
    class SetupRenderer {
        constructor() {
            this.uiRenderer = new CanvasUIRenderer(rootContext)
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