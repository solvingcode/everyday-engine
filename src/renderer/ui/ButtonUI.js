define(function (require) {

    const Layout = require('../../layout/Layout.js')

    class ButtonUI {
        /**
         * Draw a button.
         * @param {MenuItem} item 
         * @param {UIRenderer} uiRenderer
         */
        static draw(item, uiRenderer) {
            this.getType(item.element, uiRenderer).draw(item, uiRenderer)
        }

        /**
         * Get the UI type of the given menu item
         * @param {MenuItem} item 
         * @param {UIRenderer} uiRenderer
         */
        static getType(item, uiRenderer) {
            if (item.type === Layout.type.STYLE_COLOR) {
                return uiRenderer.getColorButtonUI()
            } else if (item.type === Layout.type.LAYER_ENTITY) {
                return uiRenderer.getLayerEntityButtonUI()
            }
            return uiRenderer.getDefaultButtonUI()
        }
    }

    return ButtonUI
})