define(function (require) {

    const MenuUI = require('./ui/MenuUI.js')
    const HtmlUIRenderer = require('./ui/html/HtmlUIRenderer.js')
    const Renderer = require('./Renderer.js')

    /**
     * Manage the renderer for the layout (fix element, menus, buttons, ...)
     */
    class SetupRenderer extends Renderer{

        constructor() {
            super()
            this.uiRenderer = new HtmlUIRenderer()
        }

        /**
         * @override
         */
        render(menu) {
            MenuUI.draw(menu, this.uiRenderer)
        }

        /**
         * @override
         */
        clear() {
            //not necessary
        }

        /**
         * @override
         */
        draw(object) {
            //not used
        }
    }

    return SetupRenderer
})