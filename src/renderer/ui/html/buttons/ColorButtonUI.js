define(function (require) {

    const ItemUI = require('../ItemUI.js')

    class ColorButtonUI extends ItemUI {
        /**
         * Draw a color button.
         * @param {MenuItem} item
         * @param {UIRenderer} uiRenderer
         */
        static draw(item, uiRenderer) {
            const parentEl = uiRenderer.getElement(item.parent)
            uiRenderer.getElement(item, parentEl)
        }

        /**
         * @inheritdoc 
         */
        static getStyle(item) {
            const { color } = item.element.data
            const style = {
                backgroundColor: color
            }
            return style
        }

        /**
         * @inheritdoc 
         */
        static getClassName(item) {
            const { color } = item.element.data
            return !color && 'cross'
        }
    }

    ColorButtonUI.props = {
        tag: 'button',
        width: '40px',
        height: '40px',
        padding: { x: 10, y: 10 }
    }

    return ColorButtonUI
})