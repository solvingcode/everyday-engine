define(function (require) {

    const DefaultButtonUI = require('./buttons/DefaultButtonUI.js')

    class PanelUI {
        /**
         * Draw a button.
         * @param {MenuItem} item 
         * @param {CanvasRenderingContext2D} context
         */
        static draw(item, context) {
            item.position = this.getPosition(item)
            const element = item.element
            const { colorPanel, colorText, heightTitle } = this.props
            context.fillStyle = colorPanel
            context.fillRect(item.position.x, item.position.y, this.props.width, heightTitle)
            context.fillStyle = colorText
            context.font = `${this.props.textSize}px Arial`
            context.fillText(
                element.props.name,
                item.position.x + this.props.padding.x,
                item.position.y + this.props.textSize + this.props.padding.y
            )
        }

        static getPosition(item) {
            const { x0, y0, isVertical } = DefaultButtonUI.props.zone[item.element.zone]
            return {
                x: x0 + (!isVertical && item.index * (this.props.width + this.props.padding.x)),
                y: y0 + (isVertical && item.index * (this.props.heightTitle + this.props.padding.y))
            }
        }
    }

    PanelUI.props = {
        width: 190,
        heightTitle: 40,
        padding: { x: 10, y: 10 },
        textSize: 16,
        colorPanel: '#CCCCCC',
        colorText: '#000000'
    }

    return PanelUI
})