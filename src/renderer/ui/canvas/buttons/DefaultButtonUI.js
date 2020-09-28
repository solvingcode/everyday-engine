define(function (require) {

    const Layout = require('../../../../layout/Layout.js')

    class DefaultButtonUI {
        /**
         * Draw a button.
         * @param {MenuItem} item 
         * @param {CanvasRenderingContext2D} context
         */
        static draw(item, context) {
            this.config(item)
            const element = item.element
            var colorButton = this.props.colorButton
            var colorText = this.props.colorText
            if (element.isSelected()) {
                colorButton = this.props.colorButtonSelected
                colorText = this.props.colorTextSelected
            }
            context.fillStyle = colorButton
            context.fillRect(item.position.x, item.position.y, this.props.width, this.props.height)
            context.fillStyle = colorText
            context.font = `${this.props.textSize}px Arial`
            context.fillText(
                element.props.name,
                item.position.x + this.props.padding.x,
                item.position.y + this.props.textSize + this.props.padding.y
            )
        }

        static config(item) {
            const { x0, y0, isVertical } = this.props.zone[item.element.zone]
            item.position = {
                x: x0 + (!isVertical && item.index * (this.props.width + this.props.padding.x)),
                y: y0 + (isVertical && item.index * (this.props.height + this.props.padding.y))
            }
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
        colorTextSelected: '#DDDDDD',
        zone: {
            [Layout.zone.LEFT]: {
                x0: 20,
                y0: 20,
                isVertical: true
            },
            [Layout.zone.TOP]: {
                x0: 160,
                y0: 20,
                isVertical: false
            },
            [Layout.zone.RIGHT]: {
                x0: WINDOW_WIDTH - 250,
                y0: 20,
                isVertical: true
            }
        }
    }

    return DefaultButtonUI
})