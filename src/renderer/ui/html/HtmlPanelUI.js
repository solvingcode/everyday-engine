define(function () {

    class HtmlPanelUI {
        /**
         * Draw a panel.
         * @param {MenuItem} item
         * @param {UIRenderer} uiRenderer
         */
        static draw(item, uiRenderer) {
            const panel = uiRenderer.getElement(item, this)
            const title = item.element.props.name
            panel.textContent = title
        }
    }

    HtmlPanelUI.props = {
        tag: 'div',
        width: 200,
        padding: { x: 10, y: 10 }
    }

    return HtmlPanelUI
})