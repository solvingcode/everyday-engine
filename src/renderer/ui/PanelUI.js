define(function () {

    class PanelUI {
        /**
         * Draw a button.
         * @param {MenuItem} item 
         * @param {UIRenderer} uiRenderer
         */
        static draw(item, uiRenderer) {
            uiRenderer.getPanelUI().draw(item, uiRenderer)
        }
    }

    return PanelUI
})