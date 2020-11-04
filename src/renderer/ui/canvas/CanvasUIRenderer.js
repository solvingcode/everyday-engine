define(function (require) {

    const UIRenderer = require('../UIRenderer.js')
    const ColorButtonUI = require('./buttons/ColorButtonUI.js')
    const DefaultButtonUI = require('./buttons/DefaultButtonUI.js')
    const LayerEntityButtonUI = require('./buttons/LayerEntityButtonUI.js')
    const CanvasPanelUI = require('./CanvasPanelUI.js')
    const Menu = require('../../../layout/Menu.js')

    /**
     * Canvas UI Renderer class
     * Define the UI renderer for canvas
     * @abstract
     */
    class CanvasUIRenderer extends UIRenderer {

        /**
         * @param {CanvasRenderingContext2D} context 
         */
        constructor(context) {
            super()
            this.context = context
            this.menu = Menu.get()
            this.menu.setUIRenderer(this)
        }

        /**
         * @inherit
         */
        getColorButtonUI() {
            return ColorButtonUI
        }

        /**
         * @inherit
         */
        getLayerEntityButtonUI() {
            return LayerEntityButtonUI
        }

        /**
         * @inherit
         */
        getDefaultButtonUI() {
            return DefaultButtonUI
        }

        /**
         * @inherit
         */
        getPanelUI() {
            return CanvasPanelUI
        }

        /**
         * @inherit
         */
        getItemAt(mouse) {
            const { x, y } = mouse.position
            return this.menu.items.find((item) => item.position &&
                x > item.position.x && x < item.position.x + item.width &&
                y > item.position.y && y < item.position.y + item.height
            )
        }

    }

    return CanvasUIRenderer
})