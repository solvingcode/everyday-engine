define(function (require) {

    const UIRenderer = require('../UIRenderer.js')
    const ButtonUI = require('./buttons/ButtonUI.js')
    const PanelUI = require('./PanelUI.js')

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
        }

        /**
         * @inheritdoc
         */
        drawPanel(item) {
            PanelUI.draw(item, this.context)
        }

        /**
         * @inheritdoc
         */
        drawButton(item) {
            ButtonUI.draw(item, this.context)
        }
    }

    return CanvasUIRenderer
})