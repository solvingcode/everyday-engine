define(function (require) {

    const ItemUI = require('../ItemUI.js')

    class DefaultButtonUI extends ItemUI {
        /**
         * Draw a default button.
         * @param {MenuItem} item
         * @param {UIRenderer} uiRenderer
         */
        static draw(item, uiRenderer) {
            const parentEl = item.parent && uiRenderer.getElement(item.parent)
            uiRenderer.getElement(item, parentEl)
        }

        /**
         * @inherit
         */
        static postCreate(item, el) {
            el.textContent = item.element.props.name
        }

        /**
         * @inherit
         */
        static postUpdate(item, el) {
            const { name } = item.element.props
            if (el.textContent !== name) {
                el.textContent = name
            }
        }
    }

    DefaultButtonUI.props = {
        tag: 'button',
        prefix: 'default-button-',
        width: '85px',
        height: '40px'
    }

    return DefaultButtonUI
})