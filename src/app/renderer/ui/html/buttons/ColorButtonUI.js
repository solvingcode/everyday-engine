import ItemUI from '../ItemUI.js'

/**
 * Color Button UI class
 * Manage the rendering of color button for HTML
 */
class ColorButtonUI extends ItemUI {
    /**
     * Draw a color button.
     * @param {MenuItem} item
     * @param {UIRenderer} uiRenderer
     */
    static draw(item, uiRenderer) {
        uiRenderer.getElement(item)
    }

    /**
     * @override
     */
    static getStyle(item) {
        const {color} = item.element.data
        return {
            backgroundColor: color
        }
    }

    /**
     * @override
     */
    static getClassName(item) {
        const {color} = item.element.data
        return !color && 'cross'
    }
}

ColorButtonUI.props = {
    tag: 'button',
    className: 'color',
    width: '40px',
    height: '40px'
}

export default ColorButtonUI