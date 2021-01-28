define(function (require) {

    import Layout from '../../layout/Layout.js'

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
                    x0: SCENE_WIDTH - 250,
                    y0: 20,
                    isVertical: true
                },
                [Layout.zone.BOTTOM]: {
                    x0: 20,
                    y0: WINDOW_HEIGHT - 40
                }
            }
        }

        /**
         * @abstract
         */
        clean() {
            throw new TypeError('"UIRenderer.clean" method must be implemented')
        }

        /**
         * @abstract
         * Create/Update and return the HTML element for the given menu item
         * @param {MenuItemUI} menuItem
         * @return {HTMLElement}
         */
        getElement(menuItem) {
            throw new TypeError('"UIRenderer.getElement" method must be implemented')
        }

        /**
         * @abstract
         * Get the body of a menu item
         * Used to define where to append child elements
         * @param {MenuItemUI} menuItem
         * @return {HTMLElement}
         */
        getBody(menuItem) {
            throw new TypeError('"UIRenderer.getBody" method must be implemented')
        }

        /**
         * Get zone UI properties
         */
        getZoneProps(zone) {
            return this.zones[zone]
        }

        /**
         * @abstract
         * Get MenuItem at a specific position.
         * @param {Mouse} mouse
         * @return {MenuItemUI}
         */
        getItemAt(mouse) {
            throw new TypeError('"UIRenderer.getItemAt" method must be implemented')
        }

        /**
         * @abstract
         * Get the button UI for color
         * @return {ItemUI}
         */
        getColorButtonUI() {
            throw new TypeError('"UIRenderer.getColorButtonUI" method must be implemented')
        }

        /**
         * @abstract
         * Get the button UI for layer entity
         * @return {ItemUI}
         */
        getLayerEntityButtonUI() {
            throw new TypeError('"UIRenderer.getLayerEntityButtonUI" method must be implemented')
        }

        /**
         * @abstract
         * Get the button UI for default
         * @return {ItemUI}
         */
        getDefaultButtonUI() {
            throw new TypeError('"UIRenderer.getDefaultButtonUI" method must be implemented')
        }

        /**
         * @abstract
         * Get the button UI for icons
         * @return {ItemUI}
         */
        getIconButtonUI() {
            throw new TypeError('"UIRenderer.getIconButtonUI" method must be implemented')
        }

        /**
         * @abstract
         * Get the panel UI
         * @return {ItemUI}
         */
        getPanelUI() {
            throw new TypeError('"UIRenderer.getPanelUI" method must be implemented')
        }

        /**
         * @abstract
         * Get the text UI
         * @return {ItemUI}
         */
        getTextUI() {
            throw new TypeError('"UIRenderer.getTextUI" method must be implemented')
        }

        /**
         * @abstract
         * Get the graph UI
         * @return {ItemUI}
         */
        getGraphUI() {
            throw new TypeError('"UIRenderer.getGraphUI" method must be implemented')
        }

        /**
         * @abstract
         * Get the form UI
         * @return {ItemUI}
         */
        getFormUI() {
            throw new TypeError('"UIRenderer.getFormUI" method must be implemented')
        }

        /**
         * @abstract
         * Get the form input UI
         * @return {ItemUI}
         */
        getFormElementUI() {
            throw new TypeError('"UIRenderer.getFormElementUI" method must be implemented')
        }

        /**
         * @abstract
         * @return {ItemUI}
         */
        getListElementUI() {
            throw new TypeError('"UIRenderer.getListElementUI" method must be implemented')
        }

        /**
         * Get the UI type of the given menu item
         * @param {MenuItemUI} item
         * @return {ItemUI}
         */
        getType(item) {
            const { element } = item
            if (element.type === Layout.type.PANEL) {
                return this.getPanelUI()
            } else if (element.type === Layout.type.STYLE_COLOR) {
                return this.getColorButtonUI()
            } else if (element.type === Layout.type.LAYER_ENTITY) {
                return this.getLayerEntityButtonUI()
            } else if (element.type === Layout.type.TEXT) {
                return this.getTextUI()
            } else if (element.type === Layout.type.GRAPH) {
                return this.getGraphUI()
            } else if (element.type === Layout.type.FORM) {
                return this.getFormUI()
            } else if (element.type === Layout.type.FORM_ELEMENT) {
                return this.getFormElementUI().getType(item)
            } else if (element.type === Layout.type.ICON) {
                return this.getIconButtonUI()
            } else if (element.type === Layout.type.LIST_ELEMENT) {
                return this.getListElementUI()
            }
            return this.getDefaultButtonUI()
        }
    }

    export default UIRenderer
})