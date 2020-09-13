define(function (require) {

    const ColorButtonUI = require('./ColorButtonUI.js')
    const DefaultButtonUI = require('./DefaultButtonUI.js')
    const Layout = require('../../../layout/Layout.js')

    class ButtonUI {
        /**
         * Draw a button.
         * @param {MenuItem} item 
         * @param {CanvasRenderingContext2D} context
         */
        static draw(item, context) {
            this.getType(item.element).draw(item, context)
        }

        /**
         * Get props for the given item (width, height, ...)
         * @param {MenuItem} item 
         */
        static getProps(item) {
            return this.getType(item).props
        }

        /**
         * Get the UI type of the given menu item
         * @param {MenuItem} item 
         */
        static getType(item) {
            if (item.type === Layout.type.STYLE_COLOR) {
                return ColorButtonUI
            }
            return DefaultButtonUI
        }
    }

    return ButtonUI
})