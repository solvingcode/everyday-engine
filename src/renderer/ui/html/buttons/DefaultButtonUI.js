define(function () {

    class DefaultButtonUI {
        /**
         * Draw a default button.
         * @param {MenuItem} item
         * @param {UIRenderer} uiRenderer
         */
        static draw(item, uiRenderer) {
            uiRenderer.getElement(item, this)
        }
    }

    DefaultButtonUI.props = {
        tag: 'button',
        prefix: 'default-button-',
        width: 85,
        height: 40
    }

    return DefaultButtonUI
})