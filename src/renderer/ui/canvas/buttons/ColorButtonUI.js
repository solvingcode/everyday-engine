define(function (require) {

    const PanelButtonUI = require('./PanelButtonUI.js')

    class ColorButtonUI extends PanelButtonUI {
        /**
         * Draw a button.
         * @param {MenuItem} item 
         * @param {UIRenderer} uiRenderer
         */
        static draw(item, uiRenderer) {
            this.config(item)
            const { context } = uiRenderer
            const { color } = item.element.data
            context.fillStyle = color
            context.lineWidth = 1
            context.strokeRect(item.position.x, item.position.y, this.props.width, this.props.height)
            if (!color) {
                context.lineWidth = 2
                context.moveTo(
                    item.position.x + context.lineWidth,
                    item.position.y + this.props.height - context.lineWidth
                )
                context.lineTo(
                    item.position.x + this.props.width - context.lineWidth,
                    item.position.y + context.lineWidth
                )
                context.stroke()
            } else {
                context.fillRect(item.position.x, item.position.y, this.props.width, this.props.height)
            }
            if (item.element.isSelected()) {
                context.strokeStyle = this.props.strokeColor
                context.lineWidth = 3
                context.strokeRect(item.position.x, item.position.y, this.props.width, this.props.height)
            }
        }
    }

    ColorButtonUI.props = {
        width: 26,
        height: 26,
        padding: { x: 10, y: 10 },
        strokeColor: '#000000',
        numberPerLine: 5
    }

    return ColorButtonUI
})