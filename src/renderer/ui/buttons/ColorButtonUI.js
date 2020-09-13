define(function (require) {

    const PanelUI = require('../PanelUI.js')

    class ColorButtonUI {
        /**
         * Draw a button.
         * @param {MenuItem} item 
         * @param {CanvasRenderingContext2D} context
         */
        static draw(item, context) {
            item.position = this.getPosition(item)
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

        static getPosition(item) {
            const { x: x0, y: y0 } = PanelUI.getPosition(item.parent)
            return {
                x: x0 + (item.index - (item.parent.index + 1)) * (this.props.width + this.props.padding.x),
                y: y0 + PanelUI.props.heightTitle + PanelUI.props.padding.y
            }
        }
    }

    ColorButtonUI.props = {
        width: 30,
        height: 30,
        padding: { x: 10, y: 10 },
        strokeColor: '#000000'
    }

    return ColorButtonUI
})