define(function (require) {

    const ItemUI = require('../ItemUI.js')

    class DefaultButtonUI extends ItemUI {
        /**
         * Draw a default button.
         * @param {MenuItemUI} item
         * @param {UIRenderer} uiRenderer
         */
        static draw(item, uiRenderer) {
            uiRenderer.getElement(item)
        }

        /**
         * @inheritDoc
         */
        static postCreate(item, el) {
            el.textContent = item.element.props.name
        }

        /**
         * @inheritDoc
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