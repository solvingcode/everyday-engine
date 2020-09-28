define(function () {

    /**
     * UI Renderer class
     * Define the renderer responsible for rendering the layout
     * @abstract
     */
    class UIRenderer {
        /**
         * Draw a panel
         * @param {MenuItem} item
         */
        drawPanel(item) {
            throw new TypeError('"UIRenderer.drawPanel" method must be implemented')
        }

        /**
         * Draw a button
         * @param {MenuItem} item
         */
        drawButton(item) {
            throw new TypeError('"UIRenderer.drawButton" method must be implemented')
        }
    }

    return UIRenderer
})