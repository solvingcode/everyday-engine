import ItemUI from '../ItemUI.js'
import IconButtonUI from '../buttons/IconButtonUI.js'

class HtmlPanelUI extends ItemUI {
    /**
     * Draw a panel.
     * @param {MenuItem} item
     * @param {UIRenderer} uiRenderer
     */
    static draw(item, uiRenderer) {
        uiRenderer.getElement(item)
    }

    /**
     * @override
     */
    static postCreate(item, el, uiRenderer = null) {
        const name = item.element.props.name
        const title = item.element.props.title
        const displayedTitle = title ? title : name
        if (displayedTitle) {
            const titleEl = document.createElement('h4')
            titleEl.textContent = displayedTitle
            if(title){
                const attrIconValue = document.createElement('i')
                attrIconValue.className = [IconButtonUI.props.className, IconButtonUI.getClassName(item)].join(' ')
                titleEl.appendChild(attrIconValue)
            }
            el.appendChild(titleEl)
        }
    }

    /**
     * @override
     */
    static postUpdate(item, el, uiRenderer = null) {
        const name = item.element.props.name
        const title = item.element.props.title
        const displayedTitle = title ? title : name
        const titleEl = el.querySelector('h4')
        if (titleEl && el.getAttribute('data-name') !== displayedTitle) {
            titleEl.textContent = displayedTitle
        }
    }

    /**
     * @override
     */
    static getBody(el) {
        const existBody = el.getElementsByTagName('div')[0]
        if(existBody){
            return existBody
        }else{
            const body = document.createElement('div')
            el.appendChild(body)
            return body
        }
    }
}

HtmlPanelUI.props = {
    tag: 'div',
    width: '100%',
    className: 'panel panel-static'
}

export default HtmlPanelUI