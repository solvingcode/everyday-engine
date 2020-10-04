define(function (require) {

    const ItemUI = require('../ItemUI.js')

    class DefaultButtonUI extends ItemUI {
        /**
         * Draw a default button.
         * @param {MenuItem} item
         * @param {UIRenderer} uiRenderer
         */
        static draw(item, uiRenderer) {
            uiRenderer.getElement(item)
        }

        /**
         * @inheritdoc
         */
        static postCreate(item, el) {
            el.textContent = item.element.props.name
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