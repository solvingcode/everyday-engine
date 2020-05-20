define(function () {

    class SetupRenderer {
        drawMenu(menu) {
            const x0 = 20, y0 = 20
            const width = 80, height = 40, padding = 10, textSize = 16
            for (var iItem in menu.items) {
                const x = x0, y = y0 + iItem * (height + padding)
                const item = menu.items[iItem]
                rootContext.fillStyle = '#CCCCCC'
                rootContext.fillRect(x, y, width, height)
                rootContext.fillStyle = '#000000'
                rootContext.font = `${textSize}px Arial`
                rootContext.fillText(item.props.name, x + padding, y + textSize + padding)
            }
        }
        render(menu) {
            this.drawMenu(menu)
        }
    }

    return SetupRenderer
})