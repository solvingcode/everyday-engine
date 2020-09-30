define(function (require) {

    const ButtonUI = require('./ButtonUI.js')
    const PanelUI = require('./PanelUI.js')
    const Layout = require('../../layout/Layout.js')

    /**
     * UI Renderer class
     * Define the renderer responsible for rendering the layout
     * @abstract
     */
    class UIRenderer {

        constructor() {
            this.zones = {
                [Layout.zone.LEFT]: {
                    x0: 20,
                    y0: 20,
                    isVertical: true
                },
                [Layout.zone.TOP]: {
                    x0: 160,
                    y0: 20,
                    isVertical: false
                },
                [Layout.zone.RIGHT]: {
                    x0: WINDOW_WIDTH - 250,
                    y0: 20,
                    isVertical: true
                }
            }
        }

        /**
         * Draw a panel
         * @param {MenuItem} item
         */
        drawPanel(item) {
            PanelUI.draw(item, this)
        }

        /**
         * Draw a button
         * @param {MenuItem} item
         */
        drawButton(item) {
            ButtonUI.draw(item, this)
        }

        /**
         * Get zone UI properties
         */
        getZoneProps() {
            return this.zones[zone]
        }

        /**
         * Get the button UI for color
         */
        getColorButtonUI() {
            throw new TypeError('"UIRenderer.getColorButtonUI" method must be implemented')
        }

        /**
         * Get the button UI for layer entity
         */
        getLayerEntityButtonUI() {
            throw new TypeError('"UIRenderer.getLayerEntityButtonUI" method must be implemented')
        }

        /**
         * Get the button UI for default
         */
        getDefaultButtonUI() {
            throw new TypeError('"UIRenderer.getDefaultButtonUI" method must be implemented')
        }

        /**
         * Get the panel UI
         */
        getPanelUI() {
            throw new TypeError('"UIRenderer.getPanelUI" method must be implemented')
        }
    }

    return UIRenderer
})