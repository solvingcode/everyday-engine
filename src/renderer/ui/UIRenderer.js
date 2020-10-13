define(function (require) {

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
         * Get zone UI properties
         */
        getZoneProps(zone) {
            return this.zones[zone]
        }

        /**
         * Get MenuItem at a specific position.
         * @param {Mouse} mouse
         */
        getItemAt(mouse) {
            throw new TypeError('"UIRenderer.getItemAt" method must be implemented')
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

        /**
         * Get the text UI
         */
        getTextUI() {
            throw new TypeError('"UIRenderer.getTextUI" method must be implemented')
        }

        /**
         * Get the UI type of the given menu item
         * @param {MenuItemUI} item 
         * @param {UIRenderer} uiRenderer
         */
        getType(item) {
            const { element } = item
            if (element.items) {
                return this.getPanelUI()
            } else if (element.type === Layout.type.STYLE_COLOR) {
                return this.getColorButtonUI()
            } else if (element.type === Layout.type.LAYER_ENTITY) {
                return this.getLayerEntityButtonUI()
            } else if (element.type === Layout.type.TEXT) {
                return this.getTextUI()
            }
            return this.getDefaultButtonUI()
        }
    }

    return UIRenderer
})