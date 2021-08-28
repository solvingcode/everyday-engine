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
        const {element} = item
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
            titleEl.onclick = () => element.setCollapsed(!element.isCollapsed())
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
        const titleEl = this.getTitle(el)
        if (titleEl && el.getAttribute('data-name') !== displayedTitle) {
            titleEl.textContent = displayedTitle
        }
    }

    /**
     * @param {HTMLElement} el
     * @return {HTMLElement}
     */
    static getTitle(el){
        return el.querySelector('h4')
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
    className: 'panel panel-static'
}

export default HtmlPanelUI