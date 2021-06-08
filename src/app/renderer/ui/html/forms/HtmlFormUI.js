import ItemUI from '../ItemUI.js'

class HtmlFormUI extends ItemUI {

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
    static postCreate(item, el, uiRenderer) {
        const {version} = item.element
        el.setAttribute(this.props.version, version)
    }

    /**
     * @override
     */
    static postUpdate(item, el, uiRenderer) {
        const {version} = item.element
        const currentVersion = el.getAttribute(this.props.version)
        if (version !== parseInt(currentVersion)) {
            el.setAttribute(this.props.version, version)
        }
    }
}

HtmlFormUI.props = {
    tag: 'div',
    className: 'form',
    prefix: 'form-',
    version: 'form-version'
}

export default HtmlFormUI