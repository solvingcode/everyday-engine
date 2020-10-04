define(function (require) {

    const ItemUI = require('../ItemUI.js')

    /**
     * Color Button UI class
     * Manage the rendering of color button for HTML
     */
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
        className: 'color',
        width: '40px',
        height: '40px'
    }

    return ColorButtonUI
})