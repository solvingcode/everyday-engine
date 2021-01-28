import PanelButtonUI from './PanelButtonUI.js'

/**
 * LayerEntityButtonUI class
 * Define a button for entity element inside a panel
 */
class LayerEntityButtonUI extends PanelButtonUI {
    /**
     * Draw a button.
     * @param {MenuItem} item
     * @param {uiRenderer} uiRenderer
     */
    static draw(item, uiRenderer) {
        this.config(item)
        const {context} = uiRenderer
        const entity = item.element.getEntity()
        const {
            width, height,
            fillColor, fillColorSelected,
            colorText, textSize,
            padding, fillColorLocked, colorTextLocked,
            fillColorHidden, colorTextHidden
        } = this.props
        context.fillStyle = (item.element.isSelected() && fillColorSelected) ||
            (entity.locked && fillColorLocked) ||
            (!entity.visible && fillColorHidden) ||
            fillColor
        context.lineWidth = 1
        context.fillRect(item.position.x, item.position.y, width, height)
        context.fillStyle = (entity.locked && colorTextLocked) ||
            (!entity.visible && colorTextHidden) ||
            colorText
        context.font = `${textSize}px Arial`
        context.fillText(
            entity.name,
            item.position.x + padding.x,
            item.position.y + textSize + padding.y
        )
    }
}

LayerEntityButtonUI.props = {
    width: 170,
    height: 40,
    padding: {x: 10, y: 10},
    colorText: '#000000',
    colorTextLocked: '#D8B7A2',
    colorTextHidden: '#AAAAAA',
    fillColor: '#EEEEEE',
    fillColorSelected: '#C6EDFF',
    fillColorLocked: '#F5EDE8',
    fillColorHidden: '#F4F4F4',
    numberPerLine: 1,
    textSize: 16
}

export default LayerEntityButtonUI