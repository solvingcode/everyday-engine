define(function () {

    class CanvasPanelUI {
        /**
         * Draw a button.
         * @param {MenuItem} item 
         * @param {UIRenderer} uiRenderer
         */
        static draw(item, uiRenderer) {
            this.config(item, uiRenderer)
            const { context } = uiRenderer
            const element = item.element
            const { width, textSize, padding, colorPanel, colorText, heightTitle } = this.props
            context.fillStyle = colorPanel
            context.fillRect(item.position.x, item.position.y, width, heightTitle)
            context.strokeRect(item.position.x, item.position.y, width, item.height)
            context.fillStyle = colorText
            context.font = `${textSize}px Arial`
            context.fillText(
                element.props.name,
                item.position.x + padding.x,
                item.position.y + textSize + padding.y
            )
        }

        static config(item, uiRenderer) {
            const { x0, y0, isVertical } = uiRenderer.getZoneProps(item.element.zone)
            const { width, padding } = this.props
            const { position: posPrevItem, height: prevItemHeight } = item.element.getPrevItem()
            item.position = {
                x: x0 + (!isVertical && item.index * (width + padding.x)),
                y: y0 + (isVertical && ((posPrevItem.y + prevItemHeight) || 0))
            }
        }
    }

    CanvasPanelUI.props = {
        width: 190,
        heightTitle: 40,
        padding: { x: 10, y: 10 },
        textSize: 16,
        colorPanel: '#CCCCCC',
        colorText: '#000000'
    }

    export default CanvasPanelUI
})