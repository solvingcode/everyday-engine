define(function (require) {

    const Layout = require('../../layout/Layout.js')

    class Button {
        /**
         * Draw a button.
         * @param {MenuItem} item 
         * @param {CanvasRenderingContext2D} context
         */
        static draw(item, context) {
            this.style(item)
            const element = item.element
            var colorButton = Button.props.colorButton
            var colorText = Button.props.colorText
            if (element.isSelected()) {
                colorButton = Button.props.colorButtonSelected
                colorText = Button.props.colorTextSelected
            }
            context.fillStyle = colorButton
            context.fillRect(item.position.x, item.position.y, Button.props.width, Button.props.height)
            context.fillStyle = colorText
            context.font = `${Button.props.textSize}px Arial`
            context.fillText(
                element.props.name,
                item.position.x + Button.props.padding.x,
                item.position.y + Button.props.textSize + Button.props.padding.y
            )
        }

        static style(item) {
            const { x0, y0, isVertical } = Button.props.zone[item.element.zone]
            item.position = {
                x: x0 + (!isVertical && item.index * (Button.props.width + Button.props.padding.x)),
                y: y0 + (isVertical && item.index * (Button.props.height + Button.props.padding.y))
            }
        }
    }

    Button.props = {
        width: 85,
        height: 40,
        padding: {x: 10, y: 10},
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
            }
        }
    }

    return Button
})