define(function () {

    class DefaultButtonUI {
        /**
         * Draw a button.
         * @param {MenuItem} item
         * @param {UIRenderer} uiRenderer
         */
        static draw(item, uiRenderer) {
            const { zone } = item.element
            const zoneDiv = uiRenderer.getZoneDiv(zone)
            console.log(zoneDiv)
        }
    }

    DefaultButtonUI.props = {
        width: 85,
        height: 40,
        padding: { x: 10, y: 10 },
        textSize: 16,
        colorButton: '#CCCCCC',
        colorButtonSelected: '#3333DD',
        colorText: '#000000',
        colorTextSelected: '#DDDDDD'
    }

    return DefaultButtonUI
})