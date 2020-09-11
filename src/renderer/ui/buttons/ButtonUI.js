define(function (require) {

    const ColorButtonUI = require('./ColorButtonUI.js')
    const DefaultButtonUI = require('./DefaultButtonUI.js')

    class ButtonUI {
        /**
         * Draw a button.
         * @param {MenuItem} item 
         * @param {CanvasRenderingContext2D} context
         */
        static draw(item, context) {
            if (item.element.color) {
                ColorButtonUI.draw(item, context)
            } else {
                DefaultButtonUI.draw(item, context)
            }
        }
    }

    return ButtonUI
})