define(function () {
    class Button {
        /**
         * Draw a button.
         * @param {MenuItem} item 
         * @param {CanvasRenderingContext2D} context
         */
        static draw(item, context) {
            const element = item.element
            var colorButton = Button.props.colorButton
            var colorText = Button.props.colorText
            if(element.isSelected()){
                colorButton = Button.props.colorButtonSelected
                colorText = Button.props.colorTextSelected
            }
            context.fillStyle = colorButton
            context.fillRect(item.position.x, item.position.y, Button.props.width, Button.props.height)
            context.fillStyle = colorText
            context.font = `${Button.props.textSize}px Arial`
            context.fillText(
                element.props.name, 
                item.position.x + Button.props.padding, 
                item.position.y + Button.props.textSize + Button.props.padding
            )
        }
    }

    Button.props = {
        width: 80,
        height: 40,
        padding: 10,
        textSize: 16,
        colorButton: '#CCCCCC',
        colorButtonSelected: '#3333DD',
        colorText: '#000000',
        colorTextSelected: '#DDDDDD'
    }

    return Button
})