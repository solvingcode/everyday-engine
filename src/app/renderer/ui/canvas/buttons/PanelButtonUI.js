import CanvasPanelUI from '../CanvasPanelUI.js'

/**
 * Panel ButtonUI.
 * Define button for Panel menu items
 */
class PanelButtonUI {
    /**
     * Configure and setup dymanic properties for the given menu item
     * @param {MenuItemUI} item
     */
    static config(item) {
        const {x: x0, y: y0} = item.parent.position
        const {numberPerLine, padding, height, width} = this.props
        const numLine = Math.ceil((item.index - item.parent.index) / numberPerLine)
        const numCol = (item.index - (item.parent.index + 1)) % numberPerLine
        const {heightTitle} = CanvasPanelUI.props
        item.position = {
            x: x0 + (width + padding.x) * numCol + padding.x,
            y: y0 + heightTitle + height * (numLine - 1) + (padding.y * numLine)
        }
        item.width = width
        item.height = height
        item.parent.height = heightTitle + numLine * (height + padding.y) + padding.y
    }
}

export default PanelButtonUI