define(function (require) {

    const PanelButtonUI = require('./PanelButtonUI.js')

    /**
     * LayerEntityButtonUI class
     * Define a button for entity element inside a panel
     */
    class LayerEntityButtonUI extends PanelButtonUI {
        /**
         * Draw a button.
         * @param {MenuItem} item 
         * @param {CanvasRenderingContext2D} context
         */
        static draw(item, context) {
            this.config(item)
            const { entity } = item.element.data
            const {
                width, height,
                fillColor, fillColorSelected,
                colorText, textSize,
                padding, fillColorLocked, colorTextLocked
            } = this.props
            context.fillStyle = (item.element.isSelected() && fillColorSelected) ||
                (entity.locked && fillColorLocked) || fillColor
            context.lineWidth = 1
            context.fillRect(item.position.x, item.position.y, width, height)
            context.fillStyle = (entity.locked && colorTextLocked) || colorText
            context.font = `${textSize}px Arial`
            context.fillText(
                entity.shape,
                item.position.x + padding.x,
                item.position.y + textSize + padding.y
            )
        }
    }

    LayerEntityButtonUI.props = {
        width: 170,
        height: 40,
        padding: { x: 10, y: 10 },
        colorText: '#000000',
        colorTextLocked: '#999999',
        fillColor: '#EEEEEE',
        fillColorSelected: '#C6EDFF',
        fillColorLocked: '#F4F4F4',
        numberPerLine: 1,
        textSize: 16
    }

    return LayerEntityButtonUI
})