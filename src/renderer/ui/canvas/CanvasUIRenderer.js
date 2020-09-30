define(function (require) {

    const UIRenderer = require('../UIRenderer.js')
    const ColorButtonUI = require('./buttons/ColorButtonUI.js')
    const DefaultButtonUI = require('./buttons/DefaultButtonUI.js')
    const LayerEntityButtonUI = require('./buttons/LayerEntityButtonUI.js')
    const CanvasPanelUI = require('./CanvasPanelUI.js')

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
        getColorButtonUI() {
            return ColorButtonUI
        }

        /**
         * @inheritdoc
         */
        getLayerEntityButtonUI() {
            return LayerEntityButtonUI
        }

        /**
         * @inheritdoc
         */
        getDefaultButtonUI() {
            return DefaultButtonUI
        }

        /**
         * @inheritdoc
         */
        getPanelUI() {
            return CanvasPanelUI
        }

    }

    return CanvasUIRenderer
})