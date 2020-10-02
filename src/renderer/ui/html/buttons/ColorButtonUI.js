define(function () {

    class ColorButtonUI {
        /**
         * Draw a color button.
         * @param {MenuItem} item
         * @param {UIRenderer} uiRenderer
         */
        static draw(item, uiRenderer) {
            uiRenderer.getElement(item, this)
        }
    }

    ColorButtonUI.props = {
        tag: 'button',
        width: 85,
        height: 40,
        padding: { x: 10, y: 10 }
    }

    return ColorButtonUI
})