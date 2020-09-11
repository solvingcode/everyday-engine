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
            const { color } = item.element
            context.fillStyle = color
            context.fillRect(item.position.x, item.position.y, this.props.width, this.props.height)
        }

        static getPosition(item) {
            const { x: x0, y: y0 } = PanelUI.getPosition(item.parent)
            return {
                x: x0 + (item.index - (item.parentIndex + 1)) * (this.props.width + this.props.padding.x),
                y: y0 + PanelUI.props.heightTitle + PanelUI.props.padding.y
            }
        }
    }

    ColorButtonUI.props = {
        width: 30,
        height: 30,
        padding: { x: 10, y: 10 }
    }

    return ColorButtonUI
})