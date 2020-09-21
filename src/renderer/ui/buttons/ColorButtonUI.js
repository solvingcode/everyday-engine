define(function (require) {

    const PanelUI = require('../PanelUI.js')

    class ColorButtonUI {
        /**
         * Draw a button.
         * @param {MenuItem} item 
         * @param {CanvasRenderingContext2D} context
         */
        static draw(item, context) {
            this.config(item)
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

        static config(item) {
            const { x: x0, y: y0 } = item.parent.position
            const { numberPerLine, padding, height, width } = this.props
            const numLine = Math.ceil((item.index - item.parent.index) / numberPerLine)
            const numCol = (item.index - (item.parent.index + 1)) % numberPerLine
            const { heightTitle } = PanelUI.props
            item.position = {
                x: x0 + (width + padding.x) * numCol + padding.x,
                y: y0 + heightTitle * numLine + PanelUI.props.padding.y
            }
            item.parent.height = heightTitle + numLine * (height + padding.y * 2)
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