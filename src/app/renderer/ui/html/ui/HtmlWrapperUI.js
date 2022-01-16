import ItemUI from '../ItemUI.js'

export default class HtmlWrapperUI extends ItemUI {
    /**
     * @param {MenuItem} item
     * @param {UIRenderer} uiRenderer
     */
    static draw(item, uiRenderer) {
        uiRenderer.getElement(item)
    }

    /**
     * @override
     */
    static getClassName(item) {
        return item.element.props.name
    }

    static props = {
        tag: 'div',
        className: 'wrapper'
    }
}